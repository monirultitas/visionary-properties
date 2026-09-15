# Visionary Properties & Development

A modern, bilingual (বাংলা / English) real-estate developer website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Flagship project: **Alamnagar Housing** — with a data-driven portfolio ready for additional projects.

## ✨ Features

- **Bilingual** — Bengali (default) / English toggle, persisted in the browser.
- **Data-driven projects** — add a new project by editing one array (`lib/projects.js`).
- **Animated & responsive** — scroll reveals, animated counters, scroll progress bar, mobile menu.
- **Rich sections** — hero, projects portfolio, project overview, architecture & building design, floor plan, location + map, why-invest, gallery lightbox, lead-capture contact form.
- **SEO-ready** — metadata, Open Graph, semantic markup.

## 🚀 Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

Build for production:

```bash
npm run build
npm run start
```

## ✏️ Customize

| What | Where |
| --- | --- |
| Company name, phone, email, address | `lib/content.js` → `company` |
| All page text (BN & EN) | `lib/content.js` → `content` |
| Projects & gallery images | `lib/projects.js` |
| Colors / fonts | `tailwind.config.js` |
| Contact form leads | `components/Contact.jsx` → set `FORMSPREE_ENDPOINT` |

> **Contact form:** create a free form at [formspree.io](https://formspree.io) and paste the endpoint into `FORMSPREE_ENDPOINT` in `components/Contact.jsx` to receive leads by email.

## 📦 Deploy

### GitHub → Vercel

1. Push this repo to GitHub (see below).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel auto-detects Next.js — just click **Deploy**.
4. Add your custom domain in **Project → Settings → Domains**.

```bash
git init
git add .
git commit -m "Initial commit: Visionary Properties website"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

---

Built with Next.js · Tailwind CSS · Framer Motion.
