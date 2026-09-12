# Plan de Implementación: Portfolio Web Profesional

Reconstrucción del portfolio web personal desde cero con **Astro**, **TypeScript** y **SCSS modular (BEM)**, con una estética dark mode minimalista (#0d0e12 con acentos ámbar/naranja), enfoque técnico en **PERN Stack + Python**, y optimización para rendimiento extremo (0 KB JS innecesario, Lighthouse 95+).

---

## Decisiones Técnicas y Arquitectura

- **Framework:** Astro 5.x configurado en el directorio raíz del proyecto (`personal-website`).
- **Estilos:** SCSS modular con metodología BEM, organizado en `src/styles/` (`_variables.scss`, `_mixins.scss`, `_reset.scss`, `_typography.scss`, `main.scss`) usando variables CSS nativas para consistencia y dinamismo.
- **Tipografía y Estética:** Google Fonts (`Inter` para cuerpo/titulares limpios y `JetBrains Mono` para detalles técnicos y etiquetas de código) integradas de forma optimizada.
- **Datos Desacoplados:** Creación de `src/data/projects.ts` y `src/data/skills.ts` con información técnica real (proyectos como *Match-Live*, *Guineval Logistics*, *Rick & Morty Explorer*, etc.) para facilitar la edición y mantenimiento sin ensuciar los componentes.
- **SEO & Accesibilidad:** Meta tags estándar, Open Graph, Twitter Cards, robots.txt, HTML5 semántico y navegación accesible por teclado (a11y).

---

## User Review Required

> [!NOTE]
> **Datos de Contacto y Perfiles**:
> Utilizaremos como datos iniciales detectados en el repositorio tu nombre (*Francisco Gerardo Tillhet Avomo* / *elpronick*) y correo (*elpronick.dev@gmail.com*), con enlaces configurables a tus perfiles de GitHub y LinkedIn. Podrás confirmar o ajustar estos datos en cualquier momento en el archivo `src/data/projects.ts` o en los componentes.

> [!IMPORTANT]
> **Inicialización en el Directorio Actual**:
> Para evitar que la herramienta interactiva de Astro cree subdirectorios innecesarios (como detectamos en la prueba con carpetas anidadas), crearemos directamente el `package.json`, `astro.config.mjs` y `tsconfig.json` en la raíz de `personal-website` e instalaremos las dependencias necesarias (`astro`, `sass`, `typescript`) limpiamente.

---

## Estructura de Archivos Propuesta

```text
personal-website/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar.astro       # Barra de navegación flotante con enlaces suaves y botón CV
│   │   ├── Hero.astro         # Presentación con badge de disponibilidad, rol PERN + Python y CTAs
│   │   ├── About.astro        # Perfil técnico, enfoque de ingeniería y resolución de problemas
│   │   ├── TechStack.astro    # Grid categorizado (Frontend, Backend, DB, DevOps/Tools)
│   │   ├── Projects.astro     # Tarjetas de proyectos con tags, métricas y enlaces (GitHub / Live)
│   │   ├── Contact.astro      # Sección de contacto rápido con tarjeta y copia de email
│   │   └── Footer.astro       # Pie de página técnico minimalista
│   ├── data/
│   │   ├── projects.ts        # Información estructurada de proyectos reales
│   │   └── skills.ts          # Habilidades y tecnologías organizadas por categoría
│   ├── layouts/
│   │   └── BaseLayout.astro   # Plantilla base con metadatos SEO, fuentes y contenedor principal
│   ├── styles/
│   │   ├── _variables.scss    # Paleta dark mode (#0d0e12, acentos ámbar), fuentes, espaciados
│   │   ├── _mixins.scss       # Mixins para Flexbox, Grid, breakpoints responsivos y glassmorphism
│   │   ├── _reset.scss        # Reset universal CSS y accesibilidad
│   │   ├── _typography.scss   # Escala tipográfica fluida
│   │   └── main.scss          # Entrada principal que compila todo el sistema de diseño
│   └── pages/
│       └── index.astro        # Página principal ensamblando los componentes
├── astro.config.mjs           # Configuración de Astro
├── package.json               # Scripts y dependencias (astro, sass, typescript)
├── tsconfig.json              # Configuración TypeScript estricta
└── plan de mi pagina.md       # Documento de referencia del usuario
```

---

## Proposed Changes

### 1. Configuración del Proyecto y Dependencias

#### [NEW] `package.json`
- Definición de scripts: `"dev": "astro dev"`, `"build": "astro build"`, `"preview": "astro preview"`.
- Dependencias: `astro`, `sass`, `typescript`.

#### [NEW] `astro.config.mjs`
- Configuración básica y limpia para Astro 5.x.

#### [NEW] `tsconfig.json`
- Extensión de la configuración estricta de Astro (`astro/tsconfigs/strict`).

---

### 2. Sistema de Diseño SCSS Modular

#### [NEW] `src/styles/_variables.scss`
- Paleta Dark Mode:
  - Fondo base: `#0d0e12`
  - Superficie elevada: `#151821`
  - Superficie flotante / tarjeta: `#1c212d`
  - Bordes sutiles: `#2a3243`
  - Acentos: Ámbar `#f59e0b`, Naranja `#f97316`, Dorado `#fbbf24`
  - Texto principal: `#f3f4f6`, Texto secundario: `#9ca3af`, Muted: `#6b7280`
- Breakpoints: móvil (`576px`), tablet (`768px`), desktop (`1024px`), wide (`1280px`).

#### [NEW] `src/styles/_mixins.scss`
- Mixins reutilizables: `@mixin respond-to()`, `@mixin flex-center`, `@mixin glass-panel`, `@mixin card-hover`.

#### [NEW] `src/styles/_reset.scss`
- Reset moderno sin dependencias pesadas, box-sizing, eliminación de márgenes, scroll suave nativo (`scroll-behavior: smooth`).

#### [NEW] `src/styles/_typography.scss`
- Integración de fuentes sans-serif para lectura nítida (`Inter`) y tipografía monoespaciada para elementos de código y chips (`JetBrains Mono`).

#### [NEW] `src/styles/main.scss`
- Archivo central que importa los módulos SCSS en orden y define clases globales de utilidad.

---

### 3. Capa de Datos Estructurada

#### [NEW] `src/data/skills.ts`
- Colección tipada de habilidades agrupadas:
  - **Frontend:** React, TypeScript, Astro, HTML5 Semántico, SASS/SCSS.
  - **Backend:** Node.js, Express, Python, RESTful APIs, Arquitectura Modular.
  - **Bases de Datos:** PostgreSQL, Modelado Relacional, Consultas SQL.
  - **Herramientas & Entorno:** Git, GitHub Actions, Docker, Vite, Linux/Bash.

#### [NEW] `src/data/projects.ts`
- Datos técnicos reales de proyectos:
  - **Match-Live:** Aplicación en tiempo real para seguimiento de eventos deportivos y marcadores en directo con frontend reactivo.
  - **Guineval Logistics:** Sistema de administración y control logístico con gestión de datos.
  - **Rick & Morty Explorer:** Aplicación web con TypeScript y React orientada al consumo eficiente de APIs, filtrado dinámico y paginación.
  - **Tutti-Frutti Web:** Juego interactivo de agilidad mental con interfaz visual limpia y control de estado.

---

### 4. Componentes y Layouts

#### [NEW] `src/layouts/BaseLayout.astro`
- Configuración de `<html>`, `<head>` (con canonical, SEO y OpenGraph), `<body>` con fondo oscuro `#0d0e12` y carga de `main.scss`.

#### [NEW] `src/components/Navbar.astro`
- Barra de navegación fija con efecto glassmorphism, enlaces a las secciones y acceso directo a CV.

#### [NEW] `src/components/Hero.astro`
- Título principal, badge "Open to work / Disponible para proyectos", resumen técnico con énfasis en PERN + Python, y botones de acción (Ver Proyectos / Contactar).

#### [NEW] `src/components/About.astro`
- Enfoque profesional de desarrollo de software, buenas prácticas, arquitectura limpia y capacidad de resolución de problemas técnicos.

#### [NEW] `src/components/TechStack.astro`
- Visualización interactiva y categorizada de habilidades técnicas mediante tarjetas y badges estilizados con acentos ámbar.

#### [NEW] `src/components/Projects.astro`
- Cuadrícula de tarjetas con descripción del reto técnico, badges de tecnologías empleadas, enlace al repositorio en GitHub y enlace a la demo en vivo.

#### [NEW] `src/components/Contact.astro`
- Bloque de contacto con tarjeta de acción rápida para escribir por correo electrónico o conectar por LinkedIn.

#### [NEW] `src/components/Footer.astro`
- Pie de página con créditos técnicos, links a repositorios y copyright.

#### [NEW] `src/pages/index.astro`
- Página principal que ensambla todos los componentes dentro de `BaseLayout.astro`.

#### [NEW] `public/robots.txt` y `public/favicon.svg`
- Archivos estáticos de optimización y presencia visual en pestaña del navegador.

---

## Verification Plan

### Automated Tests & Compilación
1. **Instalación de paquetes:**
   ```powershell
   npm install
   ```
2. **Validación de Build de Producción:**
   ```powershell
   npm run build
   ```
   *Verificar que Astro genere el bundle estático en `dist/` sin errores de SCSS, tipado ni sintaxis.*

### Verificación en Servidor de Desarrollo
1. **Lanzar dev server:**
   ```powershell
   npm run dev
   ```
2. **Comprobación Visual y Responsiva:**
   - Navegación fluida por todas las secciones (#about, #tech-stack, #projects, #contact).
   - Verificación de contraste cromático dark mode (#0d0e12 con toques ámbar/naranja).
   - Adaptación correcta a dispositivos móviles, tablets y monitores de escritorio.
   - Rendimiento de 0 KB de JavaScript en el cliente para el layout estático.
