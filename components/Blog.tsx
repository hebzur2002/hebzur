const posts = [
  {
    title: "Fixing a Telethon worker that never started",
    date: "post-login race condition",
  },
  {
    title: "Building an OTP login flow with aiogram v3",
    date: "FSM state machines, explained simply",
  },
  {
    title: "Why re-uploading media beats forwarding it",
    date: "avoiding the 'Forwarded' tag",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-5xl px-6 py-16">
      <p className="section-label mb-4">05 — blog</p>
      <p className="mb-6 max-w-lg font-body text-muted">
        Notes from building in public — the bugs, fixes, and decisions behind
        the projects above.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {posts.map((p) => (
          <div
            key={p.title}
            className="rounded-lg border border-line bg-surface p-5 transition-colors hover:border-violet"
          >
            <p className="font-mono text-xs text-violet">{p.date}</p>
            <h3 className="mt-2 font-display text-base font-bold leading-snug">
              {p.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
