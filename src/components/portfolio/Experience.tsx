import { useReveal } from "@/hooks/use-reveal";

const items = [
  {
    year: "2026",
    title: "AutoDocker",
    org: "Herramienta de automatización Docker",
    description:
      "Herramienta que analiza proyectos y genera artefactos Docker editables, validables y listos para producción. Stack completo con Django, Celery y Redis.",
    tag: "Actual",
  },
  {
    year: "2026",
    title: "ProjectFlow",
    org: "Plataforma de gestión de proyectos",
    description:
      "Plataforma fullstack para gestionar proyectos con tableros, automatizaciones, dependencias y reportes. Construida con Next.js 16 y Supabase.",
    tag: "Producto",
  },
  {
    year: "2025",
    title: "Amargo y Dulce",
    org: "Ecommerce fullstack",
    description:
      "Ecommerce completo con catálogo, checkout, integración Mercado Pago, cupones, facturación y emails transaccionales. Next.js 14 + Strapi.",
    tag: "Commerce",
  },
  {
    year: "2022 — Hoy",
    title: "Licenciatura en Sistemas de Información",
    org: "Universidad Autónoma de Entre Ríos",
    description:
      "Estudio continuo de arquitectura de software, patrones de diseño, sistemas distribuidos, gestión de bases de datos, metodologías ágiles y mejores prácticas de desarrollo fullstack.",
    tag: "Académico",
  },
];

const Experience = () => {
  const head = useReveal<HTMLDivElement>();
  return (
    <section id="experience" className="relative py-32 border-t border-border">
      <div className="container">
        <div
          ref={head.ref}
          className={`mb-20 max-w-4xl reveal ${head.visible ? "is-visible" : ""}`}
        >
          <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            04 — Trayectoria
          </div>
          <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[0.95]">
            Un camino <span className="font-serif-display italic text-gradient-warm">en construcción</span>.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-12 xl:space-y-16">
            {items.map((it, i) => (
              <TimelineItem key={it.title} it={it} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

const TimelineItem = ({ it, index }: { it: (typeof items)[number]; index: number }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const i = index;
  return (
    <div
      ref={ref}
      className={`relative grid md:grid-cols-2 gap-8 items-center reveal ${visible ? "is-visible" : ""} ${
        i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
      }`}
      style={{ transitionDelay: `${i * 100}ms` }}
    >
      <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
        <div className="font-mono text-sm text-secondary mb-1">{it.year}</div>
        <h3 className="text-2xl xl:text-3xl font-bold mb-1 transition-colors duration-300 hover:text-primary">{it.title}</h3>
        <div className="text-sm text-muted-foreground">{it.org}</div>
      </div>

      <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pl-16" : "md:text-right md:pr-16"}`}>
        <div className="inline-block px-3 py-1 mb-3 rounded-full text-xs font-mono border border-border bg-card/50 transition-all duration-300 hover:border-primary hover:text-primary">
          {it.tag}
        </div>
        <p className="text-muted-foreground leading-relaxed">{it.description}</p>
      </div>

      <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 size-3 rounded-full bg-primary animate-dot-pulse" />
    </div>
  );
};