import { useEffect, useState } from "react";

const profile = {
  name: "Lucas Tabacchi",
  role: "Fullstack Developer",
  location: "Concepción del Uruguay, AR",
  status: "available",
};

// Build colored JSON line-by-line so we can syntax-highlight + animate typing.
type Token = { text: string; className?: string };
type Line = { indent: number; tokens: Token[] };

const buildLines = (obj: Record<string, string>): Line[] => {
  const lines: Line[] = [];
  lines.push({ indent: 0, tokens: [{ text: "{", className: "text-foreground/70" }] });
  const entries = Object.entries(obj);
  entries.forEach(([k, v], i) => {
    const isLast = i === entries.length - 1;
    const isStatus = k === "status" && v === "available";
    lines.push({
      indent: 1,
      tokens: [
        { text: `"${k}"`, className: "text-primary" },
        { text: ": ", className: "text-foreground/60" },
        { text: `"${v}"`, className: isStatus ? "text-secondary" : "text-accent" },
        ...(isLast ? [] : [{ text: ",", className: "text-foreground/60" }]),
      ],
    });
  });
  lines.push({ indent: 0, tokens: [{ text: "}", className: "text-foreground/70" }] });
  return lines;
};

const lines = buildLines(profile);
const totalChars = lines.reduce(
  (acc, l) => acc + l.indent * 2 + l.tokens.reduce((a, t) => a + t.text.length, 0) + 1, // +1 newline
  0,
);

const JsonTerminal = () => {
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (typed >= totalChars) return;
    const t = setTimeout(() => setTyped((n) => n + 1), 22);
    return () => clearTimeout(t);
  }, [typed]);

  // Render only the first `typed` characters across the whole block.
  let remaining = typed;
  const done = typed >= totalChars;

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl border border-border bg-card/70 backdrop-blur-md shadow-card overflow-hidden animate-fade-up" style={{ animationDelay: "0.3s" }}>
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-background/60">
        <div className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-destructive/80" />
          <span className="size-3 rounded-full bg-accent/80" />
          <span className="size-3 rounded-full bg-secondary/80" />
        </div>
        <span className="font-mono text-[11px] text-muted-foreground tracking-wider">
          ~/profile.json
        </span>
        <span className="size-3" />
      </div>

      {/* Code body */}
      <pre className="px-5 py-5 font-mono text-sm leading-relaxed overflow-x-auto">
        <code>
          {lines.map((line, li) => {
            const indentStr = "  ".repeat(line.indent);
            // Account for indent characters in the typing budget
            const indentTake = Math.min(remaining, indentStr.length);
            remaining -= indentTake;
            const indentVisible = indentStr.slice(0, indentTake);

            const renderedTokens = line.tokens.map((tok, ti) => {
              if (remaining <= 0) return null;
              const take = Math.min(remaining, tok.text.length);
              remaining -= take;
              const visible = tok.text.slice(0, take);
              if (!visible) return null;
              return (
                <span key={ti} className={tok.className}>
                  {visible}
                </span>
              );
            });

            // newline budget
            if (remaining > 0) remaining -= 1;

            const isLastLine = li === lines.length - 1;
            const showCursorHere = !done && remaining <= 0;

            return (
              <div key={li}>
                {indentVisible}
                {renderedTokens}
                {showCursorHere && (
                  <span className="inline-block w-2 h-4 align-middle bg-primary ml-0.5 animate-pulse" />
                )}
                {!isLastLine && "\n"}
              </div>
            );
          })}
          {done && (
            <span className="inline-block w-2 h-4 align-middle bg-primary ml-0.5 animate-pulse" />
          )}
        </code>
      </pre>
    </div>
  );
};

export default JsonTerminal;