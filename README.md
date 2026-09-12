# Francisco Tillhet — Portfolio Profesional (Full Stack Developer)

[![Astro 5](https://img.shields.io/badge/Astro-5.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Sass/SCSS](https://img.shields.io/badge/Sass-SCSS%20BEM-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-99%2B-00C853?style=flat-square&logo=lighthouse&logoColor=white)](https://developers.google.com/web/tools/lighthouse)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg?style=flat-square)](LICENSE)

Portfolio web profesional de **Francisco Gerardo Tillhet Avomo** ([@elpronick](https://github.com/elpronick)). Diseñado con estética **Obsidian Amber** (dark mode minimalista, acentos ámbar y naranja), arquitectura limpia y rendimiento de vanguardia con **Astro 5**, **TypeScript** y **SCSS modular con metodología BEM**.

---

## ⚡ Aspectos Clave de Ingeniería

- **Zero JS Runtime Overhead**: Renderizado puramente estático para la estructura y contenido del sitio, minimizando el consumo de CPU y memoria en el navegador.
- **Inyección Automática de Estilos**: Configuración avanzada en `astro.config.mjs` vía Vite CSS Preprocessor para inyección global de tokens y mixins en bloques `<style lang="scss">`.
- **Casos de Estudio de Ingeniería**:
  - **Match-Live**: Monitorización y sincronización de marcadores y eventos deportivos en tiempo real con WebSockets.
  - **Guineval Logistics**: Plataforma fullstack para trazabilidad y gestión logística de carga internacional (España ⇄ Guinea Ecuatorial) con PostgreSQL transaccional y cálculo de cubicaje.
- **Tipado Estricto**: Modelos de datos estructurados e interfaces TypeScript escalables en `src/data/`.
- **Accesibilidad & SEO**: Metadatos OpenGraph, Twitter Cards, preconnect con `font-display: swap` y semántica HTML5 pura (Lighthouse 95+).

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Framework** | Astro 5 |
| **Lenguaje** | TypeScript |
| **Estilos** | Sass (SCSS) Modular, Metodología BEM, CSS Variables |
| **Fuentes** | Inter & JetBrains Mono (Google Fonts optimizadas con `swap`) |
| **Herramientas** | Vite, npm, Git, GitHub Actions |

---

## 📁 Arquitectura del Proyecto

```text
personal-website/
├── public/
│   ├── assets/            # Imagen de perfil y recursos estáticos
│   ├── docs/              # Curriculum Vitae oficial en PDF
│   ├── favicon.svg        # Isotipo de pestaña
│   └── robots.txt         # Configuración de rastreo para motores de búsqueda
├── src/
│   ├── components/
│   │   ├── Navbar.astro   # Barra fija con glassmorphism y botón de CV
│   │   ├── Hero.astro     # Identidad técnica, tarjeta con avatar y métricas
│   │   ├── About.astro    # Perfil y Bento Grid de valores
│   │   ├── TechStack.astro# Bento de 4 dominios técnicos (Frontend, Backend, DB, DevOps)
│   │   ├── Projects.astro # Cuadrícula de casos de estudio
│   │   ├── Contact.astro  # Canal de comunicación con copiado seguro y terminal
│   │   └── Footer.astro   # Estado del sistema y copyright
│   ├── data/
│   │   ├── projects.ts    # Datos estructurados y tipados de proyectos
│   │   └── skills.ts      # Categorías técnicas y habilidades
│   ├── layouts/
│   │   └── BaseLayout.astro # Head, SEO, preconnects y contenedor
│   ├── styles/
│   │   ├── _variables.scss# Paleta Obsidian Amber, radios, sombras
│   │   ├── _mixins.scss   # Mixins responsive, flex, glassmorphism
│   │   ├── _reset.scss    # Reset universal y accesibilidad
│   │   ├── _typography.scss # Escala tipográfica fluida
│   │   └── main.scss      # Entrada principal
│   └── pages/
│       └── index.astro    # Ensamblado de página principal
├── astro.config.mjs       # Configuración con inyección SCSS
├── package.json
└── tsconfig.json
```

---

## 🚀 Instalación y Desarrollo Local

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/elpronick/personal-website.git
cd personal-website
npm install
```

### Iniciar el servidor de desarrollo:
```bash
npm run dev
```
Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

### Compilar para producción:
```bash
npm run build
```

### Previsualizar la compilación de producción:
```bash
npm run preview
```

---

## 👤 Autor

**Francisco Gerardo Tillhet Avomo**
- GitHub: [@elpronick](https://github.com/elpronick)
- LinkedIn: [/in/elpronick](https://linkedin.com/in/elpronick)
- Email: [elpronick.dev@gmail.com](mailto:elpronick.dev@gmail.com)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
