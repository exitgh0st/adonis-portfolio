import { Injectable, computed, signal } from '@angular/core';
import { Profile, Experience, Skill, SkillsByCategory, Project } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  // Private writable signals
  private profileData = signal<Profile>({
    name: 'Adonis Alcantara',
    title: 'Full-Stack Developer & Automation Architect',
    email: 'alcantaraavesadonis@gmail.com',
    location: 'Pasig, Philippines',
    linkedin: 'https://linkedin.com/in/adonisavesalcantara',
    github: 'https://github.com/exitgh0st',
    summary: 'Experienced full-stack developer with expertise in Angular, Node.js, and Web3 technologies. Proven track record in building scalable web applications, mobile games, and managing vibrant online communities.',
    tagline: 'Building workflows, communities, and scalable web solutions'
  });

  private experiencesData = signal<Experience[]>([
    {
      id: 'exp-0',
      company: 'Freelance',
      position: 'n8n Automation Specialist & Developer',
      startDate: 'Nov. 2025',
      endDate: null,
      location: 'Remote',
      description: 'Design and implement complex n8n workflows for client automation projects across project management, documentation, and business process optimization.',
      responsibilities: [
        'Built production-grade 77-node workflow automating Requirements Traceability Matrix (RTM) generation, reducing manual documentation time from 3-5 hours to 5-10 minutes per task (94% reduction)',
        'Integrated AI agents (DeepSeek LLM) with Asana API, Google Sheets API, Google Docs API, and Google Drive API for intelligent data extraction, transformation, and automated document generation',
        'Implemented complex workflow orchestration with conditional branching, error handling, retry logic, and failure notifications across multiple API platforms',
        'Designed and configured OAuth2 authentication, webhook integrations, and REST API connections for seamless multi-platform data synchronization',
        'Processed and validated JSON data using custom JavaScript transformations, ensuring data integrity and preventing duplicate operations through idempotent workflow design',
        'Created automated test case generation system using AI agents, populating Google Sheets with structured data and generating professional documentation with proper traceability links'
      ],
      technologies: ['n8n', 'AI Agents', 'DeepSeek LLM', 'Asana API', 'Google Sheets API', 'Google Docs API', 'Google Drive API', 'OAuth2', 'JavaScript'],
      type: 'work'
    },
    {
      id: 'exp-1',
      company: 'Blockovate',
      position: 'Web3 Community Moderator',
      startDate: 'Oct. 2023',
      endDate: null,
      location: 'Remote',
      description: 'Manage and moderate Web3 community across multiple platforms, ensuring healthy engagement and platform safety.',
      responsibilities: [
        'Utilize and manage moderation bots to automate rule enforcement and enhance community safety',
        'Provide personalized 1-on-1 assistance via Livechat and direct messages to resolve member issues effectively',
        'Coordinate with the technical team to troubleshoot and resolve user-reported bugs and platform concerns',
        'Monitor community sentiment and escalate critical feedback or trends to project stakeholders',
        'Support marketing campaigns and announcements by engaging with the community and boosting visibility'
      ],
      technologies: ['Discord', 'Telegram', 'Web3', 'Community Management'],
      type: 'work'
    },
    {
      id: 'exp-2',
      company: 'Riveted Games',
      position: 'Web3 Community Manager',
      startDate: 'Aug. 2022',
      endDate: 'Nov. 2022',
      location: 'Remote',
      description: 'Led community engagement initiatives and coordinated with cross-functional teams for Web3 gaming platform.',
      responsibilities: [
        'Hosted interactive events, update streams, and coordinated influencer partnership events',
        'Collaborated with marketing and moderation teams to drive engagement',
        'Tracked and analyzed engagement metrics to optimize community activities'
      ],
      technologies: ['Discord', 'Facebook', 'Web3', 'Marketing', 'Analytics'],
      type: 'work'
    },
    {
      id: 'exp-3',
      company: 'Riveted Games',
      position: 'Web3 Community Moderator',
      startDate: 'Jun. 2022',
      endDate: 'Nov. 2022',
      location: 'Remote',
      description: 'Moderated Web3 communities across Facebook and Discord, resolved issues, and fostered positive engagement.',
      technologies: ['Discord', 'Facebook', 'Web3'],
      type: 'work'
    },
    {
      id: 'exp-4',
      company: 'ANSI Information Systems, Inc.',
      position: 'Full-stack Web Developer',
      startDate: 'Jan. 2020',
      endDate: 'Jun. 2020',
      location: 'Binondo, Manila',
      description: 'Developed cross-platform web applications and collaborated on building in-house libraries.',
      responsibilities: [
        'Developed cross platform web applications using Ionic framework',
        'Built RESTful APIs and backend services following API design best practices',
        'Collaborated with senior developers to create reusable in-house component libraries and shared modules',
        'Implemented responsive UI components and integrated with backend APIs for data synchronization'
      ],
      technologies: ['Ionic', 'Angular', 'TypeScript', 'REST API'],
      type: 'work'
    },
    {
      id: 'exp-5',
      company: 'Kooapps LLC',
      position: 'Mobile Game Developer',
      startDate: 'Jul. 2017',
      endDate: 'Oct. 2019',
      location: 'Makati, Metro Manila',
      description: 'Developed and maintained multiple mobile games using Unity and Android Studio, contributing to titles with over 10 million downloads.',
      responsibilities: [
        'Implemented game features and collaborated with game designers and producers in developing game mechanics',
        'Debugged and resolved critical issues across production builds, ensuring stable releases and high user retention',
        'Optimized app performance by implementing Binary Search Tree algorithm for word validation, reducing loading time from 3-5 seconds to less than 1 second (70-80% improvement)',
        'Mentored teammates during development and created detailed technical documentation'
      ],
      technologies: ['Unity', 'C#', 'Android Studio', 'Java', 'Xcode', 'Objective-C'],
      type: 'work'
    },
    {
      id: 'edu-1',
      company: 'Pamantasan ng Lungsod ng Maynila',
      position: "Bachelor of Science in Information Technology (Dean's Lister)",
      startDate: '2013',
      endDate: 'Apr. 2017',
      location: 'Intramuros, Manila',
      description: 'Graduated with honors as a Dean\'s Lister, specializing in Information Technology.',
      technologies: [],
      type: 'education'
    }
  ]);

  private skillsData = signal<Skill[]>([
    // AI & Automation (matching resume priority)
    { name: 'n8n', category: 'AI & Automation' },
    { name: 'AI Agents', category: 'AI & Automation' },
    { name: 'DeepSeek LLM', category: 'AI & Automation' },
    { name: 'Claude Code', category: 'AI & Automation' },
    { name: 'Cursor', category: 'AI & Automation' },
    { name: 'Workflow Orchestration', category: 'AI & Automation' },

    // Programming & Development
    { name: 'JavaScript', category: 'Programming' },
    { name: 'TypeScript', category: 'Programming' },
    { name: 'C#', category: 'Programming' },
    { name: 'Java', category: 'Programming' },
    { name: 'Objective-C', category: 'Programming' },
    { name: 'Python', category: 'Programming' },
    { name: 'HTML/CSS', category: 'Programming' },
    { name: 'Solidity', category: 'Programming' },

    // Web Development
    { name: 'Angular', category: 'Web Development' },
    { name: 'Node.js', category: 'Web Development' },
    { name: 'Express', category: 'Web Development' },
    { name: 'REST API', category: 'Web Development' },
    { name: 'Prisma ORM', category: 'Web Development' },
    { name: 'Liquibase', category: 'Web Development' },
    { name: 'OAuth2', category: 'Web Development' },
    { name: 'JWT', category: 'Web Development' },

    // Database
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'SQL Optimization', category: 'Database' },
    { name: 'Database Design', category: 'Database' },

    // API Integration
    { name: 'Asana API', category: 'API Integration' },
    { name: 'Postman', category: 'API Integration' },
    { name: 'Google Workspace APIs', category: 'API Integration' },
    { name: 'JSON Transformation', category: 'API Integration' },

    // Tools & Platforms
    { name: 'Docker', category: 'Tools & Platforms' },
    { name: 'Git', category: 'Tools & Platforms' },
    { name: 'Vercel', category: 'Tools & Platforms' },
    { name: 'Render', category: 'Tools & Platforms' },
    { name: 'Discord', category: 'Tools & Platforms' },
    { name: 'Telegram', category: 'Tools & Platforms' },

    // Mobile Development
    { name: 'Ionic', category: 'Mobile Development' },
    { name: 'Android Studio', category: 'Mobile Development' },
    { name: 'Xcode', category: 'Mobile Development' },

    // Game Development
    { name: 'Unity', category: 'Game Development' },
    { name: 'Game Mechanics', category: 'Game Development' },
    { name: 'Performance Optimization', category: 'Game Development' },

    // Methodologies
    { name: 'Agile (Scrum)', category: 'Methodologies' },
    { name: 'Waterfall', category: 'Methodologies' },
  ]);

  private projectsData = signal<Project[]>([
    {
      id: 'proj-4',
      name: 'Stayhub',
      description: 'CRM system for tenancy management with comprehensive booking and property management features.',
      longDescription: 'A comprehensive property management platform designed for landlords and property managers. Stayhub streamlines tenant management, booking processes, and property operations with an intuitive interface built on modern web technologies.',
      technologies: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'TypeScript', 'Liquibase', 'Cloudinary'],
      githubUrl: '#',
      websiteUrl: 'https://www.stayhub.homes/',
      caseStudyUrl: 'projects/stayhub',
      status: 'planned',
      featured: false,
      highlights: [
        'Comprehensive tenant management system',
        'Automated booking and reservation handling',
        'Property portfolio management tools'
      ]
    },
    {
      id: 'proj-6',
      name: 'AI-Powered Project Management Automation',
      description: 'AI-powered n8n workflow automating project documentation and test case generation across Asana and Google APIs.',
      longDescription: 'A sophisticated automation workflow built with n8n that integrates multiple AI agents (powered by DeepSeek) with project management tools. The system extracts task data from Asana, uses AI to generate structured documentation, test plans, and test cases, then automatically creates and populates Google Docs and Google Sheets with the AI-generated content.',
      technologies: ['n8n', 'AI Agents', 'DeepSeek LLM', 'Asana API', 'Google Sheets API', 'Google Docs API', 'Google Drive API'],
      caseStudyUrl: 'projects/rtm-automation',
      status: 'completed',
      featured: true,
      highlights: [
        'AI-powered test case generation',
        'Automated documentation creation',
        'Multi-platform API integration'
      ]
    },
    {
      id: 'proj-1',
      name: 'ng-admin-core',
      description: 'Angular package providing core admin functionality and authentication features for enterprise applications.',
      longDescription: 'A comprehensive Angular library that provides authentication, authorization, and core admin functionality. Built with modern Angular standalone components and designed for scalability.',
      technologies: ['Angular', 'TypeScript', 'Angular Material', 'Interceptors', 'Zod', 'JWT', 'RBAC', 'Route Guards', 'Token Management'],
      githubUrl: 'https://github.com/exitgh0st/labyrinth-nexus/tree/master/projects/ng-admin-core',
      npmUrl: 'https://www.npmjs.com/package/@labyrinth-team/ng-admin-core',
      status: 'completed',
      featured: true,
      highlights: [
        'Standalone Angular components',
        'Authentication & authorization',
        'Reusable admin components'
      ]
    },
    {
      id: 'proj-2',
      name: 'Labyrinth Nexus',
      description: 'Frontend starter template built with Angular, featuring modern architecture and best practices.',
      longDescription: 'A production-ready Angular starter template that uses ng-admin-core for authentication and admin features. Includes SSR, zoneless change detection, and comprehensive tooling setup.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Angular Material', 'SSR'],
      githubUrl: 'https://github.com/exitgh0st/labyrinth-nexus',
      status: 'completed',
      featured: true,
      highlights: [
        'Uses ng-admin-core package',
        'Server-side rendering',
        'Zoneless change detection'
      ]
    },
    {
      id: 'proj-3',
      name: 'Labyrinth Nexus API',
      description: 'Backend starter template with Node.js, Express, and Prisma ORM.',
      longDescription: 'A robust Node.js backend starter template featuring Express, Prisma ORM, PostgreSQL integration, and comprehensive API best practices.',
      technologies: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'TypeScript'],
      githubUrl: 'https://github.com/exitgh0st/labyrinth-nexus-api',
      status: 'completed',
      featured: true,
      highlights: [
        'Prisma ORM integration',
        'RESTful API architecture',
        'PostgreSQL database'
      ]
    },
    {
      id: 'proj-5',
      name: 'Labyrinth Vault',
      description: 'Full-stack application with documentation, blogs, and comprehensive developer resources.',
      longDescription: 'A complete full-stack platform built using Labyrinth Nexus and Labyrinth Nexus API starter templates. Features include documentation system, blog platform, and developer resources.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL', 'Prisma', 'Markdown'],
      githubUrl: '#',
      status: 'planned',
      featured: false,
      highlights: [
        'Integrated documentation system',
        'Full-featured blog platform',
        'Developer resource management'
      ]
    }
  ]);

  // Public readonly signals
  readonly profile = this.profileData.asReadonly();
  readonly experiences = this.experiencesData.asReadonly();
  readonly skills = this.skillsData.asReadonly();
  readonly projects = this.projectsData.asReadonly();

  // Computed signals for filtered/derived data
  readonly workExperiences = computed(() =>
    this.experiences().filter(exp => exp.type === 'work')
  );

  readonly education = computed(() =>
    this.experiences().filter(exp => exp.type === 'education')
  );

  readonly skillsByCategory = computed<SkillsByCategory>(() => {
    const skills = this.skills();
    const categories: SkillsByCategory = {};

    skills.forEach(skill => {
      if (!categories[skill.category]) {
        categories[skill.category] = [];
      }
      categories[skill.category].push(skill);
    });

    return categories;
  });

  readonly featuredProjects = computed(() =>
    this.projects().filter(proj => proj.featured)
  );

  readonly completedProjects = computed(() =>
    this.projects().filter(proj => proj.status === 'completed')
  );

  readonly inProgressProjects = computed(() =>
    this.projects().filter(proj => proj.status === 'in-progress')
  );

  readonly plannedProjects = computed(() =>
    this.projects().filter(proj => proj.status === 'planned')
  );

  constructor() {}
}
