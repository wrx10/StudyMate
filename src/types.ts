export type Section = 'home' | 'schedule' | 'ai' | 'settings';

export type Language = 'ar' | 'en' | 'tr';

export type Theme = 'light' | 'dark';

export interface StudentUser {
  studentId: string;
  name: string;
  major: string;
  semester: string;
  avatarUrl?: string;
}

export interface ClassSession {
  id: string;
  subject: {
    ar: string;
    en: string;
    tr: string;
  };
  code: string;
  dayOfWeek: number; // 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri
  startTime: {
    ar: string;
    en: string;
    tr: string;
  };
  endTime: {
    ar: string;
    en: string;
    tr: string;
  };
  room: {
    ar: string;
    en: string;
    tr: string;
  };
  instructor: {
    ar: string;
    en: string;
    tr: string;
  };
  building: {
    ar: string;
    en: string;
    tr: string;
  };
}

export interface Reminder {
  id: string;
  type: 'class' | 'study';
  title: {
    ar: string;
    en: string;
    tr: string;
  };
  subtitle: {
    ar: string;
    en: string;
    tr: string;
  };
  timeContext: {
    ar: string;
    en: string;
    tr: string;
  };
  urgency: 'high' | 'medium' | 'low';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}
