import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiAstro,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiStrapi,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiSqlite,
  SiGraphql,
  SiMercadopago,
  SiBrevo,
  SiDocker,
  SiGithubactions,
  SiSupabase,
  SiVercel,
} from "react-icons/si";
import { useReveal } from "@/hooks/use-reveal";

type StackItem = { name: string; Icon: IconType; color: string };

const groups: {
  title: string;
  chip: string;
  dot: string;
  items: StackItem[];
}[] = [
  {
    title: "Frontend",
    chip: "bg-primary/15 text-primary",
    dot: "bg-primary",
    items: [
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Astro", Icon: SiAstro, color: "#FF5D01" },
    ],
  },
  {
    title: "Backend",
    chip: "bg-secondary/15 text-secondary",
    dot: "bg-secondary",
    items: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Django", Icon: SiDjango, color: "#0C4B33" },
      { name: "Django REST Framework", Icon: SiDjango, color: "#A30000" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Strapi", Icon: SiStrapi, color: "#4945FF" },
    ],
  },
  {
    title: "Datos",
    chip: "bg-accent/15 text-accent",
    dot: "bg-accent",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
      { name: "Redis", Icon: SiRedis, color: "#FF4438" },
      { name: "SQLite", Icon: SiSqlite, color: "#003B57" },
      { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
    ],
  },
  {
    title: "Producto & Infra",
    chip: "bg-violet/15 text-violet",
    dot: "bg-violet",
    items: [
      { name: "Mercado Pago", Icon: SiMercadopago, color: "#00B1EA" },
      { name: "Brevo", Icon: SiBrevo, color: "#0B996E" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
      { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
      { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
    ],
  },
];

const Stack = () => {
  const head = useReveal<HTMLDivElement>();
  return (
    <section id="stack" className="relative py-32 border-t border-border overflow-hidden">
      <div className="container">
        <div
          ref={head.ref}
          className={`flex items-end justify-between flex-wrap gap-4 mb-16 reveal ${head.visible ? "is-visible" : ""}`}
        >
          <div>
            <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
              02 — Stack
            </div>
            <h2 className="text-5xl md:text-6xl font-bold leading-[0.95] max-w-2xl">
              Las herramientas con las que <span className="font-serif-display italic text-gradient">creo</span>.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Un toolkit pragmático: lo que mejor resuelve cada problema, no lo que está de moda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g, i) => (
            <StackCard key={g.title} g={g} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;

const StackCard = ({ g, index }: { g: (typeof groups)[number]; index: number }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group relative p-7 rounded-3xl border border-border bg-card/40 backdrop-blur-sm tilt-card shine hover:border-primary/50 reveal reveal-scale ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`size-10 rounded-xl mb-6 grid place-items-center font-mono text-sm font-bold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${g.chip}`}
      >
        0{index + 1}
      </div>
      <h3 className="text-xl font-semibold mb-4">{g.title}</h3>
      <ul className="space-y-2.5 text-sm text-muted-foreground">
        {g.items.map(({ name, Icon, color }) => (
          <li
            key={name}
            className="flex items-center gap-2.5 transition-transform duration-300 hover:translate-x-1 hover:text-foreground"
          >
            <Icon
              className="size-4 shrink-0 transition-transform duration-300 group-hover:scale-125"
              style={{ color }}
              aria-hidden="true"
            />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};