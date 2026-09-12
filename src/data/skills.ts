// ==========================================
// Estructura Tipada de Habilidades Técnicas
// ==========================================

export interface TechSkill {
  name: string;
  level: string;
  badge: string;
  description?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  skills: TechSkill[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & Sistemas',
    subtitle: 'Arquitecturas robustas, APIs RESTful y servicios concurrentes',
    icon: 'server',
    skills: [
      { name: 'Node.js', level: 'Avanzado', badge: 'Runtime' },
      { name: 'Express.js', level: 'Avanzado', badge: 'Framework' },
      { name: 'Python', level: 'Intermedio-Avanzado', badge: 'Data & Scripting' },
      { name: 'RESTful APIs', level: 'Avanzado', badge: 'Arquitectura' },
      { name: 'WebSockets', level: 'Intermedio', badge: 'Real-time' }
    ]
  },
  {
    id: 'databases',
    title: 'Bases de Datos & Modelado',
    subtitle: 'Persistencia fiable, integridad transaccional y optimización SQL',
    icon: 'database',
    skills: [
      { name: 'PostgreSQL', level: 'Avanzado', badge: 'RDBMS Core' },
      { name: 'Modelado Relacional', level: 'Avanzado', badge: 'Normalización' },
      { name: 'Optimización de Consultas', level: 'Intermedio-Avanzado', badge: 'Indexación' },
      { name: 'Migraciones de Esquema', level: 'Intermedio', badge: 'DBA' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & UI Engineering',
    subtitle: 'Interfaces modulares, alto rendimiento y cero javascript innecesario',
    icon: 'layout',
    skills: [
      { name: 'React', level: 'Avanzado', badge: 'Library' },
      { name: 'Astro', level: 'Avanzado', badge: 'Zero-JS Engine' },
      { name: 'TypeScript', level: 'Avanzado', badge: 'Type Safety' },
      { name: 'SASS / SCSS (BEM)', level: 'Avanzado', badge: 'Arquitectura CSS' },
      { name: 'HTML5 Semántico / A11y', level: 'Avanzado', badge: 'Accesibilidad' }
    ]
  },
  {
    id: 'devops-tools',
    title: 'Herramientas, DevOps & Calidad',
    subtitle: 'Entornos consistentes, automatización y control de versiones',
    icon: 'terminal',
    skills: [
      { name: 'Git & GitHub Workflows', level: 'Avanzado', badge: 'VCS' },
      { name: 'Docker', level: 'Intermedio', badge: 'Contenedores' },
      { name: 'Linux / Bash', level: 'Intermedio-Avanzado', badge: 'CLI' },
      { name: 'Vite / Tooling', level: 'Avanzado', badge: 'Bundlers' },
      { name: 'GitHub Actions / CI', level: 'Intermedio', badge: 'Automatización' }
    ]
  }
];
