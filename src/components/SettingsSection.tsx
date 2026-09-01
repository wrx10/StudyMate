import React from 'react';
import { Sun, Moon, Globe, Check } from 'lucide-react';
import { Language, Theme } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface SettingsSectionProps {
  language: Language;
  theme: Theme;
  onLanguageChange: (lang: Language) => void;
  onThemeChange: (theme: Theme) => void;
}

export const SettingsSection: React.FC<SettingsSectionProps> = ({
  language,
  theme,
  onLanguageChange,
  onThemeChange,
}) => {
  const t = TRANSLATIONS[language];
  const isDark = theme === 'dark';

  const languagesList: Array<{ id: Language; label: string; subLabel: string; dir: 'rtl' | 'ltr' }> = [
    { id: 'ar', label: 'العربية', subLabel: 'Arabic (RTL)', dir: 'rtl' },
    { id: 'en', label: 'English', subLabel: 'English (LTR)', dir: 'ltr' },
    { id: 'tr', label: 'Türkçe', subLabel: 'Turkish (LTR)', dir: 'ltr' },
  ];

  return (
    <div className="space-y-4 pb-16">
      {/* 1. Theme / Appearance Setting (Dark Mode / Light Mode) */}
      <section
        id="settings-theme-card"
        className={`p-4.5 rounded-3xl border transition-colors ${
          isDark
            ? 'bg-slate-800/80 border-slate-700/80 shadow-xs'
            : 'bg-white border-slate-100 shadow-xs'
        }`}
      >
        <div className="flex items-center gap-2 mb-3.5">
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center ${
              isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-blue-50 text-blue-600'
            }`}
          >
            {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </div>
          <div>
            <h3 className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.theme}
            </h3>
            <p className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {isDark ? t.darkMode : t.lightMode}
            </p>
          </div>
        </div>

        {/* 2-Option Segmented Switch */}
        <div
          className={`grid grid-cols-2 p-1 rounded-2xl gap-1.5 ${
            isDark ? 'bg-slate-900/90 border border-slate-700' : 'bg-slate-100/90 border border-slate-200/60'
          }`}
        >
          <button
            type="button"
            id="theme-btn-light"
            onClick={() => onThemeChange('light')}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              !isDark
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sun className="w-3.5 h-3.5 shrink-0" />
            <span>{t.lightMode}</span>
          </button>

          <button
            type="button"
            id="theme-btn-dark"
            onClick={() => onThemeChange('dark')}
            className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              isDark
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Moon className="w-3.5 h-3.5 shrink-0" />
            <span>{t.darkMode}</span>
          </button>
        </div>
      </section>

      {/* 2. Language Selection (Arabic / English / Turkish) */}
      <section
        id="settings-language-card"
        className={`p-4.5 rounded-3xl border transition-colors ${
          isDark
            ? 'bg-slate-800/80 border-slate-700/80 shadow-xs'
            : 'bg-white border-slate-100 shadow-xs'
        }`}
      >
        <div className="flex items-center gap-2 mb-3.5">
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center ${
              isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'
            }`}
          >
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <h3 className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.language}
            </h3>
            <p className={`text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {language === 'ar' ? 'العربية (RTL)' : language === 'en' ? 'English (LTR)' : 'Türkçe (LTR)'}
            </p>
          </div>
        </div>

        {/* Language Options list */}
        <div className="space-y-2">
          {languagesList.map((langItem) => {
            const isSelected = language === langItem.id;
            return (
              <button
                key={langItem.id}
                type="button"
                id={`lang-option-${langItem.id}`}
                onClick={() => onLanguageChange(langItem.id)}
                className={`w-full flex items-center justify-between p-3 rounded-2xl border transition-all cursor-pointer text-start ${
                  isSelected
                    ? isDark
                      ? 'bg-blue-600/20 border-blue-500/60 text-white shadow-xs'
                      : 'bg-blue-50/90 border-blue-300 text-blue-900 shadow-2xs'
                    : isDark
                    ? 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:bg-slate-900'
                    : 'bg-slate-50/80 border-slate-100 text-slate-700 hover:bg-slate-100/70'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all ${
                      isSelected
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : isDark
                        ? 'border-slate-600 bg-slate-800'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold block">{langItem.label}</span>
                    <span
                      className={`text-[10px] block ${
                        isSelected
                          ? isDark ? 'text-blue-300' : 'text-blue-600 font-semibold'
                          : isDark ? 'text-slate-400' : 'text-slate-400'
                      }`}
                    >
                      {langItem.subLabel}
                    </span>
                  </div>
                </div>

                {isSelected && (
                  <Check
                    className={`w-4 h-4 shrink-0 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
