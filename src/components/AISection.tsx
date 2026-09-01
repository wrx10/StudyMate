import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, RefreshCw, AlertCircle } from 'lucide-react';
import Markdown from 'react-markdown';
import { ChatMessage, Language, Theme } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface AISectionProps {
  language: Language;
  theme: Theme;
}

export const AISection: React.FC<AISectionProps> = ({
  language,
  theme,
}) => {
  const t = TRANSLATIONS[language];
  const isDark = theme === 'dark';
  const isRtl = language === 'ar';

  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'msg-welcome',
      role: 'model',
      text: t.aiWelcome,
      timestamp: '',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update initial welcome message when language changes if only the welcome message exists
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length <= 1) {
        return [
          {
            id: 'msg-welcome',
            role: 'model',
            text: t.aiWelcome,
            timestamp: '',
          },
        ];
      }
      return prev;
    });
  }, [language, t.aiWelcome]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const question = (textToSend || input).trim();
    if (!question || isLoading) return;

    setError(null);
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      text: question,
      timestamp: new Date().toLocaleTimeString(language === 'ar' ? 'ar-EG' : language === 'tr' ? 'tr-TR' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question,
          history: historyPayload,
          language,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || t.aiError);
      }

      const data = await res.json();
      const modelMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'model',
        text: data.answer || '',
        timestamp: new Date().toLocaleTimeString(language === 'ar' ? 'ar-EG' : language === 'tr' ? 'tr-TR' : 'en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err: unknown) {
      console.error('AI error:', err);
      const errMsg = err instanceof Error ? err.message : t.aiError;
      setError(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100dvh-170px)] sm:h-[calc(100dvh-180px)] min-h-[480px] max-h-[820px] w-full">
      {/* Top Banner Tag */}
      <div className="flex items-center justify-between px-1 mb-2.5 shrink-0">
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold ${
            isDark
              ? 'bg-blue-950/80 border-blue-800/80 text-blue-300'
              : 'bg-blue-50 border-blue-100 text-blue-700'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>{t.aiBadge}</span>
        </div>
        <span className={`text-[11px] font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          GEMINI 2.5 FLASH
        </span>
      </div>

      {/* Quick Educational Prompts (shown when only initial message) */}
      {messages.length <= 1 && (
        <div className="shrink-0 mb-3">
          <p className={`text-xs font-bold mb-2 px-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {t.aiQuickTopics}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {t.quickPrompts.map((item, idx) => (
              <button
                key={idx}
                type="button"
                id={`quick-ai-prompt-${idx}`}
                onClick={() => handleSend(item.query)}
                className={`p-3 min-h-[44px] rounded-2xl border text-start transition-all text-xs flex items-center gap-2 shadow-xs cursor-pointer active:scale-98 ${
                  isDark
                    ? 'bg-slate-800/90 hover:bg-slate-700/80 border-slate-700/80 text-slate-200'
                    : 'bg-white hover:bg-blue-50/70 active:bg-blue-100 border-slate-200/80 text-slate-700'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                <span className="font-bold line-clamp-1">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages Scroll Container */}
      <div className="flex-1 overflow-y-auto space-y-3 px-1 py-1">
        {messages.map((msg) => {
          const isUser = msg.role === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${
                isUser ? (isRtl ? 'justify-start flex-row-reverse' : 'justify-end') : 'justify-start'
              }`}
            >
              {!isUser && (
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[88%] sm:max-w-[80%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-xs ${
                  isUser
                    ? 'bg-blue-600 text-white rounded-br-xs'
                    : isDark
                    ? 'bg-slate-800/95 text-slate-100 border border-slate-700/80 rounded-bl-xs'
                    : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-xs'
                }`}
              >
                {isUser ? (
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                ) : (
                  <div
                    className={`prose prose-sm max-w-none ${
                      isDark ? 'text-slate-100' : 'text-slate-800'
                    }`}
                  >
                    <Markdown>{msg.text}</Markdown>
                  </div>
                )}
                {msg.timestamp && (
                  <span
                    className={`block text-[10px] mt-1.5 ${
                      isUser
                        ? 'text-blue-200 text-end'
                        : isDark
                        ? 'text-slate-400 text-end'
                        : 'text-slate-400 text-end'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                )}
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Bot className="w-4 h-4" />
            </div>
            <div
              className={`rounded-2xl px-4 py-3 border shadow-xs flex items-center gap-2 text-xs sm:text-sm ${
                isDark
                  ? 'bg-slate-800/90 border-slate-700/80 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-600'
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-600" />
              <span>{t.aiThinking}</span>
            </div>
          </div>
        )}

        {error && (
          <div
            className={`p-3 rounded-2xl text-xs sm:text-sm flex items-center gap-2.5 ${
              isDark
                ? 'bg-rose-950/70 border border-rose-800 text-rose-300'
                : 'bg-rose-50 border border-rose-200 text-rose-700'
            }`}
          >
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
            <span>{error}</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div
        className={`mt-2.5 shrink-0 rounded-2xl border shadow-xs p-1.5 flex items-end gap-1.5 transition-colors ${
          isDark
            ? 'bg-slate-800/95 border-slate-700/90'
            : 'bg-white border-slate-200'
        }`}
      >
        <textarea
          id="ai-prompt-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t.aiPlaceholder}
          rows={1}
          className={`flex-1 resize-none bg-transparent border-0 focus:outline-none focus:ring-0 text-xs sm:text-sm px-3 py-2 max-h-24 ${
            isDark
              ? 'text-white placeholder-slate-400'
              : 'text-slate-800 placeholder-slate-400'
          }`}
        />
        <button
          id="ai-submit-button"
          type="button"
          onClick={() => handleSend()}
          disabled={!input.trim() || isLoading}
          className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed text-white shadow-sm shadow-blue-500/25 transition-all cursor-pointer shrink-0 flex items-center justify-center"
          aria-label={t.sendPrompt}
        >
          <Send className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};
