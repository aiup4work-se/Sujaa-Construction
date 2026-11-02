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
| **6. Home page** | Every heading, paragraph, button and photo on the home page, the hero stats and badge text |
| **7. Shared blocks** | Yellow "Have a project in mind?" band, footer tagline and newsletter text |
| **8. Inner pages** | Hero title/text/photo for every page, plus About story, careers perks, sustainability/safety figures, equipment fleet, privacy policy |
| **9. Services** | All services (title, short name, details, photo, which project sectors relate) |
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

`/` · `/about` · `/services` + `/services/[slug]` · `/projects` + `/projects/[slug]` · `/sustainability` · `/safety` · `/equipment` · `/news` + `/news/[slug]` · `/careers` · `/contact` · `/privacy`

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
