const groups = [
  {
    label: "backend & automation",
    items: ["FastAPI", "Python", "Telethon", "aiogram", "SQLAlchemy", "SQLite"],
  },
  {
    label: "frontend & web",
    items: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Supabase"],
  },
  {
    label: "infra & deploy",
    items: ["Railway", "Vercel", "Render", "Oracle Cloud", "Fly.io"],
  },
  {
    label: "content & motion",
    items: ["Alight Motion", "Video editing", "Faceless tutorials", "Storyboarding"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <p className="section-label mb-4">03 — skills</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={g.label} className="rounded-lg border border-line bg-surface p-6">
            <h3 className="font-display text-sm font-bold text-violet">
              {g.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
