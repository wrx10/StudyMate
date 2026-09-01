import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialize Gemini AI Client
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Educational AI endpoint with multi-language support (ar, en, tr)
app.post("/api/ai/ask", async (req, res) => {
  try {
    const { question, history, language = "ar" } = req.body;

    if (!question || typeof question !== "string") {
      const errs: Record<string, string> = {
        ar: "يرجى كتابة سؤال دراسي صحيح.",
        en: "Please enter a valid study or educational question.",
        tr: "Lütfen geçerli bir ders veya eğitim sorusu girin.",
      };
      return res.status(400).json({ error: errs[language] || errs.ar });
    }

    const ai = getGeminiClient();
    if (!ai) {
      const fallbackMsgs: Record<string, string> = {
        ar: "أهلاً بك! أنا مساعد StudyMate التعليمي والدراسي. لتفعيل إجابات الذكاء الاصطناعي الفورية، يُرجى التأكد من توفر مفتاح GEMINI_API_KEY في بيئة العمل. في هذه الأثناء، تذكّر تنظيم حصص المذاكرة ومراجعة جدول حصصك!",
        en: "Welcome! I am your StudyMate AI Educational Assistant. To enable live AI responses, please ensure GEMINI_API_KEY is configured. In the meantime, remember to organize your study sessions and check your class timetable!",
        tr: "Hoş geldiniz! Ben StudyMate Yapay Zeka Eğitim Asistanınızım. Canlı yapay zeka yanıtlarını etkinleştirmek için lütfen GEMINI_API_KEY anahtarının tanımlı olduğundan emin olun. Bu sırada ders programınızı kontrol edebilir ve çalışma planınızı yapabilirsiniz!",
      };
      return res.json({
        answer: fallbackMsgs[language] || fallbackMsgs.ar,
      });
    }

    let systemInstruction = "";
    if (language === "en") {
      systemInstruction = `You are StudyMate AI, a dedicated academic and educational tutor for students.
Your primary role is to help students understand school and coursework concepts, solve textbook problems step-by-step, review class topics, and prepare for academic evaluations across subjects like Mathematics, Physics, Chemistry, English, Arabic, Biology, Computer Science, and effective study techniques.

Rules:
1. Respond in clear, professional, well-structured English using markdown.
2. Only answer educational, academic, and study-related questions.
3. If the user asks non-educational, casual, or off-topic questions (e.g. video games, celebrity gossip), politely redirect them: "I am StudyMate AI, dedicated strictly to your academic studies and coursework. How can I help you with your classes or study topics today?"
4. Keep explanations encouraging, concise, pedagogical, and accurate.`;
    } else if (language === "tr") {
      systemInstruction = `Sen StudyMate AI'sın (Yapay Zeka Çalışma ve Eğitim Asistanı). Öğrencilere Matematik, Fizik, Kimya, İngilizce, Arapça, Biyoloji ve Bilgisayar Bilimi gibi derslerinde, akademik kavramları anlamada, problem çözmede ve sınavlara hazırlanmada rehberlik eden pedagojik bir asistansın.

Kurallar:
1. Yanıtlarını her zaman akıcı, profesyonel ve düzenli bir Türkçe ile Markdown biçiminde ver.
2. Yalnızca eğitim, ders konuları, ödev yardımı ve akademik sorulara yanıt ver.
3. Eğitim dışı veya alakasız konularda (oyunlar, magazin vb.) nazikçe uyar: "Ben StudyMate Eğitim Asistanıyım, yalnızca derslerinize ve akademik konulara yardımcı olmak için buradayım. Bugün hangi dersinizde veya konuda yardımcı olabilirim?"
4. Konuları açık, adım adım ve motive edici bir dille anlat.`;
    } else {
      systemInstruction = `أنت StudyMate AI (المساعد الدراسي والتعليمي الذكي)، مساعد مخصص للطلاب في دراستهم الأكاديمية وحصص المقررات المدرسية.
مهمتك مساعدة الطالب في استيعاب المفاهيم، وشرح المسائل الأكاديمية خطوة بخطوة، ومراجعة مواضيع الحصص والمقررات مثل الرياضيات، الفيزياء، الكيمياء، اللغة الإنجليزية، اللغة العربية، الأحياء، وعلوم الحاسب.

القواعد:
1. أجب دائماً باللغة العربية الفصحى الواضحة والمنسقة عبر Markdown.
2. أجب حصراً عن الأسئلة التعليمية والأكاديمية وحصص المقررات.
3. إذا طرح المستخدم سؤالاً خارج الدراسة، اعتذر بلباقة: "أنا مساعد StudyMate التعليمي، مخصص لمساعدتك في دراستك وحصصك الأكاديمية فقط. كيف يمكنني مساعدتك في مقرراتك اليوم؟"
4. نسّق الإجابات بعناوين وخطوات واضحة وبنبرة تشجيعية.`;
    }

    const contents: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history) && history.length > 0) {
      for (const msg of history.slice(-6)) {
        if (msg.role === "user" || msg.role === "model") {
          contents.push({
            role: msg.role,
            parts: [{ text: String(msg.text || "") }],
          });
        }
      }
    }

    contents.push({
      role: "user",
      parts: [{ text: question }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const defaultAnswers: Record<string, string> = {
      ar: "تعذر إنشاء إجابة في الوقت الحالي. يرجى إعادة صياغة سؤالك الدراسي.",
      en: "Unable to generate an answer at this time. Please rephrase your study question.",
      tr: "Şu anda yanıt oluşturulamadı. Lütfen çalışma sorunuzu yeniden ifade edin.",
    };

    const answer = response.text || (defaultAnswers[language] || defaultAnswers.ar);
    return res.json({ answer });
  } catch (error: unknown) {
    console.error("Gemini API Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to process educational question";
    return res.status(500).json({ error: errorMessage });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: "0.0.0.0", port: PORT },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`StudyMate server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
