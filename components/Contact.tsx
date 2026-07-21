export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <p className="section-label mb-4">07 — contact</p>
      <h2 className="font-display text-3xl font-bold sm:text-4xl">
        Have something to build?
      </h2>
      <p className="mt-3 max-w-md font-body text-muted">
        Open to automation projects, web builds, and conversations about
        overseas work opportunities. Reach out — I reply quickly.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
        <a
          href="mailto:hello@hebzurking.dev"
          className="rounded-md bg-teal px-5 py-2.5 font-medium text-bg transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          hello@hebzurking.dev
        </a>
        <a
          href="https://hebzurking.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-line px-5 py-2.5 text-text transition-colors hover:border-teal hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          hebzurking.vercel.app
        </a>
      </div>

      <footer className="mt-24 border-t border-line pt-6 font-mono text-xs text-muted">
        © {new Date().getFullYear()} HebZuR KhaNdaKaR — built with Next.js
      </footer>
    </section>
  );
}
