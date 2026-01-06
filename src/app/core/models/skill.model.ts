export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Mobile Development'
  | 'Game Development'
  | 'Cloud & DevOps'
  | 'AI & Automation'
  | 'APIs & Integration'
  | 'Security & Architecture';

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
  proficiency?: number; // 1-5 rating
}

export interface SkillsByCategory {
  [key: string]: Skill[];
}