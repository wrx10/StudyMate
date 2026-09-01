import React from 'react';
import { Home, Calendar, Bot, Settings as SettingsIcon } from 'lucide-react';
import { Section, Language, Theme } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface BottomNavProps {
  currentSection: Section;
  language: Language;
  theme: Theme;
  onSelectSection: (section: Section) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  currentSection,
  language,
  theme,
  onSelectSection,
}) => {
  const t = TRANSLATIONS[language];
  const isDark = theme === 'dark';

  const navItems: Array<{
    id: Section;
    label: string;
    icon: React.FC<{ className?: string }>;
  }> = [
    { id: 'home', label: t.nav.home, icon: Home },
    { id: 'schedule', label: t.nav.schedule, icon: Calendar },
    { id: 'ai', label: t.nav.ai, icon: Bot },
    { id: 'settings', label: t.nav.settings, icon: SettingsIcon },
  ];

  return (
    <nav
      id="bottom-navigation-bar"
      aria-label="Bottom Navigation"
      className={`w-full max-w-4xl mx-auto flex justify-around items-center px-2 pt-1.5 pb-[max(0.6rem,env(safe-area-inset-bottom,0px))] select-none`}
    >
      {navItems.map((item) => {
        const isSelected = currentSection === item.id;
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            id={`bottom-nav-${item.id}`}
            onClick={() => onSelectSection(item.id)}
            aria-label={item.label}
            aria-current={isSelected ? 'page' : undefined}
            className="flex-1 min-h-[48px] flex flex-col items-center justify-center py-1 transition-transform active:scale-95 cursor-pointer touch-manipulation"
          >
            {isSelected ? (
              <>
                <div className="w-10 h-8 sm:w-12 sm:h-9 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/25 transition-all">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span className="text-[11px] font-bold text-blue-600 mt-1 whitespace-nowrap">
                  {item.label}
                </span>
              </>
            ) : (
              <>
                <div
                  className={`w-10 h-8 sm:w-12 sm:h-9 flex items-center justify-center transition-colors ${
                    isDark
                      ? 'text-slate-400 hover:text-slate-200'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <span
                  className={`text-[11px] font-medium mt-1 whitespace-nowrap transition-colors ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </span>
              </>
            )}
          </button>
        );
      })}
    </nav>
  );
};
