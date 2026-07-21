const projects = [
  {
    title: "Telegram Auto-Forwarding Platform",
    desc: "Full-stack system that forwards and rewrites Telegram messages across channels — FastAPI + Telethon backend, plus a bot access point built with aiogram v3, OTP login, and per-user rule management.",
    stack: ["FastAPI", "Telethon", "aiogram", "Railway", "Vercel"],
  },
  {
    title: "Chairali Badar Pharmacy",
    desc: "A self-contained local pharmacy demo site with medicine ordering and doctor booking flows, built to show what a small local business could offer online.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "This Portfolio",
    desc: "An earlier single-file build with Supabase-powered content, admin panel, and auth — the predecessor to this Next.js version.",
    stack: ["Supabase", "GoTrue", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <p className="section-label mb-4">04 — projects</p>
      <div className="space-y-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group rounded-lg border border-line bg-surface p-6 transition-colors hover:border-teal"
          >
            <h3 className="font-display text-xl font-bold">{p.title}</h3>
            <p className="mt-2 font-body text-muted">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="font-mono text-xs text-teal">
                  #{s.replace(/\s+/g, "")}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
