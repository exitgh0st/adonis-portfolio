export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null; // null for current position
  location: string;
  description: string;
  responsibilities?: string[];
  technologies: string[];
  type: 'work' | 'education';
}
