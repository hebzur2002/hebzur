export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <p className="section-label mb-4">02 — about</p>
      <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 font-body text-muted">
          <p>
            I came into development sideways — a nursing background, a lot of
            curiosity, and a habit of pairing with AI to turn ideas into
            working software. That path taught me to focus on what actually
            ships, not just what looks good in theory.
          </p>
          <p>
            Most of my work lives at the intersection of automation and the
            web: backend services that move data reliably, bots that save
            people time, and interfaces that feel considered rather than
            default. I develop mostly from a phone, which forces every
            decision to be deliberate.
          </p>
          <p>
            Outside the code editor, I make faceless tutorial videos and
            motion graphics — a different kind of building, same instinct for
            clean execution.
          </p>
        </div>
        <div className="rounded-lg border border-line bg-surface p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-teal">
            currently
          </p>
          <ul className="mt-4 space-y-3 font-mono text-sm text-muted">
            <li>→ building a Telegram auto-forwarding platform</li>
            <li>→ shaping this portfolio, section by section</li>
            <li>→ exploring overseas nursing + tech crossover work</li>
            <li>→ growing a Telegram affiliate channel</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
