import { useReveal } from "@/hooks/use-reveal";

const About = () => {
  const head = useReveal<HTMLDivElement>();
  const body = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-32 border-t border-border">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
        <div
          ref={head.ref}
          className={`lg:col-span-4 reveal reveal-left ${head.visible ? "is-visible" : ""}`}
        >
          <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
            01 — Sobre mí
          </div>
          <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[0.95]">
            Construyo
            <br />
            <span className="font-serif-display italic text-gradient-warm">software</span>
            <br />
            con propósito.
          </h2>
        </div>

        <div
          ref={body.ref}
          className={`lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed reveal reveal-right ${body.visible ? "is-visible" : ""}`}
        >
          <p>
            Me gusta trabajar donde se cruzan <span className="text-foreground">producto e ingeniería</span>. Diseño experiencias web con React, Next.js y TypeScript, pero también construyo backend con Python, Django y Strapi para resolver flujos reales de negocio.
          </p>
          <p>
            En mis proyectos aparecen temas como <span className="text-foreground">pagos, emails transaccionales, CMS, persistencia, jobs asincrónicos, arquitectura de datos y automatizaciones</span>. Me interesa especialmente reducir fricción para usuarios y para developers.
          </p>
          <p>
            Hoy estoy enfocado en construir productos más sólidos end-to-end, mejorar mantenibilidad y crear herramientas útiles que combinen <span className="text-foreground">buena UX con decisiones técnicas consistentes</span>.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-8">
            {[
              { t: "Pensar producto", d: "Antes de sumar complejidad, entiendo qué problema real estoy resolviendo." },
              { t: "Claridad técnica + DX", d: "Construyo con una base que permita iterar sin romper todo, cuidando la experiencia del developer tanto como la del usuario." },
            ].map((b, i) => (
              <div
                key={b.t}
                className="p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-sm tilt-card shine hover:border-primary/50"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="font-mono text-xs text-secondary uppercase tracking-widest mb-2">
                  {b.t}
                </div>
                <p className="text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;