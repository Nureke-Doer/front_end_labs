export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  { id: 1, title: "React Router Basics", instructor: "Prof. Smith", description: "Learn SPA navigation." },
  { id: 2, title: "TypeScript Essentials", instructor: "Dr. Brown", description: "Mastering static typing." },
  { id: 3, title: "Web Performance", instructor: "Ms. Lee", description: "Make your apps fast." },
  { id: 4, title: "Advanced Hooks", instructor: "Sakhniuk", description: "Deep dive into useEffect." }
];