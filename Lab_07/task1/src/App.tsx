import { lazy, Suspense } from "react"; 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";

// Используем lazy для разделения кода (Code Splitting) [cite: 980, 1019-1023]
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

const Home = () => <div style={{ padding: '20px' }}><h1>Home Page (Immediate Load)</h1></div>;

export default function App() {
  return (
    <BrowserRouter>
      {/* ErrorBoundary ловит ошибки в ленивых компонентах [cite: 1119-1140] */}
      <ErrorBoundary fallback={<h2 style={{color: 'red'}}>Failed to load the page. Please check your connection.</h2>}>
        
        <nav style={{ display: "flex", gap: "15px", padding: "15px", background: "#282c34", color: "white" }}>
          <Link to="/" style={{ color: "white" }}>Home</Link>
          <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>
          <Link to="/settings" style={{ color: "white" }}>Settings</Link>
          <Link to="/profile" style={{ color: "white" }}>Profile</Link>
        </nav>

        {/* Suspense показывает спиннер во время загрузки чанков [cite: 982, 1032] */}
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>

      </ErrorBoundary>
    </BrowserRouter>
  );
}