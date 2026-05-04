import { useState } from "react";
import { Github, Linkedin, Loader2, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useReveal } from "@/hooks/use-reveal";

// Web3Forms public access key — safe to expose in client code.
// Get your own free key at https://web3forms.com (no signup, just email verification).
const WEB3FORMS_ACCESS_KEY = "07d98779-3577-4ac3-9407-af32f6d783da";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre").max(100, "Máx. 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Máx. 255 caracteres"),
  message: z.string().trim().min(10, "Mínimo 10 caracteres").max(2000, "Máx. 2000 caracteres"),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const head = useReveal<HTMLDivElement>();
  const formReveal = useReveal<HTMLFormElement>();
  const cards = useReveal<HTMLDivElement>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Nuevo mensaje del portfolio — ${parsed.data.name}`,
          from_name: parsed.data.name,
          name: parsed.data.name,
          email: parsed.data.email,
          message: parsed.data.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Mensaje enviado", description: "Te respondo en menos de 24h." });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message || "Error al enviar");
      }
    } catch (err) {
      toast({
        title: "No se pudo enviar",
        description: "Probá nuevamente o escribime directo por email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-32 border-t border-border overflow-hidden">


      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          {/* Left column — heading + info cards */}
          <div>
            <div ref={head.ref} className={`reveal ${head.visible ? "is-visible" : ""}`}>
              <div className="font-mono text-xs text-primary uppercase tracking-widest mb-6">
                05 — Contacto
              </div>
              <h2 className="text-6xl md:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight">
                Tenés una idea?
                <br />
                <span className="font-serif-display italic text-gradient-animated">Construyámosla</span>.
              </h2>

              <p className="mt-8 text-lg text-muted-foreground max-w-xl">
                Estoy disponible para proyectos freelance, colaboraciones y oportunidades fullstack orientadas a producto. Dejame tu mensaje y te respondo en menos de 24h.
              </p>
            </div>

            <div ref={cards.ref} className={`mt-12 grid gap-4 reveal ${cards.visible ? "is-visible" : ""}`}>
              {[
                { icon: Github, label: "GitHub", value: "@LucasTabacchi", href: "https://github.com/LucasTabacchi" },
                { icon: Linkedin, label: "LinkedIn", value: "Lucas Tabacchi", href: "https://www.linkedin.com/in/lucas-tabacchi-ab74551a5/?skipRedirect=true" },
                { icon: MapPin, label: "Ubicación", value: "Concepción del Uruguay, ER, AR", href: "#" },
              ].map((c, i) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card/40 backdrop-blur-sm hover:border-primary hover:-translate-y-1 hover:shadow-[0_10px_30px_-15px_hsl(var(--primary)/0.5)] transition-all duration-300 shine"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <c.icon className="size-5 text-muted-foreground shrink-0 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                  <div>
                    <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="font-medium">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div>
            <form
              ref={formReveal.ref}
              onSubmit={handleSubmit}
              className={`grid gap-5 p-8 xl:p-10 rounded-3xl border border-border bg-card/40 backdrop-blur-sm lg:sticky lg:top-24 reveal reveal-scale ${formReveal.visible ? "is-visible" : ""}`}
              noValidate
            >
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Dejá tu mensaje ↓
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-mono text-xs uppercase tracking-widest">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre"
                    maxLength={100}
                    className="bg-background/60 h-12"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-mono text-xs uppercase tracking-widest">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    maxLength={255}
                    className="bg-background/60 h-12"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-mono text-xs uppercase tracking-widest">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Contame sobre tu idea, proyecto u oportunidad…"
                  maxLength={2000}
                  rows={5}
                  className="bg-background/60 resize-none"
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:scale-[1.01] transition-transform disabled:opacity-60 disabled:cursor-not-allowed self-start"
              >
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Enviando…
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="size-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="container mt-32 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <div className="font-mono uppercase tracking-wider">© 2026 Lucas Tabacchi. Todos los derechos reservados</div>
      </footer>
    </section>
  );
};

export default Contact;