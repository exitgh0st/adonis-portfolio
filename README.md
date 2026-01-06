# Adonis Alcantara - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full-Stack Developer & Automation Architect. Built with Angular 20, featuring server-side rendering (SSR), smooth animations, and a clean, professional design.

## About

This portfolio highlights my experience in full-stack development, Web3 community management, game development, and workflow automation. It showcases my projects, technical skills, professional experience, and provides ways to get in touch.

## Tech Stack

### Frontend
- **Angular 20** - Latest Angular framework with standalone components
- **TypeScript** - Type-safe development
- **Angular Material** - UI component library
- **SCSS** - Advanced styling with custom animations and mixins
- **RxJS** - Reactive programming

### Server
- **Angular SSR** - Server-side rendering for improved SEO and performance
- **Express** - Node.js web server for SSR
- **Zoneless Change Detection** - Modern Angular performance optimization

### Features
- Responsive design optimized for all devices
- Smooth scroll animations and interactions
- Scroll spy navigation
- Animate-on-scroll directives
- SEO optimized with meta tags
- Server-side rendering (SSR)
- Modern Angular architecture with signals

## Project Structure

```
src/
├── app/
│   ├── core/                    # Core functionality
│   │   ├── models/              # TypeScript interfaces
│   │   │   ├── profile.model.ts
│   │   │   ├── experience.model.ts
│   │   │   ├── skill.model.ts
│   │   │   └── project.model.ts
│   │   └── services/            # Business logic services
│   │       ├── portfolio-data.service.ts
│   │       └── scroll.service.ts
│   ├── features/                # Feature modules
│   │   ├── header/              # Navigation header
│   │   ├── hero/                # Hero/intro section
│   │   ├── projects/            # Projects showcase
│   │   │   ├── components/
│   │   │   │   └── project-card/
│   │   │   └── pages/           # Project case studies
│   │   │       ├── stayhub/
│   │   │       └── rmt-automation/
│   │   ├── skills/              # Skills display
│   │   ├── experience/          # Work history
│   │   └── contact/             # Contact section
│   ├── shared/                  # Shared components & directives
│   │   ├── components/
│   │   │   ├── section-container/
│   │   │   └── skill-chip/
│   │   └── directives/
│   │       ├── animate-on-scroll.directive.ts
│   │       └── scroll-spy.directive.ts
│   ├── app.ts                   # Root component
│   └── app.routes.ts            # Application routes
├── styles/                      # Global styles
│   ├── _variables.scss          # Design tokens
│   ├── _mixins.scss            # Reusable style mixins
│   ├── _animations.scss        # Animation definitions
│   └── _breakpoints.scss       # Responsive breakpoints
└── index.html                   # Main HTML file
```

## Sections

### Hero
Introduction section with name, title, and call-to-action buttons to view projects or get in touch.

### Projects
Showcase of featured projects including:
- **ng-admin-core** - Angular library for authentication and admin features
- **Labyrinth Nexus** - Frontend starter template with modern Angular
- **Labyrinth Nexus API** - Backend starter with Node.js and Prisma
- **Stayhub** - Property management CRM system
- **AI-Powered Project Management Automation** - n8n workflow with AI agents
- **Labyrinth Vault** - Full-stack documentation and blog platform

### Skills
Technical skills organized by category:
- Frontend Development (Angular, TypeScript, HTML/CSS, SCSS, RxJS)
- Backend Development (Node.js, Express, REST API, Prisma)
- Database (PostgreSQL, MySQL, Liquibase, SQL)
- Mobile Development (Ionic, Android Studio, Java, Xcode)
- Game Development (Unity, C#, Performance Optimization)
- Cloud & DevOps (Vercel, Render, Git, CI/CD)
- AI & Automation (n8n, AI Agents, Claude Code, ChatGPT)
- APIs & Integration (Asana API, Google APIs, Postman)
- Security & Architecture (Authentication, RBAC, Route Guards, SSR)

### Experience
Professional work history and education:
- **Blockovate** - Web3 Community Moderator (Oct 2023 - Present)
- **Riveted Games** - Web3 Community Manager (Aug 2022 - Nov 2022)
- **ANSI Information Systems** - Full-stack Web Developer (Jan 2020 - Jun 2020)
- **Kooapps LLC** - Mobile Game Developer (Jul 2017 - Oct 2019)
- **PLM** - Bachelor of Science in IT, Dean's Lister (2013 - 2017)

### Contact
Contact form and social media links for getting in touch.

## Getting Started

### Prerequisites
- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/exitgh0st/adonis-portfolio.git
cd adonis-portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you change source files.

### Build

Build the project for production:
```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

### SSR Server

Run the server-side rendering server:
```bash
npm run serve:ssr:adonis-portfolio
```

This will start the Express server that serves the pre-rendered Angular application.

## Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run unit tests
npm test

# Watch mode for development
npm run watch

# Serve SSR application
npm run serve:ssr:adonis-portfolio
```

## Key Features Implementation

### Scroll Spy Navigation
Custom directive that tracks which section is currently in view and updates navigation highlighting accordingly.

### Animate on Scroll
Reusable directive that triggers animations when elements enter the viewport, enhancing user experience with smooth transitions.

### Signal-Based State Management
Uses Angular signals for reactive state management in the `PortfolioDataService`, providing type-safe and efficient data flow.

### Server-Side Rendering
Implements Angular SSR for better SEO, faster initial page load, and improved performance on slower devices.

## SEO Optimization

The website includes comprehensive SEO optimization:
- Meta description and keywords
- Open Graph tags for social media sharing
- Twitter Card support
- Semantic HTML structure
- SSR for search engine crawlers

## Contact

- **Email**: alcantaraavesadonis@gmail.com
- **LinkedIn**: [linkedin.com/in/adonisavesalcantara](https://linkedin.com/in/adonisavesalcantara)
- **GitHub**: [github.com/exitgh0st](https://github.com/exitgh0st)
- **Location**: Pasig, Philippines

## License

This project is personal portfolio website. All rights reserved.

---

Built with Angular 20 and hosted with modern web technologies.
