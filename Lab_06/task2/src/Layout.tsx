import { Link, Outlet } from "react-router-dom";

// ВАЖНО: Мы добавили слово "default", чтобы main.tsx мог легко найти этот файл
export default function Layout() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#333', color: 'white' }}>
        <Link to="/" style={{ color: 'white' }}>Home</Link>
        <Link to="/courses" style={{ color: 'white' }}>Courses</Link>
        <Link to="/about" style={{ color: 'white' }}>About</Link>
      </nav>
      <main style={{ padding: '20px' }}>
        <Outlet /> {/* Здесь React Router будет показывать страницы [cite: 508, 860] */}
      </main>
      <footer style={{ marginTop: '20px', padding: '10px', borderTop: '1px solid #ccc' }}>
        Student Portal 2026
      </footer>
    </div>
  );
}