const testimonials = [
  {
    quote:
      "Delivered a working bot faster than I expected, and actually explained how it worked instead of leaving me guessing.",
    name: "Client, Telegram automation project",
  },
  {
    quote:
      "The pharmacy site demo looked and felt like a real product from day one — clean, fast, and easy to navigate.",
    name: "Local business inquiry",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-5xl px-6 py-16">
      <p className="section-label mb-4">06 — testimonials</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {testimonials.map((t) => (
          <blockquote
            key={t.name}
            className="rounded-lg border border-line bg-surface p-6"
          >
            <p className="font-body italic text-text">&ldquo;{t.quote}&rdquo;</p>
            <footer className="mt-4 font-mono text-xs text-muted">
              — {t.name}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
