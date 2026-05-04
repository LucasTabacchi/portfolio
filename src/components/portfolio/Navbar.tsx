import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <a href="#top" className="font-mono text-sm tracking-tight group inline-flex items-center gap-2.5">
          {/* Logo box with rotating conic border */}
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg overflow-hidden">
            {/* Rotating gradient ring */}
            <span
              aria-hidden
              className="absolute inset-[-50%] animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, hsl(var(--primary)) 60deg, hsl(var(--accent)) 120deg, transparent 200deg, transparent 360deg)",
              }}
            />
            {/* Inner card with initials */}
            <span className="absolute inset-[2px] rounded-[7px] bg-card flex items-center justify-center">
              <span className="text-foreground font-bold text-[13px] tracking-tight">LT</span>
            </span>
          </span>
          <span className="font-bold text-foreground">Lucas Tabacchi</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all duration-300"
        >
          Hablemos <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;