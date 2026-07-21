export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
      <p className="section-label mb-4">01 — whoami</p>
      <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
        HebZuR KhaNdaKaR
      </h1>
      <p className="mt-4 max-w-xl font-body text-lg text-muted">
        Self-taught developer who ships automation tools, bots, and websites —
        by pairing relentless curiosity with AI as a build partner. Nursing
        background. Builder by night.
      </p>

      <div className="mt-10 overflow-hidden rounded-lg border border-line bg-surface shadow-sm">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 font-mono text-xs text-muted">hebzur — zsh</span>
        </div>
        <div className="space-y-2 p-5 font-mono text-sm leading-relaxed sm:text-base">
          <p>
            <span className="text-teal">hebzur@dev</span>
            <span className="text-muted">:~$</span> whoami
          </p>
          <p className="type-line text-violet">
            self-taught builder, ex-nursing, now shipping code
          </p>
          <p>
            <span className="text-teal">hebzur@dev</span>
            <span className="text-muted">:~$</span> ls stack/
          </p>
          <p className="text-muted">
            fastapi · telethon · next.js · supabase · railway · vercel
          </p>
          <p>
            <span className="text-teal">hebzur@dev</span>
            <span className="text-muted">:~$</span>{" "}
            <span className="caret text-teal">▍</span>
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-md bg-teal px-5 py-2.5 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          see the work
        </a>
        <a
          href="#contact"
          className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          get in touch
        </a>
      </div>
    </section>
  );
}
