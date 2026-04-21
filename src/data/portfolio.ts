export const profile = {
  name: 'Lucas Tabacchi',
  shortTitle: 'Fullstack Developer orientado a producto',
  heroTitle:
    'Diseño y desarrollo productos que conectan experiencia de usuario, negocio y arquitectura.',
  heroSummary:
    'Trabajo en interfaces, backend, integraciones y automatización para transformar ideas en productos web mantenibles y útiles.',
  location: 'Concepción del Uruguay, Entre Ríos',
  email: 'lucastabacchi31@gmail.com',
  github: 'https://github.com/LucasTabacchi',
  linkedin: 'https://www.linkedin.com/in/lucas-tabacchi-ab74551a5/?skipRedirect=true',
  cvUrl: '/Lucas_Tabacchi_CV.pdf',
  currentFocus: 'AutoDocker',
  intro: [
    'Construyo aplicaciones fullstack con foco en producto: desde la experiencia de usuario hasta la lógica de negocio, las integraciones y el despliegue.',
    'Mi perfil cruza frontend, backend e infraestructura. Me interesa que un proyecto no solo funcione, sino que tenga criterio, claridad técnica y espacio para evolucionar.',
  ],
  about: [
    'Me gusta trabajar donde se cruzan producto e ingeniería. Diseño experiencias web con React, Next.js y TypeScript, pero también construyo backend con Python, Django y Strapi para resolver flujos reales de negocio.',
    'En mis proyectos aparecen temas como pagos, emails transaccionales, CMS, persistencia, jobs asincrónicos, arquitectura de datos y automatizaciones. Me interesa especialmente reducir fricción para usuarios y para developers.',
    'Hoy estoy enfocado en construir productos más sólidos end-to-end, mejorar mantenibilidad y crear herramientas útiles que combinen buena UX con decisiones técnicas consistentes.',
  ],
  principles: [
    'Pensar producto antes de sumar complejidad.',
    'Buscar claridad técnica y DX en paralelo a la UX.',
    'Construir con una base que permita iterar sin romper todo.',
  ],
};

export const socialLinks = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
];

export const heroHighlights = [
  'Next.js',
  'React',
  'TypeScript',
  'Django',
  'Docker',
  'PostgreSQL',
];

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'code',
    items: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Astro'],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: ['Python', 'Django', 'Django REST Framework', 'Node.js', 'Strapi'],
  },
  {
    title: 'Datos',
    icon: 'database',
    items: ['PostgreSQL', 'Prisma', 'Redis', 'SQLite', 'GraphQL'],
  },
  {
    title: 'Producto',
    icon: 'package',
    items: ['Mercado Pago', 'Brevo', 'CMS', 'Automatización', 'Integraciones'],
  },
  {
    title: 'Infra',
    icon: 'cloud',
    items: ['Docker', 'GitHub Actions', 'Supabase', 'Vercel', 'Render'],
  },
];

export const featuredProjects = [
  {
    title: 'AutoDocker',
    description:
      'Herramienta para developers que analiza proyectos y genera artefactos Docker editables, validables y listos para iterar.',
    tags: ['Python', 'Django', 'DRF', 'Celery', 'Redis', 'Docker'],
    repoUrl: 'https://github.com/LucasTabacchi/autodocker',
    demoUrl: 'https://autodocker-web.onrender.com',
    accent: 'Tooling + backend',
    gradient: 'linear-gradient(145deg, #072032 0%, #0e3a57 55%, #164a6b 100%)',
    previewImage: '/project-previews/autodocker-home.png',
    previewPosition: '24% center',
  },
  {
    title: 'ProjectFlow',
    description:
      'Plataforma fullstack para gestionar proyectos, tableros, automatizaciones, dependencias y reportes en una sola interfaz.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', 'Supabase'],
    repoUrl: 'https://github.com/LucasTabacchi/project-flow',
    demoUrl: 'https://project-flow-one.vercel.app',
    accent: 'Producto colaborativo',
    gradient: 'linear-gradient(145deg, #0c1729 0%, #18355e 52%, #28518d 100%)',
    previewImage: '/project-previews/projectflow-home.png',
    previewPosition: '28% center',
  },
  {
    title: 'Amargo y Dulce',
    description:
      'Ecommerce fullstack con catálogo, checkout, Mercado Pago, cupones, facturación y emails transaccionales.',
    tags: ['Next.js 14', 'TypeScript', 'Strapi', 'Mercado Pago', 'Brevo'],
    repoUrl: 'https://github.com/LucasTabacchi/frontend-ecommerce-amargo-y-dulce',
    demoUrl: 'https://amargo-y-dulce.vercel.app',
    accent: 'Commerce + UX',
    gradient: 'linear-gradient(145deg, #24120d 0%, #5a2318 54%, #8d3f20 100%)',
    previewImage: '/project-previews/amargo-home.png',
    previewPosition: 'center center',
  },
];

export const otherProjects = [
  {
    title: 'banking-events-kafka-nextjs',
    description: 'Experimento de mensajería, eventos y arquitectura distribuida con Kafka y Next.js.',
    tags: ['JavaScript', 'Kafka', 'Arquitectura distribuida'],
    repoUrl: 'https://github.com/LucasTabacchi/banking-events-kafka-nextjs',
  },
  {
    title: 'strapi-backend-ecommerce',
    description: 'Backend de ecommerce montado sobre Strapi para catálogo, negocio y gestión de contenido.',
    tags: ['TypeScript', 'Strapi', 'CMS'],
    repoUrl: 'https://github.com/LucasTabacchi/strapi-backend-ecommerce',
  },
  {
    title: 'IS2_TPFI',
    description: 'Proyecto en Python donde apliqué patrones de diseño clásicos con una implementación práctica.',
    tags: ['Python', 'Patrones de diseño'],
    repoUrl: 'https://github.com/LucasTabacchi/IS2_TPFI',
  },
  {
    title: 'spa_flybondi',
    description: 'SPA construida en JavaScript como ejercicio de producto y navegación en una experiencia de viajes.',
    tags: ['JavaScript', 'SPA'],
    repoUrl: 'https://github.com/LucasTabacchi/spa_flybondi',
  },
  {
    title: 'spa_space_x',
    description: 'Proyecto de interfaz basado en contenido espacial, con foco en estructura y navegación.',
    tags: ['JavaScript', 'Frontend'],
    repoUrl: 'https://github.com/LucasTabacchi/spa_space_x',
  },
  {
    title: 'UX-UI',
    description: 'Repositorio de ejercicios y exploraciones tempranas de experiencia de usuario e interfaces.',
    tags: ['HTML', 'UX/UI'],
    repoUrl: 'https://github.com/LucasTabacchi/UX-UI',
  },
];

export const experienceItems = [
  {
    type: 'project',
    title: 'AutoDocker',
    subtitle: 'Herramienta de automatización Docker',
    period: '2024 — Presente',
    description: 'Herramienta que analiza proyectos y genera artefactos Docker editables, validables y listos para producción. Stack completo con Django, Celery y Redis.',
    tags: ['Python', 'Django', 'Celery', 'Redis', 'Docker'],
  },
  {
    type: 'project',
    title: 'ProjectFlow',
    subtitle: 'Plataforma de gestión de proyectos',
    period: '2024',
    description: 'Plataforma fullstack para gestionar proyectos con tableros, automatizaciones, dependencias y reportes. Construida con Next.js 16 y Supabase.',
    tags: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Supabase'],
  },
  {
    type: 'project',
    title: 'Amargo y Dulce',
    subtitle: 'Ecommerce fullstack',
    period: '2024',
    description: 'Ecommerce completo con catálogo, checkout, integración Mercado Pago, cupones, facturación y emails transaccionales.',
    tags: ['Next.js', 'Strapi', 'Mercado Pago', 'Brevo'],
  },
  {
    type: 'learning',
    title: 'Formación continua',
    subtitle: 'Desarrollo profesional',
    period: '2022 — Presente',
    description: 'Estudio continuo de arquitectura de software, patrones de diseño, sistemas distribuidos y mejores prácticas de desarrollo fullstack.',
    tags: ['Arquitectura', 'Patrones', 'Sistemas distribuidos'],
  },
];

export const contactItems = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'LinkedIn', value: 'lucas-tabacchi-ab74551a5', href: profile.linkedin },
  { label: 'GitHub', value: 'LucasTabacchi', href: profile.github },
  { label: 'Ubicación', value: profile.location },
];
