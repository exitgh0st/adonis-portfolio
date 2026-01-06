export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  websiteUrl?: string;
  caseStudyUrl?: string;
  npmUrl?: string;
  imageUrl?: string;
  status: ProjectStatus;
  featured: boolean;
  highlights?: string[];
  startDate?: string;
  endDate?: string;
}
