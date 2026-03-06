import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Link, useLoaderData, useParams, useSearchParams } from "react-router-dom";
import Layout from './Layout';
import { courses, type Course } from './data';

// --- Компоненты страниц ---
const Home = () => <h1>Welcome to the Student Portal!</h1>;
const About = () => <h1>About our Program</h1>;

// Страница списка курсов с сортировкой (Task 3) [cite: 638, 706, 913]
const CoursesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort") || "asc";

  const sorted = [...courses].sort((a, b) => 
    sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
  );

  return (
    <div>
      <h2>Courses List</h2>
      <button onClick={() => setSearchParams({ sort: sortOrder === "asc" ? "desc" : "asc" })}>
        Toggle Sort: {sortOrder.toUpperCase()}
      </button>
      <ul>
        {sorted.map(c => (
          <li key={c.id}>
            <Link to={`/courses/${c.id}`}>{c.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Страница деталей курса (Task 1 & 2) [cite: 667-683, 866-905]
const CourseDetail = () => {
  const { id } = useParams(); // Получаем ID из URL [cite: 509, 630, 895, 907]
  const { course } = useLoaderData() as { course: Course }; // Получаем данные [cite: 513, 631, 863, 896]

  return (
    <div>
      <h2>{course.title}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>{course.description}</p>
      <small>Route Parameter ID: {id}</small><br/>
      <Link to="/courses">Back to List</Link>
    </div>
  );
};

const NotFound = () => (
  <div><h1>404 Not Found</h1><Link to="/">Home</Link></div>
);

// --- Конфигурация роутера ---
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "courses", element: <CoursesPage /> },
      { 
        path: "courses/:id", 
        element: <CourseDetail />,
        errorElement: <p>Course not found</p>, // [cite: 516, 654]
        loader: async ({ params }) => {
          const course = courses.find(c => c.id === Number(params.id));
          if (!course) throw new Error("Not found");
          return { course };
        }
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* [cite: 507, 567, 819] */}
  </React.StrictMode>
);