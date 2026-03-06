import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Layout from './Layout';

// Простые компоненты страниц прямо здесь, чтобы тебе было проще
const Home = () => <h1>Welcome to the Student Portal Home Page!</h1>;
const About = () => <h1>About Our University</h1>;
const Courses = () => <h1>Available Courses List</h1>;
const NotFound = () => (
  <div style={{ textAlign: 'center' }}>
    <h1>404 - Page Not Found</h1>
    <Link to="/">Return to Home</Link>
  </div>
);

// Конфигурация маршрутов [cite: 547-558, 807-813]
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> }, // Это страница по адресу "/"
      { path: "courses", element: <Courses /> }, // "/courses"
      { path: "about", element: <About /> }, // "/about"
      { path: "*", element: <NotFound /> }, // Любой другой адрес — 404 [cite: 535]
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)