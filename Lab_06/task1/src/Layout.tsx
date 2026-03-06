import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ 
        display: 'flex', 
        gap: '20px', 
        padding: '15px', 
        background: '#2c3e50', 
        color: 'white' 
      }}>
        {/* ВАЖНО: Используем Link, а не <a>, чтобы страница не перезагружалась [cite: 591-592] */}
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/courses" style={{ color: 'white', textDecoration: 'none' }}>Courses</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      </nav>

      <main style={{ padding: '20px', minHeight: '60vh' }}>
        {/* Outlet — это место, где будет появляться содержимое каждой страницы [cite: 508, 860] */}
        <Outlet />
      </main>

      <footer style={{ padding: '10px', textAlign: 'center', borderTop: '1px solid #ccc' }}>
        <p>Student Portal 2026 — Built with React Router</p>
      </footer>
    </div>
  );
}