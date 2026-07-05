import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const student = {
  name: 'TestUser',
  id: 'TIU001',
  department: 'IT Department',
  yearJa: '1年',
  yearEn: '1st Year'
};

const translations = {
  ja: {
    appName: 'TIU Student Portal',
    university: 'Toshofu International University',
    language: '日本語',
    loginTitle: '学生ポータルにログイン',
    loginLead: '授業、成績、履修登録、学生証を一つの画面で確認できます。',
    studentId: '学籍番号',
    password: 'パスワード',
    signIn: 'ログイン',
    loginError: '学籍番号またはパスワードが正しくありません。',
    logout: 'ログアウト',
    dashboard: 'Dashboard',
    news: 'News',
    schedule: 'Schedule',
    grades: 'Grades',
    registration: 'Course Registration',
    studentCard: 'Student ID',
    settings: 'Settings',
    welcome: 'ようこそ、TestUserさん',
    today: '本日の概要',
    enrolled: '履修中',
    credits: '取得予定単位',
    gpa: 'GPA',
    notices: '重要なお知らせ',
    nextClass: '次の授業',
    profile: '学生情報',
    department: '所属',
    year: '学年',
    latestNews: '大学からのお知らせ',
    allNews: 'すべて',
    scheduleTitle: '週間スケジュール',
    gradesTitle: '成績一覧',
    registrationTitle: '履修登録',
    studentIdTitle: 'デジタル学生証',
    settingsTitle: '設定',
    themeNote: '表示設定',
    languageLabel: '言語',
    notification: '通知',
    emailNotice: '大学メールへの通知',
    portalNotice: 'ポータル内通知',
    statusOpen: '受付中',
    statusRequired: '必修',
    statusElective: '選択',
    registered: '登録済み',
    register: '登録',
    classroom: '教室',
    instructor: '担当',
    creditsLabel: '単位',
    semester: '2026 Spring Semester',
    searchPlaceholder: 'ポータル内を検索',
    unreadNews: '未読のお知らせ',
    weeklyPlan: '今週の予定',
    todayClass: '今日の授業',
    campusStatus: 'Campus Ready',
    studentSince: '2026年度 入学',
    notifications: '通知'
  },
  en: {
    appName: 'TIU Student Portal',
    university: 'Toshofu International University',
    language: 'English',
    loginTitle: 'Sign in to Student Portal',
    loginLead: 'Access classes, grades, course registration, and student ID in one place.',
    studentId: 'Student ID',
    password: 'Password',
    signIn: 'Sign in',
    loginError: 'Student ID or password is incorrect.',
    logout: 'Sign out',
    dashboard: 'Dashboard',
    news: 'News',
    schedule: 'Schedule',
    grades: 'Grades',
    registration: 'Course Registration',
    studentCard: 'Student ID',
    settings: 'Settings',
    welcome: 'Welcome, TestUser',
    today: "Today's Overview",
    enrolled: 'Enrolled Courses',
    credits: 'Planned Credits',
    gpa: 'GPA',
    notices: 'Priority Notices',
    nextClass: 'Next Class',
    profile: 'Student Profile',
    department: 'Department',
    year: 'Year',
    latestNews: 'University News',
    allNews: 'All',
    scheduleTitle: 'Weekly Schedule',
    gradesTitle: 'Grade Report',
    registrationTitle: 'Course Registration',
    studentIdTitle: 'Digital Student ID',
    settingsTitle: 'Settings',
    themeNote: 'Display Preferences',
    languageLabel: 'Language',
    notification: 'Notifications',
    emailNotice: 'University email alerts',
    portalNotice: 'Portal notifications',
    statusOpen: 'Open',
    statusRequired: 'Required',
    statusElective: 'Elective',
    registered: 'Registered',
    register: 'Register',
    classroom: 'Room',
    instructor: 'Instructor',
    creditsLabel: 'Credits',
    semester: '2026 Spring Semester',
    searchPlaceholder: 'Search portal',
    unreadNews: 'Unread News',
    weeklyPlan: 'This Week',
    todayClass: "Today's Classes",
    campusStatus: 'Campus Ready',
    studentSince: 'Admitted 2026',
    notifications: 'Notifications'
  }
};

const navItems = [
  ['dashboard', 'dashboard'],
  ['news', 'news'],
  ['schedule', 'schedule'],
  ['grades', 'grades'],
  ['registration', 'registration'],
  ['studentCard', 'studentCard'],
  ['settings', 'settings']
];

const newsItems = [
  {
    date: '2026.04.08',
    tagJa: '教務',
    tagEn: 'Academic',
    titleJa: '2026年度 春学期の履修登録期間について',
    titleEn: 'Spring 2026 course registration period announced',
    bodyJa: '履修登録は4月8日から4月18日まで学生ポータルで受け付けます。',
    bodyEn: 'Course registration is available in the portal from April 8 to April 18.'
  },
  {
    date: '2026.04.11',
    tagJa: '学生生活',
    tagEn: 'Campus',
    titleJa: '学生証更新手続きのご案内',
    titleEn: 'Student ID renewal guidance',
    bodyJa: 'デジタル学生証の情報更新をSettingsから確認してください。',
    bodyEn: 'Please confirm your digital ID details from Settings.'
  },
  {
    date: '2026.04.15',
    tagJa: '図書館',
    tagEn: 'Library',
    titleJa: '図書館ラーニングコモンズの利用時間延長',
    titleEn: 'Library learning commons hours extended',
    bodyJa: '試験期間中は平日21:00まで利用できます。',
    bodyEn: 'During exam weeks, weekday access is extended until 21:00.'
  }
];

const scheduleItems = [
  { dayJa: '月', dayEn: 'Mon', time: '09:00', course: 'Academic English I', room: 'A-204', instructor: 'M. Carter' },
  { dayJa: '火', dayEn: 'Tue', time: '10:40', course: 'Introduction to Programming', room: 'B-312', instructor: 'S. Tanaka' },
  { dayJa: '水', dayEn: 'Wed', time: '13:20', course: 'Data Literacy', room: 'Lab 2', instructor: 'Y. Ito' },
  { dayJa: '木', dayEn: 'Thu', time: '15:00', course: 'Global Studies', room: 'C-101', instructor: 'A. Smith' },
  { dayJa: '金', dayEn: 'Fri', time: '10:40', course: 'Information Systems', room: 'B-210', instructor: 'K. Sato' }
];

const gradeItems = [
  { course: 'Academic English I', credits: 2, grade: 'A', score: 92 },
  { course: 'Introduction to Programming', credits: 2, grade: 'A+', score: 96 },
  { course: 'Data Literacy', credits: 2, grade: 'A', score: 90 },
  { course: 'Global Studies', credits: 2, grade: 'B+', score: 86 }
];

const courseItems = [
  { course: 'Introduction to Programming', credits: 2, type: 'statusRequired', registered: true },
  { course: 'Academic English I', credits: 2, type: 'statusRequired', registered: true },
  { course: 'Digital Design Basics', credits: 2, type: 'statusElective', registered: false },
  { course: 'Japanese Society and Culture', credits: 2, type: 'statusElective', registered: false }
];

function App() {
  const [language, setLanguage] = useState('ja');
  const [isAuthed, setIsAuthed] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const t = translations[language];

  if (!isAuthed) {
    return <Login language={language} setLanguage={setLanguage} onLogin={() => setIsAuthed(true)} t={t} />;
  }

  return (
    <Shell
      activePage={activePage}
      setActivePage={setActivePage}
      language={language}
      setLanguage={setLanguage}
      onLogout={() => {
        setIsAuthed(false);
        setActivePage('dashboard');
      }}
      t={t}
    />
  );
}

function Login({ language, setLanguage, onLogin, t }) {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (studentId === 'TIU001' && password === '0001') {
      setError('');
      onLogin();
      return;
    }
    setError(t.loginError);
  }

  return (
    <main className="login-page">
      <section className="login-hero" aria-label={t.university}>
        <div className="brand-mark">TIU</div>
        <div>
          <p>{t.university}</p>
          <h1>{t.appName}</h1>
        </div>
      </section>
      <section className="login-card">
        <div className="language-switch" aria-label={t.languageLabel}>
          <button className={language === 'ja' ? 'active' : ''} onClick={() => setLanguage('ja')} type="button">
            日本語
          </button>
          <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')} type="button">
            English
          </button>
        </div>
        <h2>{t.loginTitle}</h2>
        <p>{t.loginLead}</p>
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            {t.studentId}
            <input
              value={studentId}
              onChange={(event) => setStudentId(event.target.value)}
              placeholder="TIU001"
              autoComplete="username"
            />
          </label>
          <label>
            {t.password}
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="0001"
              type="password"
              autoComplete="current-password"
            />
          </label>
          {error && <div className="error-message">{error}</div>}
          <button className="primary-button" type="submit">{t.signIn}</button>
        </form>
      </section>
    </main>
  );
}

function Shell({ activePage, setActivePage, language, setLanguage, onLogout, t }) {
  const pageTitle = t[activePage];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-mark small">TIU</div>
          <div>
            <strong>{t.appName}</strong>
            <span>{t.semester}</span>
          </div>
        </div>
        <nav className="nav-list" aria-label="Primary navigation">
          {navItems.map(([key, icon]) => (
            <button
              key={key}
              className={activePage === key ? 'active' : ''}
              onClick={() => setActivePage(key)}
              type="button"
            >
              <span><Icon name={icon} /></span>
              {t[key]}
            </button>
          ))}
        </nav>
      </aside>
      <div className="workspace">
        <header className="topbar">
          <div className="topbar-title">
            <div className="brand-mark header-logo">TIU</div>
            <div>
            <p>{t.university}</p>
            <h1>{pageTitle}</h1>
            </div>
          </div>
          <label className="search-box">
            <Icon name="search" />
            <input placeholder={t.searchPlaceholder} aria-label={t.searchPlaceholder} />
          </label>
          <div className="header-utilities">
            <button className="icon-button" type="button" aria-label={t.notifications}>
              <Icon name="bell" />
              <span className="notification-dot" aria-hidden="true" />
            </button>
            <div className="profile-chip" aria-label={student.name}>
              <span>{student.name.slice(0, 1)}</span>
            </div>
          </div>
          <div className="topbar-actions">
            <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label={t.languageLabel}>
              <option value="ja">日本語</option>
              <option value="en">English</option>
            </select>
            <button className="ghost-button" onClick={onLogout} type="button">{t.logout}</button>
          </div>
        </header>
        <main className="content">
          <Page page={activePage} t={t} language={language} />
        </main>
      </div>
      <nav className="bottom-nav" aria-label="Mobile navigation">
        {navItems.map(([key, icon]) => (
          <button
            key={key}
            className={activePage === key ? 'active' : ''}
            onClick={() => setActivePage(key)}
            type="button"
            aria-label={t[key]}
          >
            <span><Icon name={icon} /></span>
          </button>
        ))}
      </nav>
    </div>
  );
}

function Page({ page, t, language }) {
  const views = {
    dashboard: <Dashboard t={t} language={language} />,
    news: <News t={t} language={language} />,
    schedule: <Schedule t={t} language={language} />,
    grades: <Grades t={t} />,
    registration: <Registration t={t} />,
    studentCard: <StudentCard t={t} language={language} />,
    settings: <Settings t={t} />
  };
  return views[page];
}

function Dashboard({ t, language }) {
  const nextClass = scheduleItems[1];
  return (
    <div className="dashboard-layout">
      <section className="hero-panel welcome-card">
        <div>
          <span className="eyebrow">{t.campusStatus}</span>
          <h2>{t.welcome}</h2>
          <p>{t.studentSince}</p>
        </div>
        <div className="stats-row">
          <Stat label={t.enrolled} value="5" />
          <Stat label={t.credits} value="10" />
          <Stat label={t.gpa} value="3.82" />
        </div>
      </section>
      <section className="card dashboard-card today-card">
        <div className="card-heading">
          <Icon name="schedule" />
          <h2>{t.todayClass}</h2>
        </div>
        <div className="class-focus">
          <span>{language === 'ja' ? nextClass.dayJa : nextClass.dayEn} {nextClass.time}</span>
          <strong>{nextClass.course}</strong>
          <small>{t.classroom}: {nextClass.room} / {t.instructor}: {nextClass.instructor}</small>
        </div>
      </section>
      <section className="card dashboard-card unread-card">
        <div className="card-heading">
          <Icon name="news" />
          <h2>{t.unreadNews}</h2>
        </div>
        <NewsList t={t} language={language} compact />
      </section>
      <section className="card dashboard-card week-card">
        <div className="card-heading">
          <Icon name="calendar" />
          <h2>{t.weeklyPlan}</h2>
        </div>
        <div className="mini-schedule">
          {scheduleItems.slice(0, 4).map((item) => (
            <div key={`${item.dayEn}-${item.time}`}>
              <span>{language === 'ja' ? item.dayJa : item.dayEn}</span>
              <strong>{item.course}</strong>
              <small>{item.time}</small>
            </div>
          ))}
        </div>
      </section>
      <section className="card dashboard-card profile-card">
        <div className="card-heading">
          <Icon name="studentCard" />
          <h2>{t.profile}</h2>
        </div>
        <InfoList t={t} language={language} />
      </section>
    </div>
  );
}

function News({ t, language }) {
  return (
    <section className="card">
      <div className="section-heading">
        <h2>{t.latestNews}</h2>
        <span>{t.allNews}</span>
      </div>
      <NewsList t={t} language={language} />
    </section>
  );
}

function Schedule({ t, language }) {
  return (
    <section className="card">
      <h2>{t.scheduleTitle}</h2>
      <div className="schedule-list">
        {scheduleItems.map((item) => (
          <article className="schedule-item" key={`${item.dayEn}-${item.course}`}>
            <div className="date-pill">
              <strong>{language === 'ja' ? item.dayJa : item.dayEn}</strong>
              <span>{item.time}</span>
            </div>
            <div>
              <h3>{item.course}</h3>
              <p>{t.classroom}: {item.room} / {t.instructor}: {item.instructor}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Grades({ t }) {
  return (
    <section className="card">
      <h2>{t.gradesTitle}</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Course</th>
              <th>{t.creditsLabel}</th>
              <th>Score</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {gradeItems.map((item) => (
              <tr key={item.course}>
                <td>{item.course}</td>
                <td>{item.credits}</td>
                <td>{item.score}</td>
                <td><span className="grade-badge">{item.grade}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Registration({ t }) {
  return (
    <section className="card">
      <div className="section-heading">
        <h2>{t.registrationTitle}</h2>
        <span>{t.statusOpen}</span>
      </div>
      <div className="course-grid">
        {courseItems.map((item) => (
          <article className="course-card" key={item.course}>
            <span className="tag">{t[item.type]}</span>
            <h3>{item.course}</h3>
            <p>{item.credits} {t.creditsLabel}</p>
            <button className={item.registered ? 'registered-button' : 'primary-button'} type="button">
              {item.registered ? t.registered : t.register}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function StudentCard({ t, language }) {
  return (
    <div className="student-id-layout">
      <section className="student-id-card">
        <div className="id-header">
          <div className="brand-mark small">TIU</div>
          <span>{t.studentIdTitle}</span>
        </div>
        <div className="portrait" aria-hidden="true">TU</div>
        <h2>{student.name}</h2>
        <p>{student.id}</p>
        <div className="id-meta">
          <span>{student.department}</span>
          <span>{language === 'ja' ? student.yearJa : student.yearEn}</span>
        </div>
      </section>
      <section className="card">
        <h2>{t.profile}</h2>
        <InfoList t={t} language={language} />
      </section>
    </div>
  );
}

function Settings({ t }) {
  return (
    <div className="settings-grid">
      <section className="card">
        <h2>{t.themeNote}</h2>
        <div className="setting-row">
          <span>{t.languageLabel}</span>
          <strong>{t.language}</strong>
        </div>
      </section>
      <section className="card">
        <h2>{t.notification}</h2>
        <label className="toggle-row">
          <span>{t.emailNotice}</span>
          <input type="checkbox" defaultChecked />
        </label>
        <label className="toggle-row">
          <span>{t.portalNotice}</span>
          <input type="checkbox" defaultChecked />
        </label>
      </section>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Icon({ name }) {
  const icons = {
    dashboard: <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h3A1.5 1.5 0 0 1 10 5.5v3A1.5 1.5 0 0 1 8.5 10h-3A1.5 1.5 0 0 1 4 8.5v-3Zm10 0A1.5 1.5 0 0 1 15.5 4h3A1.5 1.5 0 0 1 20 5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 14 8.5v-3ZM4 15.5A1.5 1.5 0 0 1 5.5 14h3a1.5 1.5 0 0 1 1.5 1.5v3A1.5 1.5 0 0 1 8.5 20h-3A1.5 1.5 0 0 1 4 18.5v-3Zm10 0a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3Z" />,
    news: <path d="M5 5.5A1.5 1.5 0 0 1 6.5 4h11A1.5 1.5 0 0 1 19 5.5v13A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5v-13Zm3 3h8M8 12h8M8 15.5h5" />,
    schedule: <path d="M7 3.5V6m10-2.5V6M5.5 8.5h13M6.5 5h11A1.5 1.5 0 0 1 19 6.5v11A1.5 1.5 0 0 1 17.5 19h-11A1.5 1.5 0 0 1 5 17.5v-11A1.5 1.5 0 0 1 6.5 5Zm3 7h2.5v2.5H9.5V12Z" />,
    grades: <path d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v12A1.5 1.5 0 0 1 18 19.5H6A1.5 1.5 0 0 1 4.5 18V6A1.5 1.5 0 0 1 6 4.5Zm2.5 10 2.1-2.8 2.2 1.8 3-4" />,
    registration: <path d="M6 5h8.5L19 9.5V19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 0v5h5M8 14h8M8 17h5" />,
    studentCard: <path d="M5.5 6h13A1.5 1.5 0 0 1 20 7.5v9A1.5 1.5 0 0 1 18.5 18h-13A1.5 1.5 0 0 1 4 16.5v-9A1.5 1.5 0 0 1 5.5 6Zm2.5 8.5c.7-1 1.6-1.5 2.8-1.5s2.1.5 2.8 1.5M10.8 11.5a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Zm5.7-2h1.2m-1.2 3h1.2" />,
    settings: <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Zm0-5 1.2 2.2 2.5.7 2.1-1.2 1.8 3-1.8 1.8.1 2.6 1.7 1.9-1.8 3-2.4-.8-2.3 1.2L12 20.5l-1.2-2.6-2.3-1.2-2.4.8-1.8-3 1.7-1.9.1-2.6-1.8-1.8 1.8-3 2.1 1.2 2.5-.7L12 3.5Z" />,
    search: <path d="m19 19-4.2-4.2m1.7-4.3a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />,
    bell: <path d="M18 16H6l1.4-1.8V10a4.6 4.6 0 0 1 9.2 0v4.2L18 16Zm-4.2 2a2 2 0 0 1-3.6 0" />,
    calendar: <path d="M7 4v2.5M17 4v2.5M5.5 9h13M6.5 6h11A1.5 1.5 0 0 1 19 7.5v10A1.5 1.5 0 0 1 17.5 19h-11A1.5 1.5 0 0 1 5 17.5v-10A1.5 1.5 0 0 1 6.5 6Z" />
  };

  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  );
}

function InfoList({ t, language }) {
  const rows = useMemo(() => [
    [t.studentId, student.id],
    [t.department, student.department],
    [t.year, language === 'ja' ? student.yearJa : student.yearEn]
  ], [t, language]);

  return (
    <dl className="info-list">
      {rows.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function NewsList({ language, compact = false }) {
  const items = compact ? newsItems.slice(0, 2) : newsItems;
  return (
    <div className="news-list">
      {items.map((item) => (
        <article className="news-item" key={item.titleEn}>
          <div>
            <span className="tag">{language === 'ja' ? item.tagJa : item.tagEn}</span>
            <time>{item.date}</time>
          </div>
          <h3>{language === 'ja' ? item.titleJa : item.titleEn}</h3>
          <p>{language === 'ja' ? item.bodyJa : item.bodyEn}</p>
        </article>
      ))}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
