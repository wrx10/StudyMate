import { Language } from '../types';

export interface Translations {
  appName: string;
  appSubtitle: string;
  studentPortal: string;
  loginTitle: string;
  loginSubtitle: string;
  studentIdLabel: string;
  studentIdPlaceholder: string;
  passwordLabel: string;
  passwordPlaceholder: string;
  signInBtn: string;
  demoAccountBanner: string;
  autoFillBtn: string;
  loginErrorEmpty: string;
  loginErrorInvalid: string;
  logOut: string;
  todayDate: string;
  greetingPrefix: string;
  nextClassBadge: string;
  startsAt: string;
  beginsAt: string;
  todaysClasses: string;
  classesCount: (count: number) => string;
  activeNow: string;
  quickReminders: string;
  noReminders: string;
  scheduleTitle: string;
  classNumber: (num: number) => string;
  instructorLabel: string;
  roomLabel: string;
  noClassesToday: string;
  noClassesSubtext: string;
  todayTag: string;
  settingsTitle: string;
  appearance: string;
  theme: string;
  darkMode: string;
  lightMode: string;
  language: string;
  arabic: string;
  english: string;
  turkish: string;
  aiTitle: string;
  aiBadge: string;
  aiQuickTopics: string;
  aiPlaceholder: string;
  aiThinking: string;
  aiError: string;
  aiWelcome: string;
  sendPrompt: string;
  nav: {
    home: string;
    schedule: string;
    ai: string;
    settings: string;
  };
  quickPrompts: Array<{
    label: string;
    query: string;
  }>;
  days: Array<{
    id: number;
    short: string;
    full: string;
  }>;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  ar: {
    appName: 'StudyMate',
    appSubtitle: 'رفيق الطالب وحصص الدراسة',
    studentPortal: 'بوابة الطالب ورفيق الدراسة',
    loginTitle: 'تسجيل دخول الطالب',
    loginSubtitle: 'أدخل بياناتك الأكاديمية للمتابعة',
    studentIdLabel: 'الرقم الجامعي',
    studentIdPlaceholder: 'مثال: STU-2026-8941',
    passwordLabel: 'كلمة المرور',
    passwordPlaceholder: 'أدخل كلمة المرور',
    signInBtn: 'تسجيل الدخول إلى StudyMate',
    demoAccountBanner: 'حساب طالب تجريبي',
    autoFillBtn: 'تعبئة تلقائية',
    loginErrorEmpty: 'يرجى إدخال الرقم الجامعي وكلمة المرور.',
    loginErrorInvalid: 'بيانات الدخول غير صحيحة. يمكنك استخدام بيانات الحساب التجريبي الموضحة بالأسفل.',
    logOut: 'تسجيل الخروج',
    todayDate: 'الثلاثاء، 1 سبتمبر 2026',
    greetingPrefix: 'مرحباً،',
    nextClassBadge: 'الحصة القادمة',
    startsAt: 'تبدأ في',
    beginsAt: 'تبدأ في تمام',
    todaysClasses: 'حصص اليوم',
    classesCount: (count: number) => `${count} حصص`,
    activeNow: 'جارية الآن',
    quickReminders: 'التنبيهات السريعة',
    noReminders: 'لا توجد تنبيهات معلقة حالياً.',
    scheduleTitle: 'جدول الحصص الأسبوعي',
    classNumber: (num: number) => `حصة #${num}`,
    instructorLabel: 'المحاضر',
    roomLabel: 'القاعة',
    noClassesToday: 'لا توجد حصص مجدولة لهذا اليوم',
    noClassesSubtext: 'استمتع بوقت المذاكرة والمراجعة المستقلة!',
    todayTag: 'اليوم',
    settingsTitle: 'الإعدادات',
    appearance: 'المظهر والسمة',
    theme: 'الوضع',
    darkMode: 'الوضع الداكن',
    lightMode: 'الوضع الفاتح',
    language: 'اللغة',
    arabic: 'العربية',
    english: 'English',
    turkish: 'Türkçe',
    aiTitle: 'المساعد الدراسي الذكي',
    aiBadge: 'أسئلة تعليمية ودراسية فقط',
    aiQuickTopics: 'مواضيع وحصص مقترحة',
    aiPlaceholder: 'اطرح سؤالاً تعليمياً أو دراسياً...',
    aiThinking: 'جاري التفكير وصياغة الشرح الأكاديمي...',
    aiError: 'تعذر الاتصال بخدمة المساعد الدراسي الذكي.',
    aiWelcome: 'مرحباً بك! أنا **مساعد StudyMate التعليمي الذكي**. أنا هنا خصيصاً لمساعدتك في فهم المفاهيم الأكاديمية وحصص المقررات وحل المسائل والاستعداد للاختبارات. ما الذي ترغب في استذكاره اليوم؟',
    sendPrompt: 'إرسال السؤال',
    nav: {
      home: 'الرئيسية',
      schedule: 'الجدول',
      ai: 'المساعد الذكي',
      settings: 'الإعدادات',
    },
    quickPrompts: [
      { label: 'الرياضيات: حل المعادلات', query: 'اشرح طريقة حل المعادلات التربيعية باستخدام القانون العام مع مثال تطبيقي خطوة بخطوة.' },
      { label: 'الفيزياء: قوانين نيوتن', query: 'ما هي قوانين نيوتن الثلاثة للحركة وكيف نطبقها في حساب القوة والتسارع؟' },
      { label: 'الكيمياء: الجدول الدوري', query: 'اشرح كيفية تحديد التوزيع الإلكتروني والروابط الكيميائية اعتماداً على الجدول الدوري.' },
      { label: 'الأحياء: الانقسام الخلوي', query: 'ما هو الفرق بين الانقسام المتساوي والانقسام المنصف (الميوزي) في الخلايا الحية؟' },
    ],
    days: [
      { id: 1, short: 'إثنين', full: 'الإثنين' },
      { id: 2, short: 'ثلاثاء', full: 'الثلاثاء' },
      { id: 3, short: 'أربعاء', full: 'الأربعاء' },
      { id: 4, short: 'خميس', full: 'الخميس' },
      { id: 5, short: 'جمعة', full: 'الجمعة' },
    ],
  },
  en: {
    appName: 'StudyMate',
    appSubtitle: 'Student Companion & Class Timetable',
    studentPortal: 'Student Portal & Study Companion',
    loginTitle: 'Student Sign In',
    loginSubtitle: 'Enter your academic credentials to continue',
    studentIdLabel: 'Student ID',
    studentIdPlaceholder: 'e.g. STU-2026-8941',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter your password',
    signInBtn: 'Sign In to StudyMate',
    demoAccountBanner: 'Demo Student Account',
    autoFillBtn: 'Auto-fill',
    loginErrorEmpty: 'Please enter Student ID and password.',
    loginErrorInvalid: 'Invalid credentials. You can use the demo account credentials below.',
    logOut: 'Log Out',
    todayDate: 'Tuesday, Sep 1, 2026',
    greetingPrefix: 'Welcome,',
    nextClassBadge: 'Next Class',
    startsAt: 'Starts at',
    beginsAt: 'Starts at',
    todaysClasses: "Today's Classes",
    classesCount: (count: number) => `${count} classes`,
    activeNow: 'In Session',
    quickReminders: 'Quick Reminders',
    noReminders: 'No pending reminders right now.',
    scheduleTitle: 'Class Schedule',
    classNumber: (num: number) => `Class #${num}`,
    instructorLabel: 'Instructor',
    roomLabel: 'Room',
    noClassesToday: 'No classes scheduled for today',
    noClassesSubtext: 'Enjoy your independent study time!',
    todayTag: 'Today',
    settingsTitle: 'Settings',
    appearance: 'Appearance',
    theme: 'Theme',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    language: 'Language',
    arabic: 'العربية',
    english: 'English',
    turkish: 'Türkçe',
    aiTitle: 'AI Study Assistant',
    aiBadge: 'Educational Questions Only',
    aiQuickTopics: 'Suggested Topics',
    aiPlaceholder: 'Ask an educational or study question...',
    aiThinking: 'Thinking & formulating explanation...',
    aiError: 'Failed to connect to StudyMate AI Assistant.',
    aiWelcome: 'Welcome! I am your **StudyMate AI Educational Assistant**. I am here to help you understand academic concepts, coursework, solve problems, and prepare for exams. What would you like to study today?',
    sendPrompt: 'Send Question',
    nav: {
      home: 'Home',
      schedule: 'Schedule',
      ai: 'AI Assistant',
      settings: 'Settings',
    },
    quickPrompts: [
      { label: 'Math: Quadratic Formula', query: 'Explain how to solve quadratic equations using the quadratic formula with a step-by-step example.' },
      { label: "Physics: Newton's Laws", query: "What are Newton's three laws of motion and how do we apply them to calculate net force?" },
      { label: 'Chemistry: Periodic Trends', query: 'Explain electron configurations and atomic radius trends across the periodic table.' },
      { label: 'Biology: Cell Division', query: 'What are the main differences between mitosis and meiosis in eukaryotic cells?' },
    ],
    days: [
      { id: 1, short: 'Mon', full: 'Monday' },
      { id: 2, short: 'Tue', full: 'Tuesday' },
      { id: 3, short: 'Wed', full: 'Wednesday' },
      { id: 4, short: 'Thu', full: 'Thursday' },
      { id: 5, short: 'Fri', full: 'Friday' },
    ],
  },
  tr: {
    appName: 'StudyMate',
    appSubtitle: 'Öğrenci Portalı ve Ders Asistanı',
    studentPortal: 'Öğrenci Portalı ve Ders Asistanı',
    loginTitle: 'Öğrenci Girişi',
    loginSubtitle: 'Devam etmek için akademik bilgilerinizi girin',
    studentIdLabel: 'Öğrenci Numarası',
    studentIdPlaceholder: 'Örn: STU-2026-8941',
    passwordLabel: 'Şifre',
    passwordPlaceholder: 'Şifrenizi girin',
    signInBtn: "StudyMate'e Giriş Yap",
    demoAccountBanner: 'Örnek Öğrenci Hesabı',
    autoFillBtn: 'Otomatik Doldur',
    loginErrorEmpty: 'Lütfen öğrenci numaranızı ve şifrenizi girin.',
    loginErrorInvalid: 'Geçersiz bilgiler. Aşağıdaki örnek hesap bilgilerini kullanabilirsiniz.',
    logOut: 'Çıkış Yap',
    todayDate: 'Salı, 1 Eylül 2026',
    greetingPrefix: 'Hoş geldin,',
    nextClassBadge: 'Sıradaki Ders',
    startsAt: 'Başlama saati:',
    beginsAt: 'Başlama saati:',
    todaysClasses: 'Bugünkü Dersler',
    classesCount: (count: number) => `${count} ders`,
    activeNow: 'Şu an devam ediyor',
    quickReminders: 'Hızlı Hatırlatıcılar',
    noReminders: 'Şu anda bekleyen hatırlatıcı yok.',
    scheduleTitle: 'Haftalık Ders Programı',
    classNumber: (num: number) => `Ders #${num}`,
    instructorLabel: 'Öğretim Üyesi',
    roomLabel: 'Derslik',
    noClassesToday: 'Bugün için planlanmış ders yok',
    noClassesSubtext: 'Bağımsız çalışma vaktinizin tadını çıkarın!',
    todayTag: 'Bugün',
    settingsTitle: 'Ayarlar',
    appearance: 'Görünüm',
    theme: 'Tema',
    darkMode: 'Karanlık Mod',
    lightMode: 'Aydınlık Mod',
    language: 'Dil',
    arabic: 'العربية',
    english: 'English',
    turkish: 'Türkçe',
    aiTitle: 'Yapay Zeka Çalışma Asistanı',
    aiBadge: 'Yalnızca Eğitsel Sorular',
    aiQuickTopics: 'Önerilen Konular',
    aiPlaceholder: 'Eğitsel veya dersle ilgili bir soru sorun...',
    aiThinking: 'Düşünülüyor ve açıklama hazırlanıyor...',
    aiError: 'StudyMate Yapay Zeka Asistanına bağlanılamadı.',
    aiWelcome: "Hoş geldiniz! Ben **StudyMate Yapay Zeka Eğitim Asistanınızım**. Akademik kavramları, ders konularını anlamanıza, problem çözmenize ve sınavlara hazırlanmanıza yardımcı olmak için buradayım. Bugün ne çalışmak istersiniz?",
    sendPrompt: 'Soruyu Gönder',
    nav: {
      home: 'Ana Sayfa',
      schedule: 'Ders Programı',
      ai: 'Yapay Zeka',
      settings: 'Ayarlar',
    },
    quickPrompts: [
      { label: 'Matematik: İkinci Dereceden Denklemler', query: 'İkinci dereceden denklemlerin diskriminant (delta) formülü ile adım adım nasıl çözüldüğünü açıklayın.' },
      { label: 'Fizik: Newton Hareket Yasaları', query: "Newton'ın 3 temel hareket yasasını ve net kuvvet hesaplamalarındaki uygulamasını açıklayın." },
      { label: 'Kimya: Periyodik Sistem', query: 'Periyodik tabloda elektron dizilimi, grup ve periyot bulma mantığını örneklerle anlatın.' },
      { label: 'Biyoloji: Hücre Bölünmesi', query: 'Mitoz ve mayoz bölünme arasındaki temel farklar nelerdir?' },
    ],
    days: [
      { id: 1, short: 'Pzt', full: 'Pazartesi' },
      { id: 2, short: 'Sal', full: 'Salı' },
      { id: 3, short: 'Çar', full: 'Çarşamba' },
      { id: 4, short: 'Per', full: 'Perşembe' },
      { id: 5, short: 'Cum', full: 'Cuma' },
    ],
  },
};
