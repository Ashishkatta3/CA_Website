# MSS Advisory Services — website

Website for **MSS Advisory Services**, Chartered Accountants · Business Advisory, Guntur, Andhra Pradesh.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS 4.

> **Note for developers and AI agents:** this Next.js version has breaking changes from older releases. Read the relevant guide in `node_modules/next/dist/docs/` before writing Next.js code (see `AGENTS.md`).

## Getting started

Requires Node.js 20 or later.

```bash
npm install
npm run dev          # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run check:calendar` | Validate `src/content/calendar-updates.json` (official sources only) |
| `npx tsc --noEmit` | Type-check |

## Pages

| Route | Page |
|---|---|
| `/` | Home: services, industries, upcoming due dates |
| `/about` | Firm profile, Managing Director, leadership team |
| `/services`, `/services/[slug]` | Income Tax, GST, TDS, Project Reports & Loan Advisory (`advisory`), Registrations, Accounting & Statutory Compliance, Audit |
| `/industries` | Industries served |
| `/resources` | Resource hub |
| `/resources/calculators` | Tax calculators |
| `/resources/important-dates` | Compliance calendar (GST, TDS, Income Tax, ROC) |
| `/resources/knowledge` | Articles |
| `/careers` | Careers |
| `/contact` | Office details and enquiry form |
| `/legal/[doc]` | Disclaimer, privacy, terms |

## Where to edit content

Text and data live in `src/content/`, separate from the page code:

| File | Contents |
|---|---|
| `site.ts` | Firm name, address, phone, email, office hours, navigation |
| `about.ts` | Managing Director and leadership team |
| `services.ts` | Service pages (slug, summary, details) |
| `industries.ts` | Industries |
| `articles.ts` | Knowledge articles |
| `tax-config.ts` | Tax slabs and rates used by the calculators — update when the law changes |
| `important-dates.ts` | Rules for recurring statutory due dates |
| `calendar-updates.json` | Official extensions and one-off deadlines |

Team photos are in `public/team/` (JPG, 640×800). Logos are in `public/brand/`.

## Compliance calendar

The Important Dates page and the home-page "upcoming dates" box show the next 6 months of due dates.

- **Recurring dates** (TDS on the 7th, GSTR-1 on the 11th, advance tax, ITR, ROC filings, …) are generated from rules in `src/content/important-dates.ts`, so the calendar never runs out.
- **Extensions and one-off deadlines** go in `src/content/calendar-updates.json`. Each entry must cite an official `.gov.in` / `.nic.in` document, and `npm run check:calendar` rejects anything else.
- `lastChecked` in that file sets the start of the 6-month window.

The update procedure is in [`docs/calendar-updater.md`](docs/calendar-updater.md). It is written for a daily scheduled agent, but no schedule is set up yet, so for now someone has to follow it by hand.

When a due date changes permanently (for example, by statute), edit the rule in `important-dates.ts` rather than adding an override.

## Before going live

- [ ] **Placeholders in `src/content/site.ts`:** replace the ICAI Firm Registration Number (FRN) and the phone number.
- [ ] **Enquiry form:** submissions are only written to the server log (`src/app/contact/actions.ts`). Connect it to email (for example Resend or SES) or a CRM.
- [ ] **Calculator rates:** check `src/content/tax-config.ts` against the current year.
- [ ] Publish only credentials the firm actually holds, per ICAI guidelines.

## Deployment

The site deploys to Vercel. `vercel.json` sets the framework to Next.js. Without that setting, a Vercel project that was first created for a static site serves every page as a 404.

## Repositories

- Main: https://github.com/Younus10/CA_website
- Deployed copy: https://github.com/Ashishkatta3/CA_Website → https://ca-website-itap.vercel.app
