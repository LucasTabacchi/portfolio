<div align="center">

# Lucas Tabacchi — Portfolio

**Fullstack Developer orientado a producto**

Un portfolio personal moderno construido con React, TypeScript y Tailwind CSS, con un diseño bold y animaciones premium.

[Ver en vivo →](https://lucastabacchi.dev) · [LinkedIn](https://www.linkedin.com/in/lucas-tabacchi-ab74551a5/) · [GitHub](https://github.com/LucasTabacchi)

</div>

---

## ✨ Características

- **Matrix digital rain** — Fondo animado estilo matrix renderizado con Canvas API, sincronizado con los colores del tema
- **Terminal JSON interactiva** — Animación de tipeo carácter por carácter con syntax highlighting real
- **Reveal on scroll** — Elementos que aparecen con transiciones de blur, translate y opacity via Intersection Observer
- **Tilt cards + shine** — Efecto de perspectiva 3D y barrido de luz en hover
- **Scroll progress bar** — Barra de progreso con gradiente y glow que indica la posición de lectura
- **Formulario de contacto funcional** — Integrado con Web3Forms para recibir mensajes directamente por email
- **Diseño responsive** — Optimizado para mobile, tablet y desktop con layouts adaptados a cada breakpoint
- **Dark mode nativo** — Sistema de diseño completo basado en CSS custom properties con paleta HSL

## 🛠 Stack

| Categoría | Tecnologías |
|-----------|-------------|
| **Framework** | React 18 · TypeScript · Vite |
| **Estilos** | Tailwind CSS 3 · CSS custom properties · Satoshi + Instrument Serif + JetBrains Mono |
| **UI** | shadcn/ui (Radix primitives) · Lucide Icons · React Icons |
| **Formulario** | Zod (validación) · Web3Forms (envío) |
| **Animaciones** | CSS keyframes · Intersection Observer · Canvas API |
| **Linting** | ESLint 9 · TypeScript ESLint |
| **Testing** | Vitest · Testing Library |

## 📁 Estructura del proyecto

```
src/
├── assets/                     # Imágenes de proyectos
├── components/
│   ├── portfolio/
│   │   ├── Navbar.tsx          # Navegación fija con glassmorphism
│   │   ├── Hero.tsx            # Sección principal con terminal JSON
│   │   ├── JsonTerminal.tsx    # Terminal animada con tipeo
│   │   ├── About.tsx           # Sección "Sobre mí"
│   │   ├── Stack.tsx           # Grilla de tecnologías por categoría
│   │   ├── Projects.tsx        # Proyectos destacados + otros experimentos
│   │   ├── Experience.tsx      # Timeline de trayectoria
│   │   ├── Contact.tsx         # Formulario + info de contacto
│   │   ├── ParticlesBackground.tsx  # Canvas matrix rain
│   │   └── ScrollProgress.tsx  # Barra de progreso de scroll
│   └── ui/                     # Componentes base shadcn/ui
├── hooks/
│   └── use-reveal.ts           # Hook de Intersection Observer
├── pages/
│   └── Index.tsx               # Página principal (composición)
├── index.css                   # Design system, animaciones y utilidades
└── main.tsx                    # Entry point
```

## 🚀 Desarrollo local

### Requisitos previos

- **Node.js** ≥ 18
- **npm** ≥ 9

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/LucasTabacchi/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:8080`.

### Scripts disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build de producción |
| `npm run lint` | Análisis estático con ESLint |
| `npm run test` | Ejecutar tests con Vitest |
| `npm run test:watch` | Tests en modo watch |

## 🎨 Sistema de diseño

El portfolio utiliza un design system propio basado en **CSS custom properties** con valores HSL:

```css
--background: 240 20% 6%;     /* Midnight deep */
--primary: 217 92% 60%;       /* Electric blue */
--secondary: 220 90% 60%;     /* Deep blue */
--accent: 22 100% 60%;        /* Vivid orange */
--violet: 265 90% 65%;        /* Purple accent */
```

### Tipografía

- **Satoshi** — Body text (sans-serif geométrica)
- **Instrument Serif** — Display/headings en italic
- **JetBrains Mono** — Código y labels monoespaciados

### Animaciones custom

- `animate-spotlight` — Glow radial con respiración
- `animate-float-up` — Partículas flotantes
- `animate-fade-up` — Entrada con blur + translate
- `animate-border-glow` — Shimmer en bordes de botones
- `animate-glow-pulse` — Pulsación de drop-shadow
- `animate-spin-slow` — Rotación de borde cónico del logo

## 📬 Contacto

El formulario de contacto usa [Web3Forms](https://web3forms.com/) como backend serverless. Para configurar tu propia key:

1. Andá a [web3forms.com](https://web3forms.com/) y verificá tu email
2. Copiá el access key generado
3. Reemplazá `WEB3FORMS_ACCESS_KEY` en `src/components/portfolio/Contact.tsx`

## 📄 Licencia

Este proyecto es software privado. Todos los derechos reservados © 2026 Lucas Tabacchi.

---

<div align="center">

**Diseñado y construido a mano** por [Lucas Tabacchi](https://github.com/LucasTabacchi)

</div>
