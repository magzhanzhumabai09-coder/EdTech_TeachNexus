export type Course = {
  id: string;
  name: string;
  code: string;
  students: number;
};

export type Assignment = {
  id: string;
  title: string;
  courseId: string;
  dueDate: string;
  submissions: number;
};

export type Exam = {
  id: string;
  title: string;
  courseId: string;
  date: string;
};

export type Lesson = {
  id: string;
  title: string;
  day: string; // Mon..Sun
  time: string; // 09:00, 10:00
};

export const courses: Course[] = [
  { id: "c1", name: "Algebra I", code: "MATH101", students: 28 },
  { id: "c2", name: "Biology", code: "BIO201", students: 24 },
  { id: "c3", name: "World History", code: "HIST110", students: 30 },
];

export const assignments: Assignment[] = [
  { id: "a1", title: "Quadratic Worksheet", courseId: "c1", dueDate: "2025-10-21", submissions: 22 },
  { id: "a2", title: "Cell Structure Essay", courseId: "c2", dueDate: "2025-10-23", submissions: 18 },
];

export const exams: Exam[] = [
  { id: "e1", title: "Midterm Quiz", courseId: "c1", date: "2025-10-25" },
  { id: "e2", title: "Lab Safety", courseId: "c2", date: "2025-10-28" },
];

export const lessons: Lesson[] = [
  { id: "l1", title: "Linear Equations", day: "Mon", time: "09:00" },
  { id: "l2", title: "Factoring", day: "Wed", time: "10:00" },
  { id: "l3", title: "Cell Membranes", day: "Tue", time: "11:00" },
];
