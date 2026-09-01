import { StudentUser, ClassSession, Reminder } from '../types';

export const DEMO_STUDENT: StudentUser = {
  studentId: 'STU-2026-8941',
  name: 'أحمد المنصور',
  major: 'القسم العلمي',
  semester: 'خريف 2026',
};

export const DEMO_CREDENTIALS = {
  studentId: 'STU-2026-8941',
  password: 'studymate2026',
};

// Base date reference: September 1, 2026 (Tuesday)
export const BASE_DATE = new Date(2026, 8, 1, 5, 48, 0);

export const WEEKLY_SCHEDULE: ClassSession[] = [
  // Monday (Day 1)
  {
    id: 'cls-mon-1',
    subject: {
      ar: 'الرياضيات',
      en: 'Mathematics',
      tr: 'Matematik',
    },
    code: 'MATH 101',
    dayOfWeek: 1,
    startTime: {
      ar: '08:30 ص',
      en: '08:30 AM',
      tr: '08:30',
    },
    endTime: {
      ar: '09:45 ص',
      en: '09:45 AM',
      tr: '09:45',
    },
    room: {
      ar: 'قاعة 101',
      en: 'Room 101',
      tr: 'Derslik 101',
    },
    instructor: {
      ar: 'أ.د. أحمد حسان',
      en: 'Prof. Ahmed Hassan',
      tr: 'Prof. Dr. Ahmed Hassan',
    },
    building: {
      ar: 'مبنى العلوم',
      en: 'Science Building',
      tr: 'Fen Binası',
    },
  },
  {
    id: 'cls-mon-2',
    subject: {
      ar: 'اللغة العربية',
      en: 'Arabic',
      tr: 'Arapça',
    },
    code: 'ARAB 101',
    dayOfWeek: 1,
    startTime: {
      ar: '10:00 ص',
      en: '10:00 AM',
      tr: '10:00',
    },
    endTime: {
      ar: '11:15 ص',
      en: '11:15 AM',
      tr: '11:15',
    },
    room: {
      ar: 'قاعة 204',
      en: 'Room 204',
      tr: 'Derslik 204',
    },
    instructor: {
      ar: 'د. طارق محمود',
      en: 'Dr. Tariq Mahmoud',
      tr: 'Dr. Tariq Mahmoud',
    },
    building: {
      ar: 'مبنى اللغات',
      en: 'Languages Building',
      tr: 'Diller Binası',
    },
  },
  {
    id: 'cls-mon-3',
    subject: {
      ar: 'الفيزياء',
      en: 'Physics',
      tr: 'Fizik',
    },
    code: 'PHYS 101',
    dayOfWeek: 1,
    startTime: {
      ar: '11:45 ص',
      en: '11:45 AM',
      tr: '11:45',
    },
    endTime: {
      ar: '01:00 م',
      en: '01:00 PM',
      tr: '13:00',
    },
    room: {
      ar: 'معمل الفيزياء',
      en: 'Physics Lab',
      tr: 'Fizik Laboratuvarı',
    },
    instructor: {
      ar: 'أ.د. سارة خليل',
      en: 'Prof. Sarah Khalil',
      tr: 'Prof. Dr. Sarah Khalil',
    },
    building: {
      ar: 'مجمع العلوم',
      en: 'Science Complex',
      tr: 'Fen Kompleksi',
    },
  },

  // Tuesday (Day 2 - Today)
  {
    id: 'cls-tue-1',
    subject: {
      ar: 'الكيمياء',
      en: 'Chemistry',
      tr: 'Kimya',
    },
    code: 'CHEM 101',
    dayOfWeek: 2,
    startTime: {
      ar: '09:00 ص',
      en: '09:00 AM',
      tr: '09:00',
    },
    endTime: {
      ar: '10:15 ص',
      en: '10:15 AM',
      tr: '10:15',
    },
    room: {
      ar: 'معمل الكيمياء',
      en: 'Chemistry Lab',
      tr: 'Kimya Laboratuvarı',
    },
    instructor: {
      ar: 'د. منى عبد العزيز',
      en: 'Dr. Mona Abdelaziz',
      tr: 'Dr. Mona Abdelaziz',
    },
    building: {
      ar: 'مجمع العلوم',
      en: 'Science Complex',
      tr: 'Fen Kompleksi',
    },
  },
  {
    id: 'cls-tue-2',
    subject: {
      ar: 'اللغة الإنجليزية',
      en: 'English',
      tr: 'İngilizce',
    },
    code: 'ENG 101',
    dayOfWeek: 2,
    startTime: {
      ar: '10:45 ص',
      en: '10:45 AM',
      tr: '10:45',
    },
    endTime: {
      ar: '12:00 م',
      en: '12:00 PM',
      tr: '12:00',
    },
    room: {
      ar: 'قاعة 108',
      en: 'Room 108',
      tr: 'Derslik 108',
    },
    instructor: {
      ar: 'أ. ديفيد سميث',
      en: 'Mr. David Smith',
      tr: 'Öğr. Gör. David Smith',
    },
    building: {
      ar: 'مبنى اللغات',
      en: 'Languages Building',
      tr: 'Diller Binası',
    },
  },
  {
    id: 'cls-tue-3',
    subject: {
      ar: 'الأحياء',
      en: 'Biology',
      tr: 'Biyoloji',
    },
    code: 'BIO 101',
    dayOfWeek: 2,
    startTime: {
      ar: '01:00 م',
      en: '01:00 PM',
      tr: '13:00',
    },
    endTime: {
      ar: '02:30 م',
      en: '02:30 PM',
      tr: '14:30',
    },
    room: {
      ar: 'معمل الأحياء',
      en: 'Biology Lab',
      tr: 'Biyoloji Laboratuvarı',
    },
    instructor: {
      ar: 'د. هالة النجار',
      en: 'Dr. Hala Al-Najjar',
      tr: 'Dr. Hala Al-Najjar',
    },
    building: {
      ar: 'مجمع العلوم',
      en: 'Science Complex',
      tr: 'Fen Kompleksi',
    },
  },

  // Wednesday (Day 3)
  {
    id: 'cls-wed-1',
    subject: {
      ar: 'علوم الحاسب',
      en: 'Computer Science',
      tr: 'Bilgisayar Bilimi',
    },
    code: 'CS 101',
    dayOfWeek: 3,
    startTime: {
      ar: '09:00 ص',
      en: '09:00 AM',
      tr: '09:00',
    },
    endTime: {
      ar: '10:15 ص',
      en: '10:15 AM',
      tr: '10:15',
    },
    room: {
      ar: 'معمل الحاسب 1',
      en: 'Computer Lab 1',
      tr: 'Bilgisayar Laboratuvarı 1',
    },
    instructor: {
      ar: 'د. خالد العمر',
      en: 'Dr. Khaled Al-Omar',
      tr: 'Dr. Khaled Al-Omar',
    },
    building: {
      ar: 'مبنى التقنية',
      en: 'Tech Center',
      tr: 'Teknoloji Merkezi',
    },
  },
  {
    id: 'cls-wed-2',
    subject: {
      ar: 'الرياضيات',
      en: 'Mathematics',
      tr: 'Matematik',
    },
    code: 'MATH 101',
    dayOfWeek: 3,
    startTime: {
      ar: '10:45 ص',
      en: '10:45 AM',
      tr: '10:45',
    },
    endTime: {
      ar: '12:00 م',
      en: '12:00 PM',
      tr: '12:00',
    },
    room: {
      ar: 'قاعة 101',
      en: 'Room 101',
      tr: 'Derslik 101',
    },
    instructor: {
      ar: 'أ.د. أحمد حسان',
      en: 'Prof. Ahmed Hassan',
      tr: 'Prof. Dr. Ahmed Hassan',
    },
    building: {
      ar: 'مبنى العلوم',
      en: 'Science Building',
      tr: 'Fen Binası',
    },
  },
  {
    id: 'cls-wed-3',
    subject: {
      ar: 'الفيزياء',
      en: 'Physics',
      tr: 'Fizik',
    },
    code: 'PHYS 101',
    dayOfWeek: 3,
    startTime: {
      ar: '01:00 م',
      en: '01:00 PM',
      tr: '13:00',
    },
    endTime: {
      ar: '02:30 م',
      en: '02:30 PM',
      tr: '14:30',
    },
    room: {
      ar: 'قاعة 105',
      en: 'Hall 105',
      tr: 'Derslik 105',
    },
    instructor: {
      ar: 'أ.د. سارة خليل',
      en: 'Prof. Sarah Khalil',
      tr: 'Prof. Dr. Sarah Khalil',
    },
    building: {
      ar: 'مجمع العلوم',
      en: 'Science Complex',
      tr: 'Fen Kompleksi',
    },
  },

  // Thursday (Day 4)
  {
    id: 'cls-thu-1',
    subject: {
      ar: 'الأحياء',
      en: 'Biology',
      tr: 'Biyoloji',
    },
    code: 'BIO 101',
    dayOfWeek: 4,
    startTime: {
      ar: '08:30 ص',
      en: '08:30 AM',
      tr: '08:30',
    },
    endTime: {
      ar: '09:45 ص',
      en: '09:45 AM',
      tr: '09:45',
    },
    room: {
      ar: 'معمل الأحياء',
      en: 'Biology Lab',
      tr: 'Biyoloji Laboratuvarı',
    },
    instructor: {
      ar: 'د. هالة النجار',
      en: 'Dr. Hala Al-Najjar',
      tr: 'Dr. Hala Al-Najjar',
    },
    building: {
      ar: 'مجمع العلوم',
      en: 'Science Complex',
      tr: 'Fen Kompleksi',
    },
  },
  {
    id: 'cls-thu-2',
    subject: {
      ar: 'اللغة العربية',
      en: 'Arabic',
      tr: 'Arapça',
    },
    code: 'ARAB 101',
    dayOfWeek: 4,
    startTime: {
      ar: '10:15 ص',
      en: '10:15 AM',
      tr: '10:15',
    },
    endTime: {
      ar: '11:30 ص',
      en: '11:30 AM',
      tr: '11:30',
    },
    room: {
      ar: 'قاعة 204',
      en: 'Room 204',
      tr: 'Derslik 204',
    },
    instructor: {
      ar: 'د. طارق محمود',
      en: 'Dr. Tariq Mahmoud',
      tr: 'Dr. Tariq Mahmoud',
    },
    building: {
      ar: 'مبنى اللغات',
      en: 'Languages Building',
      tr: 'Diller Binası',
    },
  },
  {
    id: 'cls-thu-3',
    subject: {
      ar: 'الكيمياء',
      en: 'Chemistry',
      tr: 'Kimya',
    },
    code: 'CHEM 101',
    dayOfWeek: 4,
    startTime: {
      ar: '12:00 م',
      en: '12:00 PM',
      tr: '12:00',
    },
    endTime: {
      ar: '01:15 م',
      en: '01:15 PM',
      tr: '13:15',
    },
    room: {
      ar: 'قاعة المحاضرات ج',
      en: 'Lecture Hall C',
      tr: 'Amfi C',
    },
    instructor: {
      ar: 'د. منى عبد العزيز',
      en: 'Dr. Mona Abdelaziz',
      tr: 'Dr. Mona Abdelaziz',
    },
    building: {
      ar: 'مجمع العلوم',
      en: 'Science Complex',
      tr: 'Fen Kompleksi',
    },
  },

  // Friday (Day 5)
  {
    id: 'cls-fri-1',
    subject: {
      ar: 'علوم الحاسب',
      en: 'Computer Science',
      tr: 'Bilgisayar Bilimi',
    },
    code: 'CS 101',
    dayOfWeek: 5,
    startTime: {
      ar: '09:00 ص',
      en: '09:00 AM',
      tr: '09:00',
    },
    endTime: {
      ar: '10:30 ص',
      en: '10:30 AM',
      tr: '10:30',
    },
    room: {
      ar: 'معمل الحاسب 2',
      en: 'Computer Lab 2',
      tr: 'Bilgisayar Laboratuvarı 2',
    },
    instructor: {
      ar: 'د. خالد العمر',
      en: 'Dr. Khaled Al-Omar',
      tr: 'Dr. Khaled Al-Omar',
    },
    building: {
      ar: 'مبنى التقنية',
      en: 'Tech Center',
      tr: 'Teknoloji Merkezi',
    },
  },
  {
    id: 'cls-fri-2',
    subject: {
      ar: 'اللغة الإنجليزية',
      en: 'English',
      tr: 'İngilizce',
    },
    code: 'ENG 101',
    dayOfWeek: 5,
    startTime: {
      ar: '11:00 ص',
      en: '11:00 AM',
      tr: '11:00',
    },
    endTime: {
      ar: '12:30 م',
      en: '12:30 PM',
      tr: '12:30',
    },
    room: {
      ar: 'قاعة 108',
      en: 'Room 108',
      tr: 'Derslik 108',
    },
    instructor: {
      ar: 'أ. ديفيد سميث',
      en: 'Mr. David Smith',
      tr: 'Öğr. Gör. David Smith',
    },
    building: {
      ar: 'مبنى اللغات',
      en: 'Languages Building',
      tr: 'Diller Binası',
    },
  },
];

export function getReminders(): Reminder[] {
  return [
    {
      id: 'rem-class-today-1',
      type: 'class',
      title: {
        ar: 'حصة قادمة: الكيمياء',
        en: 'Upcoming Class: Chemistry',
        tr: 'Sıradaki Ders: Kimya',
      },
      subtitle: {
        ar: 'CHEM 101 في تمام 09:00 ص بمعمل الكيمياء (مجمع العلوم)',
        en: 'CHEM 101 at 09:00 AM in Chemistry Lab (Science Complex)',
        tr: 'CHEM 101 saat 09:00, Kimya Laboratuvarı (Fen Kompleksi)',
      },
      timeContext: {
        ar: 'اليوم في 09:00 ص',
        en: 'Today at 09:00 AM',
        tr: 'Bugün 09:00',
      },
      urgency: 'high',
    },
    {
      id: 'rem-class-today-2',
      type: 'class',
      title: {
        ar: 'حصة قادمة: اللغة الإنجليزية',
        en: 'Upcoming Class: English',
        tr: 'Sıradaki Ders: İngilizce',
      },
      subtitle: {
        ar: 'ENG 101 في تمام 10:45 ص بمبنى اللغات - قاعة 108',
        en: 'ENG 101 at 10:45 AM in Languages Building - Room 108',
        tr: 'ENG 101 saat 10:45, Diller Binası - Derslik 108',
      },
      timeContext: {
        ar: 'اليوم في 10:45 ص',
        en: 'Today at 10:45 AM',
        tr: 'Bugün 10:45',
      },
      urgency: 'medium',
    },
    {
      id: 'rem-study-math',
      type: 'study',
      title: {
        ar: 'مراجعة مقررة: الرياضيات',
        en: 'Study Session: Mathematics',
        tr: 'Çalışma Oturumu: Matematik',
      },
      subtitle: {
        ar: 'حل مسائل التفاضل والتكامل والتمارين التطبيقية',
        en: 'Solve calculus and algebraic problem sets and practice exercises',
        tr: 'Kalkülüs ve cebir problem setlerini ve pratik alıştırmaları çöz',
      },
      timeContext: {
        ar: 'اليوم 05:00 م',
        en: 'Today 05:00 PM',
        tr: 'Bugün 17:00',
      },
      urgency: 'low',
    },
  ];
}
