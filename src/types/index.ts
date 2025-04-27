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

export interface NavLink {
  name: string;
  href: string;
}