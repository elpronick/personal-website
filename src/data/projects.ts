// ==========================================
// Estructura Tipada y Escalable de Proyectos (Stitch Aligned)
// ==========================================

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'live' | 'demo' | 'external';
}

export interface ProjectItem {
  id: string;
  categoryNumber: string;
  badge: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  links: ProjectLink[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'match-live',
    categoryNumber: '01 // SPORTS',
    badge: 'Realtime WebSockets',
    title: 'Match-Live',
    subtitle: 'Sistema de Telemetría y Transmisión de Eventos Deportivos en Tiempo Real',
    summary:
      'Aplicación en tiempo real para seguimiento de eventos deportivos y marcadores en directo. Cuenta con un frontend reactivo ultraligero que procesa transmisiones bidireccionales con latencias inferiores a 50ms sin recargas de página.',
    tags: ['React', 'Node.js', 'WebSockets', 'SCSS Modular'],
    links: [
      {
        label: 'Código GitHub',
        url: 'https://github.com/elpronick/Match-Live',
        type: 'github'
      },
      {
        label: 'Arquitectura README',
        url: 'https://github.com/elpronick/Match-Live#readme',
        type: 'demo'
      }
    ]
  },
  {
    id: 'guineval-logistics',
    categoryNumber: '02 // LOGISTICS',
    badge: 'Enterprise PERN',
    title: 'Guineval Logistics',
    subtitle: 'Plataforma Integral de Gestión y Trazabilidad de Carga Internacional',
    summary:
      'Sistema de administración, monitoreo y control logístico integral. Incluye gestión de inventario automatizada, auditoria de envios y consultas transaccionales críticas sobre una base de datos PostgreSQL con modelado relacional normalizado, transacciones ACID y cálculo automatizado de tarifas y cubicaje.',
    tags: ['PERN Stack', 'PostgreSQL', 'Express', 'TypeScript'],
    links: [
      {
        label: 'Código GitHub',
        url: 'https://github.com/elpronick/guineval-logistics',
        type: 'github'
      },
      {
        label: 'Arquitectura README',
        url: 'https://github.com/elpronick/guineval-logistics#readme',
        type: 'demo'
      }
    ]
  }
];
