# runmystore.com

Marketing site for RunMyStore. Static [Astro](https://astro.build) site: no framework runtime, no CMS, hand-written CSS.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where things live

| What | Where |
| --- | --- |
| **All changeable copy** — offer terms, proof numbers, the six departments, FAQs, WhatsApp link | `src/data/site.ts` |
| Design tokens (colors, type, spacing), buttons, cards | `src/styles/global.css` |
| `<head>`, SEO tags, JSON-LD, header + footer | `src/layouts/Base.astro` |
| Pages | `src/pages/` — `index`, `services`, `wholesale`, `proof`, `trial`, `apply`, `404` |
| Logo (dark + white-lettered variants), OG image, favicon | `public/` |

Items marked `CONFIRM` in `src/data/site.ts` are defaults that need Adam's sign-off before launch.

## The apply form → Close

`/apply/` POSTs JSON to `PUBLIC_LEAD_ENDPOINT` (see `.env.example`). Point it at a Zapier / Make / serverless
hook that creates the lead in Close. Payload:

```json
{ "name", "email", "website", "phone", "category", "revenue", "channel", "need": ["store", "wholesale"], "bottleneck", "source" }
```

Until the endpoint is set, the form falls back to opening WhatsApp with the answers prefilled, so no lead is lost.
`/trial/` has a retainer builder that passes the chosen departments to the form as `/apply/?need=store,wholesale`.

## Proof numbers

Everything on `/proof/` and the homepage proof strip comes from the Fresh Bros Proof Vault ("RMS Brag Pack — LIVE",
Google Drive → Fresh Bros Proof Vault → 05_Ad-Ready Assets). The vault marks some homepage marketing claims as HOLD
("500K+ customers", "3,000 verified customers", Trustpilot) — do not put those on the site. When the vault is updated,
change `proof` in `src/data/site.ts` and its source notes together. Fresh Bros brand assets live in `public/fb/`
(palette: green `#143c18`, lime `#61b80e`; fonts Peckham Press / Instrument Sans).

## Privacy and Terms

`/privacy/` and `/terms/` read the entity name, contact email, address and governing state from
`src/data/legal.ts`. While `ready` is `false` they show a DRAFT banner, are `noindex`, are left out of the sitemap,
and the build prints a warning. To launch them: fill in `legal.ts`, have counsel review both pages, set
`ready: true`, and bump `updated`.

The privacy policy states facts about this site that must stay true. **Update the policy before you:**

- add analytics, pixels, session recording, chat widgets or any third-party script (it currently says there are none);
- switch to a hosted font service (it says fonts are self-hosted);
- start adding applicants to a marketing list (it says we don't);
- change how long applications are kept (`retentionMonths` in `legal.ts`).

## Working on it together

The repo is https://github.com/adam3302127/runmystore (private). Clone it, `npm install`, `npm run dev`.
Small copy fixes can go straight to `main`. Anything bigger goes on a branch and a pull request, so the other person
can look at the preview URL before it merges. Every push and PR runs a build check (`.github/workflows/build.yml`).

## Deploy

GitHub Pages, via `.github/workflows/deploy.yml`: every push to `main` builds and goes live at
https://adam3302127.github.io/runmystore/. Because that URL has a sub-path, the workflow runs `scripts/relativize.mjs`
after the build to make internal links relative. **When runmystore.com is attached as the custom domain** (repo
Settings → Pages → Custom domain, plus a CNAME at the registrar), delete that step — the site is then served from `/`.
Set `PUBLIC_LEAD_ENDPOINT` in the host's environment variables. The sitemap is generated at `/sitemap-index.xml`.

## Adding a blog

Create `src/content/` with an Astro content collection and a `src/pages/blog/[slug].astro` route. Reuse `Base.astro`
so posts inherit the SEO tags.

## Offer v2 — modules

The homepage sells three $500/month modules and a $1,250/month bundle (month to month, no setup fee, live in 14 days).
The brief is saved verbatim in `docs/OFFER_v2_PROMPT.md`. The previous offer (free 30-day build) still ships at
`/sprint`, unlinked from the nav and excluded from the sitemap; its sibling pages (services, wholesale, proof, apply)
are kept in `src/archive/` and not built.

**Homepage IA** (`src/pages/index.astro`, single page, mobile first): hero → who it's for → three module cards →
Run the Store bundle → how it works (Day 1 / Days 2–10 / Day 14 / every month) → what you get every month → FAQ (6)
→ final CTA → footer. Nav links are anchors: `#modules`, `#how`, `#faq`.

**Copy and prices** live in `src/data/site.ts`: `modules`, `bundle`, `guarantee`, `upperTier`, `howItWorks`, `faqs2`.

**Pricing component** — `src/components/PlanCard.astro`, used by the three modules and the bundle:

| Prop | Type | Notes |
| --- | --- | --- |
| `plan` | `Plan` | `{ id, name, price, cadence, description, fairUse, disclosure?, startUrl, recommended? }` |
| `cta` | `string` | Button label, default `Start` |
| `wide` | `boolean` | Horizontal layout for the bundle |

`fairUse` renders in small gray text; `disclosure` (Customer Service only) renders as a one-line note; `recommended`
adds the badge.

**URLs** — see `.env.example`. `PUBLIC_BOOKING_URL` (fallback: WhatsApp), `PUBLIC_START_URL_*` per plan (fallback:
mailto to `PUBLIC_CONTACT_EMAIL` with the plan in the subject), `PUBLIC_CONTACT_EMAIL` (fallback: hello@runmystore.com).

**Hard rules** from the brief that the code enforces by omission: no client names, case-study numbers, testimonials or
revenue guarantees anywhere public; the AI vendor is never named; the word "unlimited" does not appear; caps are
fair-use lines. The one disclosure line ("answered by an AI assistant trained on your business, with a human
escalation path") appears on the Customer Service card and in the FAQ.

**Palette** is locked in `src/styles/global.css`: charcoal `#1A1A1A`, teal `#0D7377`, gray `#5C5C5C`, white. Teal is
5.6:1 on white (fine for text) but only 3.1:1 on charcoal, so on dark sections teal is used for stripes and rails,
not body text.
