import { ArrowUpRight, Github } from "lucide-react";
import amargo from "@/assets/project-amargo.jpg";
import flow from "@/assets/project-flow.jpg";
import autodocker from "@/assets/project-autodocker.jpg";
import { useReveal } from "@/hooks/use-reveal";

type Featured = {
  n: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
  live: string;
  code: string;
  accentText: string;
  accentOverlay: string;
};

const featured: Featured[] = [
  {
    n: "01",
    title: "AutoDocker",
    tagline: "Tooling + backend",
    description:
      "Herramienta para developers que analiza proyectos y genera artefactos Docker editables, validables y listos para iterar. Stack completo con Django, Celery y Redis.",
    tags: ["Python", "Django", "DRF", "Celery", "Redis", "Docker"],
    image: autodocker,
    live: "https://app.144.22.177.160.sslip.io/accounts/login/?next=/",
    code: "https://github.com/LucasTabacchi/autodocker",
    accentText: "text-primary",
    accentOverlay: "from-primary/30",
  },
  {
    n: "02",
    title: "ProjectFlow",
    tagline: "Producto colaborativo",
    description:
      "Plataforma fullstack para gestionar proyectos, tableros, automatizaciones, dependencias y reportes en una sola interfaz. Construida con Next.js 16, React 19 y Supabase.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Prisma", "Supabase"],
    image: flow,
    live: "https://project-flow-one.vercel.app",
    code: "https://github.com/LucasTabacchi/project-flow",
    accentText: "text-accent",
    accentOverlay: "from-accent/30",
  },
  {
    n: "03",
    title: "Amargo y Dulce",
    tagline: "E-commerce + UX",
    description:
      "Ecommerce fullstack con catálogo, checkout, integración con Mercado Pago, cupones, facturación y emails transaccionales. Frontend en Next.js 14 y backend headless en Strapi.",
    tags: ["Next.js 14", "TypeScript", "Strapi", "Mercado Pago", "Brevo"],
    image: amargo,
    live: "https://amargo-y-dulce.vercel.app",
    code: "https://github.com/LucasTabacchi/frontend-ecommerce-amargo-y-dulce",
    accentText: "text-secondary",
    accentOverlay: "from-secondary/30",
  },
];

const other = [
  { name: "Banking events system", tech: "Next.js · Kafka", url: "https://github.com/LucasTabacchi/banking-events-kafka-nextjs" },
  { name: "SPA Flybondi", tech: "JavaScript · SPA", url: "https://github.com/LucasTabacchi/spa_flybondi" },
  { name: "SPA SpaceX", tech: "JavaScript · SPA", url: "https://github.com/LucasTabacchi/spa_space_x" },
];

const Projects = () => {
  const head = useReveal<HTMLDivElement>();
  const otherHead = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="relative py-32 border-t border-border">
      <div className="container">
        <div
          ref={head.ref}
          className={`flex items-end justify-between flex-wrap gap-4 mb-20 reveal ${head.visible ? "is-visible" : ""}`}
        >
          <div>
            <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
              03 — Proyectos
            </div>
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[0.95] max-w-3xl">
              Cosas que <span className="font-serif-display italic text-gradient">construí</span>.
            </h2>
          </div>
          <a
            href="https://github.com/LucasTabacchi"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 group"
          >
            Ver todo en GitHub <ArrowUpRight className="size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="space-y-8 xl:space-y-10">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>

        {/* Otros proyectos */}
        <div ref={otherHead.ref} className={`mt-24 reveal ${otherHead.visible ? "is-visible" : ""}`}>
          <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-8">
            Otros experimentos
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {other.map((o, i) => (
              <OtherCard key={o.name} o={o} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

const ProjectCard = ({ p, index }: { p: Featured; index: number }) => {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      className={`group relative grid lg:grid-cols-12 gap-8 xl:gap-12 items-center p-6 md:p-10 xl:p-14 rounded-3xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-all overflow-hidden tilt-card reveal ${visible ? "is-visible" : ""} ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
        }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-video bg-muted">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          width={1200}
          height={675}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${p.accentOverlay} via-transparent to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-50`} />
        <div className="absolute inset-0 ring-1 ring-inset ring-foreground/0 group-hover:ring-primary/40 transition-all duration-500 rounded-2xl pointer-events-none" />
      </div>

      <div className="lg:col-span-5 space-y-5">
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className={`${p.accentText} transition-transform duration-500 group-hover:scale-125 origin-left`}>{p.n}</span>
          <span className="h-px flex-1 bg-border group-hover:bg-primary/40 transition-colors duration-500" />
          <span className="text-muted-foreground uppercase tracking-widest">{p.tagline}</span>
        </div>

        <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold transition-colors duration-300 group-hover:text-primary">{p.title}</h3>
        <p className="text-muted-foreground leading-relaxed text-base xl:text-lg">{p.description}</p>

        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-mono border border-border bg-background/50 transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background font-medium text-sm hover:scale-[1.04] transition-transform"
          >
            Ver demo
            <ArrowUpRight className="size-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={p.code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary hover:scale-[1.04] text-sm transition-all"
          >
            <Github className="size-4" /> Código
          </a>
        </div>
      </div>
    </article>
  );
};

const OtherCard = ({ o, index }: { o: (typeof other)[number]; index: number }) => {
  const { ref, visible } = useReveal<HTMLAnchorElement>();
  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement>}
      href={o.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-between p-5 rounded-2xl border border-border hover:border-primary/60 hover:bg-card/60 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_hsl(var(--primary)/0.5)] reveal ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div>
        <div className="font-medium group-hover:text-primary transition-colors">{o.name}</div>
        <div className="font-mono text-xs text-muted-foreground mt-1">{o.tech}</div>
      </div>
      <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
    </a>
  );
};