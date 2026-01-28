export type SkillCategory =
  | 'AI & Automation'
  | 'Programming'
  | 'Web Development'
  | 'Database'
  | 'API Integration'
  | 'Tools & Platforms'
  | 'Mobile Development'
  | 'Game Development'
  | 'Methodologies';

export interface Skill {
  name: string;
  category: SkillCategory;
  icon?: string;
  proficiency?: number; // 1-5 rating
}

export interface SkillsByCategory {
  [key: string]: Skill[];
}