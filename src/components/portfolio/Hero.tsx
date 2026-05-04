import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import JsonTerminal from "./JsonTerminal";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Spotlight radial — cyan glow centered on the title (animated breathing) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 animate-spotlight"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 45%, hsl(var(--primary) / 0.32), transparent 60%), radial-gradient(ellipse 40% 40% at 70% 70%, hsl(265 90% 65% / 0.22), transparent 65%)",
        }}
      />

      {/* Floating accent dots */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => {
          const left = (i * 7.3) % 100;
          const size = 2 + (i % 3);
          const duration = 12 + (i % 7) * 2;
          const delay = (i * 1.3) % 10;
          const colors = ["var(--primary)", "var(--secondary)", "var(--violet)"];
          const color = colors[i % colors.length];
          return (
            <span
              key={i}
              className="absolute bottom-0 rounded-full animate-float-up"
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: `hsl(${color})`,
                boxShadow: `0 0 12px hsl(${color} / 0.8)`,
                animationDuration: `${duration}s`,
                animationDelay: `-${delay}s`,
              }}
            />
          );
        })}
      </div>

      {/* Removed vignette and bottom gradient to allow seamless Matrix rain flow */}

      <div className="container relative pt-32 pb-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 xl:gap-20 items-center">
          <div>
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-border bg-card/40 backdrop-blur-sm font-mono text-xs animate-fade-up">
            <span className="relative size-2 rounded-full bg-secondary">
              <span className="absolute inset-0 rounded-full animate-status-ping" />
            </span>
            Disponible para nuevos proyectos
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Lucas
            <br />
            <span className="font-serif-display italic text-gradient-animated inline-block animate-glow-pulse">Tabacchi</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground font-medium">Fullstack Developer orientado a producto.</span> Diseño y desarrollo productos que conectan experiencia de usuario, negocio y arquitectura — desde la UI hasta integraciones, automatización y despliegue.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-warm text-primary-foreground font-medium shadow-glow hover:scale-[1.04] transition-transform animate-border-glow"
            >
              Ver proyectos
              <ArrowDown className="size-4 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border hover:border-primary hover:text-primary hover:scale-[1.04] transition-all duration-300"
            >
              Contactarme
            </a>

            <div className="flex items-center gap-2 ml-2">
              {[
                { icon: Github, href: "https://github.com/LucasTabacchi", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/lucas-tabacchi-ab74551a5/?skipRedirect=true", label: "LinkedIn" },
                { icon: Mail, href: "mailto:lucastabacchi31@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="size-11 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          </div>

          {/* JSON terminal — right column */}
          <div className="w-full">
            <JsonTerminal />
          </div>

          {/* Stats — inside grid, spanning both columns on desktop */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {[
              { k: "20+", v: "Proyectos en GitHub" },
              { k: "Fullstack", v: "Front · Back · Infra" },
              { k: "2022", v: "Estudiando en UADER" },
              { k: "AR", v: "Concepción del Uruguay" },
            ].map((s, i) => (
              <div
                key={s.v}
                className="group cursor-default animate-fade-up"
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              >
                <div className="text-3xl font-serif-display text-gradient-warm transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1">
                  {s.k}
                </div>
                <div className="text-xs text-muted-foreground mt-1 transition-colors group-hover:text-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-scroll-cue">
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;