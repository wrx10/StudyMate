import React, { useState } from 'react';
import { GraduationCap, Lock, User, ArrowLeft, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import { DEMO_CREDENTIALS, DEMO_STUDENT } from '../data/demoData';
import { StudentUser, Language, Theme } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface LoginViewProps {
  language: Language;
  theme: Theme;
  onLogin: (student: StudentUser) => void;
}

export const LoginView: React.FC<LoginViewProps> = ({
  language,
  theme,
  onLogin,
}) => {
  const t = TRANSLATIONS[language];
  const isDark = theme === 'dark';
  const isRtl = language === 'ar';

  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId.trim() || !password.trim()) {
      setError(t.loginErrorEmpty);
      return;
    }

    if (
      (studentId.trim() === DEMO_CREDENTIALS.studentId && password === DEMO_CREDENTIALS.password) ||
      studentId.trim().length >= 3
    ) {
      setError(null);
      onLogin({
        ...DEMO_STUDENT,
        studentId: studentId.trim(),
      });
    } else {
      setError(t.loginErrorInvalid);
    }
  };

  const handleFillDemo = () => {
    setStudentId(DEMO_CREDENTIALS.studentId);
    setPassword(DEMO_CREDENTIALS.password);
    setError(null);
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen min-h-[100dvh] w-full flex items-center justify-center p-4 sm:p-6 font-sans antialiased transition-colors ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div
        className={`w-full max-w-md rounded-3xl shadow-xl border flex flex-col overflow-hidden transition-colors ${
          isDark
            ? 'bg-slate-900 border-slate-800'
            : 'bg-white border-slate-200/80'
        }`}
      >
        {/* Top Header Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 px-6 pt-10 pb-8 text-white text-center relative overflow-hidden shrink-0">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 mb-3 shadow-inner">
            <GraduationCap className="w-9 h-9 text-white" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">{t.appName}</h1>
          <p className="text-blue-100 text-xs sm:text-sm mt-1 font-medium">{t.studentPortal}</p>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
          <div>
            <div className="mb-5 text-center">
              <h2 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {t.loginTitle}
              </h2>
              <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {t.loginSubtitle}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className={`block text-xs sm:text-sm font-bold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                  htmlFor="student-id-input"
                >
                  {t.studentIdLabel}
                </label>
                <div className="relative">
                  <div
                    className={`absolute inset-y-0 flex items-center pointer-events-none text-slate-400 ${
                      isRtl ? 'right-0 pr-3.5' : 'left-0 pl-3.5'
                    }`}
                  >
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    id="student-id-input"
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder={t.studentIdPlaceholder}
                    className={`w-full py-3 rounded-2xl border text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      isRtl ? 'pr-11 pl-4' : 'pl-11 pr-4'
                    } ${
                      isDark
                        ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500'
                        : 'bg-slate-50/70 border-slate-200 text-slate-800 focus:bg-white focus:border-blue-500'
                    }`}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className={`block text-xs sm:text-sm font-bold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                  htmlFor="password-input"
                >
                  {t.passwordLabel}
                </label>
                <div className="relative">
                  <div
                    className={`absolute inset-y-0 flex items-center pointer-events-none text-slate-400 ${
                      isRtl ? 'right-0 pr-3.5' : 'left-0 pl-3.5'
                    }`}
                  >
                    <Lock className="w-5 h-5" />
                  </div>
                  <input
                    id="password-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t.passwordPlaceholder}
                    className={`w-full py-3 rounded-2xl border text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      isRtl ? 'pr-11 pl-4' : 'pl-11 pr-4'
                    } ${
                      isDark
                        ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500'
                        : 'bg-slate-50/70 border-slate-200 text-slate-800 focus:bg-white focus:border-blue-500'
                    }`}
                    required
                  />
                </div>
              </div>

              <button
                id="submit-login-btn"
                type="submit"
                className="w-full mt-3 min-h-[48px] py-3.5 px-5 rounded-2xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>{t.signInBtn}</span>
                {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </div>

          {/* Demo Credential Card */}
          <div className={`mt-6 pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
            <div
              className={`border rounded-2xl p-3.5 text-xs sm:text-sm shadow-xs ${
                isDark
                  ? 'bg-slate-800/80 border-slate-700 text-slate-300'
                  : 'bg-blue-50/80 border-blue-100 text-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`font-bold flex items-center gap-1.5 text-xs sm:text-sm ${
                    isDark ? 'text-blue-300' : 'text-blue-900'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" /> {t.demoAccountBanner}
                </span>
                <button
                  type="button"
                  onClick={handleFillDemo}
                  className="text-blue-600 hover:text-blue-700 font-bold text-xs underline underline-offset-2 cursor-pointer p-1"
                >
                  {t.autoFillBtn}
                </button>
              </div>
              <div className="space-y-1 font-mono text-xs">
                <div>
                  <span className={isDark ? 'text-slate-400' : 'text-slate-400'}>{t.studentIdLabel}:</span>{' '}
                  <span className={`font-semibold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                    {DEMO_CREDENTIALS.studentId}
                  </span>
                </div>
                <div>
                  <span className={isDark ? 'text-slate-400' : 'text-slate-400'}>{t.passwordLabel}:</span>{' '}
                  <span className={`font-semibold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
                    {DEMO_CREDENTIALS.password}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
