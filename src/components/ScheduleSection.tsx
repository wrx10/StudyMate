import React, { useState } from 'react';
import { Clock, MapPin, User } from 'lucide-react';
import { WEEKLY_SCHEDULE } from '../data/demoData';
import { Language, Theme } from '../types';
import { TRANSLATIONS } from '../utils/translations';

interface ScheduleSectionProps {
  language: Language;
  theme: Theme;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  language,
  theme,
}) => {
  const t = TRANSLATIONS[language];
  const isDark = theme === 'dark';

  // Default selected day: Tuesday (2 - Today in demo context)
  const [selectedDay, setSelectedDay] = useState<number>(2);

  const currentDayClasses = WEEKLY_SCHEDULE.filter((c) => c.dayOfWeek === selectedDay);
  const selectedDayInfo = t.days.find((d) => d.id === selectedDay);

  return (
    <div className="space-y-4 pb-16">
      {/* Day Selector Pills */}
      <div
        id="schedule-day-selector"
        className={`p-1.5 rounded-2xl border shadow-xs flex items-center justify-between gap-1 transition-colors ${
          isDark
            ? 'bg-slate-800/90 border-slate-700/80'
            : 'bg-white border-slate-100'
        }`}
      >
        {t.days.map((day) => {
          const isSelected = selectedDay === day.id;
          const isToday = day.id === 2;
          return (
            <button
              key={day.id}
              id={`schedule-day-tab-${day.id}`}
              onClick={() => setSelectedDay(day.id)}
              className={`flex-1 py-2 px-1 rounded-xl text-xs font-bold transition-all cursor-pointer relative flex flex-col items-center justify-center ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25 scale-[1.02]'
                  : isDark
                  ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span className="text-[11px] font-black">{day.short}</span>
              {isToday && (
                <span
                  className={`text-[8px] font-bold mt-0.5 ${
                    isSelected ? 'text-blue-200' : isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {t.todayTag}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected Day Classes */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h2 className={`text-xs font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
            {selectedDayInfo?.full}
          </h2>
          <span className={`text-[10px] font-bold ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>
            {t.classesCount(currentDayClasses.length)}
          </span>
        </div>

        {currentDayClasses.length === 0 ? (
          <div
            className={`rounded-3xl p-8 text-center border shadow-2xs ${
              isDark
                ? 'bg-slate-800/80 border-slate-700/80 text-slate-400'
                : 'bg-white border-slate-100 text-slate-400'
            }`}
          >
            <p className={`text-xs font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {t.noClassesToday}
            </p>
            <p className="text-[11px] mt-1 text-slate-400">
              {t.noClassesSubtext}
            </p>
          </div>
        ) : (
          currentDayClasses.map((item, index) => (
            <div
              key={item.id}
              id={`class-card-${item.id}`}
              className={`rounded-3xl p-4 border shadow-xs transition-all ${
                isDark
                  ? 'bg-slate-800/90 border-slate-700/80 hover:border-blue-500/50'
                  : 'bg-white border-slate-100 hover:border-blue-100'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-tight">
                    {item.code}
                  </span>
                  <h3 className={`text-xs sm:text-sm font-bold leading-tight mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {item.subject[language]}
                  </h3>
                </div>
                <div
                  className={`px-2 py-0.5 rounded-lg font-bold text-[10px] shrink-0 ${
                    isDark
                      ? 'bg-blue-950/80 text-blue-300 border border-blue-800'
                      : 'bg-blue-50 text-blue-700'
                  }`}
                >
                  {t.classNumber(index + 1)}
                </div>
              </div>

              <div
                className={`grid grid-cols-1 gap-1.5 mt-3 pt-2.5 border-t text-[11px] ${
                  isDark ? 'border-slate-700/70 text-slate-300' : 'border-slate-100 text-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`flex items-center gap-1.5 font-semibold ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                    <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    {item.startTime[language]} - {item.endTime[language]}
                  </span>
                  <span className={`flex items-center gap-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    {item.room[language]} ({item.building[language]})
                  </span>
                </div>
                <div className={`flex items-center gap-1.5 text-[10px] ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>
                  <User className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>
                    {t.instructorLabel}: {item.instructor[language]}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
