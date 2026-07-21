# HebZuR Portfolio — Next.js

Terminal-inspired portfolio, dark/light toggle ke saath. Static content — sab kuch components me likha hai, edit karke apna daal do.

## Local run karne ke liye

```bash
npm install
npm run dev
```

Browser me `http://localhost:3000` khol lo.

## Content edit kaha se karein

Har section apni file me hai — koi ek jagah dhundhne ki zarurat nahi:

- `components/Hero.tsx` — naam, tagline, terminal text
- `components/About.tsx` — about paragraph + "currently" list
- `components/Skills.tsx` — skill groups
- `components/Projects.tsx` — projects array
- `components/Blog.tsx` — blog post titles (abhi placeholder hai)
- `components/Testimonials.tsx` — testimonials array
- `components/Contact.tsx` — email + links

## Theme colors kaha hai

`app/globals.css` me `:root` (dark) aur `.light` class ke andar CSS variables hain — yaha se palette badal sakte ho.

## Vercel pe deploy

1. Is folder ko GitHub repo me push karo
2. Vercel pe "New Project" → repo import karo
3. Framework auto-detect ho jayega (Next.js) — deploy dabao

Koi env variable nahi chahiye kyunki content static hai.
