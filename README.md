# Construction Company Website (Next.js)

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Roboto + Outfit (bundled)

## Run it

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

Node.js 18.18+ (20+ recommended). Stock photos load from images.pexels.com, so the machine needs internet.

---

## ✏️ Everything is in ONE file: `site.config.ts`

You never need to touch the components or pages. Open `site.config.ts` in the project root and edit:

| Section | What it controls |
|---|---|
| **0. Quick setup** | Company name, short name, domain, founding year, country — reused everywhere (emails, titles, "years of experience", About story…) |
| **1. Stock photo library** | Named photos you can use anywhere (`stock.heroCrane`, …) |
| **2. Brand** | Tagline, description, **logo file**, **colours**, corner roundness |
| **3. Contact** | Address, phones, WhatsApp, emails, office hours, map link, company video; social links |
| **4. Credentials** | CIDA grade/registration, business reg., certifications list |
| **5. Menus** | Top menu, "Contact Us" button, footer links |
| **6. Home page** | Every heading, paragraph, button and photo on the home page: hero, about, **Why Choose Us** (4 headline figures + 6 proof points), **Who We Serve** (moving sector band), and section titles |
| **7. Shared blocks** | Yellow "Have a project in mind?" band, footer tagline and newsletter text |
| **8. Inner pages** | Hero title/text/photo for every page, plus About story, careers perks, sustainability/safety figures, equipment fleet, privacy policy |
| **9. Services** | 9 services — Building, Roads, Infrastructure, Piling, Water & Drainage, MEP, Renovation, Plant & Machinery, Design & Build (each gets its own page) |
| **10. Projects** | Portfolio: details, photo, gallery, challenge/solution, `featured: true` for the home page |
| **11. People** | Team members and testimonials |
| **12. Company facts** | Milestones, values, FAQs |
| **13. News** | Articles (title, date, photo, paragraphs) |
| **14. Careers** | Vacancies |
| **15. SEO** | Live domain and locale |
| **16. Small labels** | Every small word on buttons and headings (handy for translating the site) |

Save the file — with `npm run dev` running, the browser updates immediately.

### Common changes

**Rename the company** → edit `COMPANY`, `SHORT` and `DOMAIN` at the top.

**Use your logo** → copy it to `public/images/logo.svg` and set
```ts
logo: { src: "/images/logo.svg", srcLight: "/images/logo-white.svg", width: 150, height: 36 },
```

**Change colours** → `brand.colors.primary` (the yellow), `dark`, `background`, …

**Add a project** → copy one `{ … }` block in `projects`, give it a new `slug`, and change the text.
Put photos in `public/images/projects/` and use `photo: "/images/projects/my-project.jpg"`,
`gallery: ["/images/projects/my-project-2.jpg", …]`.

**Remove a page from the menu** → delete its line in `nav.main` / `nav.footer`.

**Line breaks in big headings** → put `\n` where the line should break, e.g. `"Building Tomorrow\nwith Vision"`.

### Photos — please read

The stand-in photos are free stock photos from Pexels (pexels.com/license).
Before going live, **replace project and team photos with your own** — a portfolio must show your real work and people.
If any photo is missing or fails to load, a drawn illustration is shown instead, so the layout never breaks.

---

## Forms

- **Contact form** posts to `app/api/contact/route.ts` (validates and logs). Add an email provider (Resend, SendGrid, nodemailer) there and keep keys in `.env.local`.
- **Newsletter** shows a confirmation only; connect it to Mailchimp, Brevo, etc. in `components/Newsletter.tsx`.

## Pages

`/` · `/about` · `/services` + `/services/[slug]` · `/projects` + `/projects/[slug]` · `/sustainability` · `/safety` · `/equipment` · `/news` + `/news/[slug]` · `/careers` · `/contact` · `/suppliers` · `/privacy` · `/terms` · `/cookies`

Legal and supplier page text lives in `site.config.ts` → `pages.terms`, `pages.cookies`, `pages.suppliers`, `pages.privacy`.
⚠️ The legal wording is a template — have it reviewed by your legal adviser before launch.

## Project structure

```
site.config.ts      ← EDIT THIS
public/images/      ← your logo and photos
app/                pages (read from the config)
components/         building blocks (read from the config)
data/               adapters that pass config to components — don't edit
lib/pexels.ts       stock photo URL helper
```

## Deploy

Vercel is easiest (connect the Git repo). Any Node host works.

## Before going live — replace the samples

These are marked with ⚠️ in `site.config.ts` and must be your real information:
- `home.whyUs.stats` and `home.whyUs.points` figures (years, projects, clients, workforce, safe man-hours, on-time %, repeat clients, engineers)
- `projects` — the sample projects
- `team`, `testimonials`, `news`, `milestones`
- CIDA grade/registration and certificates in `credentials` / `certifications`

## SEO, icons & share images (automatic)

Everything below is generated from `site.config.ts` — no image editing needed:

| What | Where |
|---|---|
| Page titles, descriptions, canonical links | every page |
| Share thumbnails (Facebook, WhatsApp, LinkedIn, X) | `/opengraph-image` + one per page, project, service and article |
| Favicons & app icons | `/favicon.ico`, `/icon/small`, `/icon/medium`, `/icon/large`, `/apple-icon`, `/maskable-icon` (brand colours) |
| Install / home-screen info | `/manifest.webmanifest` |
| Sitemap & robots | `/sitemap.xml`, `/robots.txt` |
| Structured data for Google | Company (GeneralContractor), Website, FAQ, Service, NewsArticle, Breadcrumbs |

**After launch:**
1. Set `seo.siteUrl` to your real domain.
2. Add the site to Google Search Console and Bing Webmaster Tools, paste their codes into `seo.verification`, then submit `https://your-domain/sitemap.xml`.
3. Create a Google Business Profile with the same name, address and phone as `contact`.
4. Using your own logo? Replace `app/favicon.ico` and set `brand.logo.src`; the generated icons use your brand colours automatically.
