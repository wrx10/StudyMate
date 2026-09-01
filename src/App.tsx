/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Section, StudentUser, Language, Theme } from './types';
import { DEMO_STUDENT } from './data/demoData';
import { TRANSLATIONS } from './utils/translations';
import { LoginView } from './components/LoginView';
import { BottomNav } from './components/BottomNav';
import { HomeSection } from './components/HomeSection';
import { ScheduleSection } from './components/ScheduleSection';
import { AISection } from './components/AISection';
import { SettingsSection } from './components/SettingsSection';
import { LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentUser, setCurrentUser] = useState<StudentUser | null>(() => DEMO_STUDENT);
  const [currentSection, setCurrentSection] = useState<Section>('home');

  // Language state (default: Arabic 'ar') with localStorage cache
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('studymate_lang');
      if (saved === 'ar' || saved === 'en' || saved === 'tr') return saved;
    } catch {}
    return 'ar';
  });

  // Theme state (default: 'light') with localStorage cache
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('studymate_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    } catch {}
    return 'light';
  });

  const isDark = theme === 'dark';
  const isRtl = language === 'ar';
  const t = TRANSLATIONS[language];

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    try {
      localStorage.setItem('studymate_lang', newLang);
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = newLang;
    } catch {}
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem('studymate_theme', newTheme);
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch {}
  };

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [language, isRtl, isDark]);

  if (!currentUser) {
    return (
      <LoginView
        language={language}
        theme={theme}
        onLogin={(student) => setCurrentUser(student)}
      />
    );
  }

  const getSectionTitle = () => {
    switch (currentSection) {
      case 'schedule':
        return t.scheduleTitle;
      case 'ai':
        return t.aiTitle;
      case 'settings':
        return t.settingsTitle;
      case 'home':
      default:
        return `${t.greetingPrefix} ${currentUser.name}`;
    }
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return (
          <HomeSection
            student={currentUser}
            language={language}
            theme={theme}
            onNavigate={(sec) => setCurrentSection(sec)}
          />
        );
      case 'schedule':
        return (
          <ScheduleSection
            language={language}
            theme={theme}
          />
        );
      case 'ai':
        return (
          <AISection
            language={language}
            theme={theme}
          />
        );
      case 'settings':
        return (
          <SettingsSection
            language={language}
            theme={theme}
            onLanguageChange={handleLanguageChange}
            onThemeChange={handleThemeChange}
          />
        );
      default:
        return (
          <HomeSection
            student={currentUser}
            language={language}
            theme={theme}
            onNavigate={(sec) => setCurrentSection(sec)}
          />
        );
    }
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen min-h-[100dvh] w-full flex flex-col font-sans antialiased transition-colors duration-200 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Sticky Header with Safe-Area Inset Support */}
      <header
        className={`sticky top-0 z-30 w-full border-b backdrop-blur-md transition-colors duration-200 ${
          isDark
            ? 'bg-slate-900/90 border-slate-800'
            : 'bg-white/90 border-slate-200/80'
        }`}
      >
        <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 pt-safe pb-3 flex justify-between items-center">
          <div>
            <p className={`text-[11px] sm:text-xs font-bold tracking-wide ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {t.todayDate}
            </p>
            <h1 className={`text-lg sm:text-xl font-black tracking-tight leading-tight mt-0.5 ${isDark ? 'text-white' : 'text-blue-900'}`}>
              {getSectionTitle()}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentUser(null)}
              title={t.logOut}
              aria-label={t.logOut}
              className={`min-h-[44px] min-w-[44px] p-2.5 rounded-2xl flex items-center justify-center transition-colors cursor-pointer border ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-blue-400 border-slate-700'
                  : 'bg-blue-50 hover:bg-blue-100 active:bg-blue-200 text-blue-600 border-blue-100'
              }`}
            >
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center font-bold text-xs sm:text-sm border shadow-inner shrink-0 ${
                isDark
                  ? 'bg-blue-950/80 text-blue-300 border-blue-800'
                  : 'bg-blue-100 text-blue-600 border-blue-200/60'
              }`}
            >
              {currentUser.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
          </div>
        </div>
      </header>

      {/* Main Responsive Content Area with Smooth Transitions */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-3.5 sm:px-6 py-4 pb-24 sm:pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentSection}-${language}-${theme}`}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12, ease: 'easeOut' }}
            className="w-full"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Pinned Mobile Navigation Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-lg transition-colors duration-200 shadow-lg ${
          isDark
            ? 'bg-slate-900/95 border-slate-800'
            : 'bg-white/95 border-slate-200/90'
        }`}
      >
        <BottomNav
          currentSection={currentSection}
          language={language}
          theme={theme}
          onSelectSection={(sec) => setCurrentSection(sec)}
        />
      </div>
    </div>
  );
}
