import { useLoaderData, useParams, Link } from "react-router-dom";
import { type Course } from "./data";

export default function CourseDetail() {
  const { id } = useParams(); // Получаем ID из адресной строки [cite: 509, 895]
  const { course } = useLoaderData() as { course: Course }; // Получаем данные из лоадера [cite: 513, 896]

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
      <h2>{course.title}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p>{course.description}</p>
      <hr />
      <p>System ID: {id}</p>
      <Link to="/courses">← Back to All Courses</Link>
    </div>
  );
}