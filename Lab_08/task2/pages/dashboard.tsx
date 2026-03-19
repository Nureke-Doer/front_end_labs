import { GetServerSideProps } from "next";
import { User, Notification, getCurrentUser, getUserNotifications, getUserAnalytics } from "@/lib/api";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: {
    pageViews: number;
    sessions: number;
    bounceRate: number;
  };
  currentTime: string;
}

export default function Dashboard({ user, notifications, analytics, currentTime }: DashboardProps) {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ borderBottom: '2px solid #eee', paddingBottom: '1rem' }}>
        <h1>Welcome, {user.name}</h1>
        <p style={{ color: 'gray' }}>Role: {user.role}</p>
      </header>

      <section style={{ margin: '2rem 0' }}>
        <h2>Analytics</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', flex: 1 }}>
            <strong>Page Views:</strong> {analytics.pageViews.toLocaleString()}
          </div>
          <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', flex: 1 }}>
            <strong>Sessions:</strong> {analytics.sessions.toLocaleString()}
          </div>
          <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', flex: 1 }}>
            <strong>Bounce Rate:</strong> {analytics.bounceRate.toFixed(1)}%
          </div>
        </div>
      </section>

      <section>
        <h2>Notifications ({unreadCount} unread)</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {notifications.map(notif => (
            <li 
              key={notif.id} 
              style={{ 
                padding: '1rem', 
                marginBottom: '0.5rem',
                backgroundColor: notif.read ? '#f9f9f9' : '#e6f2ff',
                borderLeft: `4px solid ${notif.read ? 'gray' : 'blue'}`
              }}
            >
              <span style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
                [{notif.type.toUpperCase()}]
              </span>
              {notif.message}
            </li>
          ))}
        </ul>
      </section>

      <footer style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #eee', color: 'gray', fontSize: '0.9rem' }}>
        <p>Last updated: {currentTime}</p>
      </footer>
    </div>
  );
}

// Эта функция запускается НА СЕРВЕРЕ при КАЖДОМ запросе страницы
export const getServerSideProps: GetServerSideProps = async () => {
  // Получаем данные
  const user = getCurrentUser();
  const notifications = await getUserNotifications(user.id);
  const analytics = await getUserAnalytics(user.id);

  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toISOString(), // Точное время генерации страницы
    },
  };
};