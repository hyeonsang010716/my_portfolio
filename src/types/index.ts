export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  video?: string;
  features?: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Study {
  title: string;
  description: string;
  period: string;
  link?: string;
}

export type CourseCategory =
  | 'AI'
  | 'Frontend'
  | 'Backend'
  | 'DevOps'
  | 'Etc';

export interface Course {
  id: number;
  category: CourseCategory;
  title: string;
  author: string;
  image: string;   // public 경로 또는 절대 URL
  link: string;
  provider?: string;   // Inflearn · FastCampus …
}

export interface NavLink {
  name: string;
  href: string;
}