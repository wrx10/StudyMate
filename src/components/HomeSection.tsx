import React from 'react';
import { StudentUser, Section, Language, Theme } from '../types';
import { WEEKLY_SCHEDULE, getReminders } from '../data/demoData';
import { TRANSLATIONS } from '../utils/translations';
import { Bell, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react';

interface HomeSectionProps {
  student: StudentUser;
  language: Language;
  theme: Theme;
  onNavigate: (section: Section) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  student: _student,
  language,
  theme,
  onNavigate,
}) => {
  const t = TRANSLATIONS[language];
  const isDark = theme === 'dark';
  const isRtl = language === 'ar';

  // Tuesday classes (day 2 in schedule demo)
  const todaysClasses = WEEKLY_SCHEDULE.filter((c) => c.dayOfWeek === 2);
  const nextClass = todaysClasses[0];
  const reminders = getReminders();

  return (
    <div className="space-y-4 pb-16">
      {/* Immersive "Next Class" Hero Banner Card */}
      {nextClass && (
        <div
          id="home-next-class-card"
          onClick={() => onNavigate('schedule')}
          className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-5 shadow-lg shadow-blue-600/20 text-white relative overflow-hidden cursor-pointer active:scale-[0.99] transition-transform"
        >
          <div className="absolute -left-6 -top-6 w-28 h-28 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] text-blue-100 font-bold tracking-wide">
              {t.nextClassBadge} • {nextClass.startTime[language]}
            </span>
            <div className="bg-white/20 px-2.5 py-0.5 rounded-full text-[10px] font-semibold backdrop-blur-xs">
              {nextClass.code}
            </div>
          </div>

          <h2 className="text-xl font-black mb-3 leading-snug">
            {nextClass.subject[language]}
          </h2>

          <div className="flex items-center justify-between gap-3 pt-1 border-t border-white/15 text-xs text-blue-100">
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-2.5 py-0.5 rounded-lg text-xs font-semibold backdrop-blur-xs text-white">
                {nextClass.room[language]}
              </span>
              <span>
                {t.startsAt} {nextClass.startTime[language]}
              </span>
            </div>
            <div className="flex items-center text-[11px] font-bold text-white/90">
              <span>{t.nav.schedule}</span>
              {isRtl ? <ChevronLeft className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
            </div>
          </div>
        </div>
      )}

      {/* Today's Classes List */}
      <section id="home-todays-classes-section">
        <div className="flex justify-between items-center mb-2.5 px-0.5">
          <h3 className={`text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
            {t.todaysClasses}
          </h3>
          <span className={`text-[10px] font-bold ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>
            {t.classesCount(todaysClasses.length)}
          </span>
        </div>

        <div className="space-y-2">
          {todaysClasses.map((cls, idx) => {
            const isFirst = idx === 0;
            return (
              <div
                key={cls.id}
                onClick={() => onNavigate('schedule')}
                className={`p-3.5 rounded-2xl border flex items-center shadow-2xs transition-all cursor-pointer ${
                  isDark
                    ? 'bg-slate-800/90 border-slate-700/80 hover:border-blue-500/60'
                    : 'bg-white border-slate-100 hover:border-blue-200'
                }`}
              >
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-bold truncate ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    {cls.subject[language]}
                  </p>
                  <p className={`text-[10px] font-medium mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {cls.startTime[language]} - {cls.endTime[language]} • {cls.room[language]}
                  </p>
                </div>
                {isFirst ? (
                  <div className={`px-2 py-0.5 rounded-md text-[10px] font-bold shrink-0 ${isRtl ? 'mr-2' : 'ml-2'} ${
                    isDark ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' : 'text-emerald-700 bg-emerald-50'
                  }`}>
                    {t.activeNow}
                  </div>
                ) : (
                  <div className={`text-[10px] font-semibold shrink-0 ${isRtl ? 'mr-2' : 'ml-2'} ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {cls.code}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Reminders Card (Focused on classes & study sessions, NO upcoming exams / homework) */}
      <section
        id="home-reminders-section"
        className={`p-4 rounded-3xl border shadow-2xs transition-colors ${
          isDark
            ? 'bg-slate-800/80 border-slate-700/80'
            : 'bg-blue-50/70 border-blue-100'
        }`}
      >
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-5 h-5 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-xs">
            <Bell className="w-3 h-3" />
          </div>
          <h3 className={`text-xs font-bold ${isDark ? 'text-blue-200' : 'text-blue-950'}`}>
            {t.quickReminders}
          </h3>
        </div>

        <ul className="space-y-2">
          {reminders.map((rem) => (
            <li
              key={rem.id}
              className={`text-[11px] flex items-start gap-2 leading-tight ${
                isDark ? 'text-slate-300' : 'text-blue-900'
              }`}
            >
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0 mt-1" />
              <span>
                <strong className={`font-bold ${isDark ? 'text-white' : 'text-blue-950'}`}>
                  {rem.title[language]}
                </strong>
                <span className={`block text-[10px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-blue-700/90'}`}>
                  {rem.subtitle[language]} ({rem.timeContext[language]})
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
