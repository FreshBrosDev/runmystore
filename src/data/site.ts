// Single source of truth for copy that changes: contact details, offer terms,
// proof numbers, the stack. Edit here, not in the pages.

export const site = {
  name: 'RunMyStore',
  short: 'RMS',
  url: 'https://runmystore.com',
  tagline: 'You own the brand. We run the store.',
  description:
    'Three systems that run your store while you run your brand: customer service, retention and lead generation. $500 a month each, month to month, live in 14 days.',
  whatsapp: 'https://wa.me/18105134257',
  // Where the application form POSTs JSON (a Zapier / Make / serverless hook that
  // creates the lead in Close). Set PUBLIC_LEAD_ENDPOINT in .env. When it is empty
  // the form falls back to opening WhatsApp with the answers prefilled.
  leadEndpoint: import.meta.env.PUBLIC_LEAD_ENDPOINT ?? '',
  liveDemo: { label: 'menu.freshbros.com', href: 'https://menu.freshbros.com' },
  cohort: 'We take on two brands per quarter.',
};

export const nav = [
  { label: 'Modules', href: '/#modules' },
  { label: 'How it works', href: '/#how' },
  { label: 'FAQ', href: '/#faq' },
];

// ---------------------------------------------------------------------------
// Offer v3 — two self-serve modules + Run the Store Pro (revenue share) + custom builds.
// See README "Offer v3 — modules + Pro". URLs come from env; every one has a working fallback.
// ---------------------------------------------------------------------------
export const contactEmail: string = import.meta.env.PUBLIC_CONTACT_EMAIL || 'hello@runmystore.com';
export const bookingUrl: string = import.meta.env.PUBLIC_BOOKING_URL || site.whatsapp;
const startUrl = (env: string | undefined, name: string) =>
  env || `mailto:${contactEmail}?subject=${encodeURIComponent(`Start: ${name}`)}`;

export type Plan = {
  id: string;
  name: string;
  /** Fixed monthly price ("$500") or, for the scales variant, the percentage ("2.5%"). */
  price: string;
  cadence: string;
  description: string;
  fairUse: string;
  disclosure?: string;
  startUrl: string;
  cta?: string;
  recommended?: boolean;
  /** "scales": pricing is a share of revenue with a floor, not a fixed fee. */
  variant?: 'fixed' | 'scales';
  floor?: string;
  threshold?: string;
  includes?: string[];
};

// Fair use for the self-serve tier. Caps are soft: overage, never a cutoff.
export const overage = 'Go over and we keep answering. Overage bills at $1.50 per conversation. Nothing ever shuts off mid-month.';

export const modules: Plan[] = [
  {
    id: 'customer-service',
    name: 'Customer Service',
    price: '$500',
    cadence: '/mo',
    description:
      'A dedicated operator and an assistant trained on your products, policies, and voice answer your customers’ email around the clock, in your name. Up to 300 conversations a month, where a conversation is one customer thread however many replies it takes.',
    fairUse: overage,
    disclosure:
      'Your customers are answered by an AI assistant trained on your business, with a human operator on your account and an escalation path.',
    startUrl: startUrl(import.meta.env.PUBLIC_START_URL_CUSTOMER_SERVICE, 'Customer Service'),
  },
  {
    id: 'run-the-store',
    name: 'Run the Store',
    price: '$900',
    cadence: '/mo',
    description:
      'Customer Service plus Retention: reorder reminders, win-backs based on when someone last ordered, and follow-ups after a purchase, sent from you to your list. Up to 500 conversations and 5,000 retention emails a month.',
    fairUse: overage,
    startUrl: startUrl(import.meta.env.PUBLIC_START_URL_RUN_THE_STORE, 'Run the Store'),
    recommended: true,
  },
];

export const pro: Plan = {
  id: 'run-the-store-pro',
  name: 'Run the Store Pro',
  variant: 'scales',
  price: '2.5%',
  cadence: 'of monthly store revenue',
  floor: '$2,500 a month minimum',
  threshold: 'For stores doing $100k a month and up',
  description:
    'Doing over $100k a month? We run the whole store. Everything the self-serve plans do, plus the wholesale side, the back office, the search and content that bring buyers in, and a dedicated operator who owns the result. One source of truth, under your brand.',
  // Modeled on the full engagement scope: storefront + checkout, wholesale menu, CRM/inventory/QuickBooks,
  // assistants on every system, SEO and AI visibility, retention pipes, affiliate shell, operator. Lead sourcing deliberately left out: too variable per niche.
  includes: [
    'Storefront and a checkout path that works for your category',
    'Wholesale menu and ordering at menu.yourbrand.com: live stock, tier pricing, reps quote from it',
    'CRM, inventory and QuickBooks synced, with one pricing sheet as the source of truth',
    'Customer service and retention, email and SMS, in your voice',
    'Assistants trained on your menu, inventory, pricing and orders, for your team and your customers',
    'SEO and AI-search visibility: authority content and links that bring buyers in',
    'Affiliate program shell and tracking',
    'Fulfillment path, packaging rules and carrier setup for your category',
    'A dedicated operator, a weekly call if you want one, and your numbers in one email every week',
  ],
  fairUse: 'Requires read access to your store and processor statements, so the number is real on both sides. We don’t hold your inventory, fund ad spend, take on your regulatory liability, or promise a revenue number.',
  startUrl: bookingUrl,
  cta: 'Book a call',
};

export const customBuild = {
  line: 'Starting from scratch? We build the stack first, then run it.',
  cta: 'Book a call',
};

export const guarantee = 'No setup fee and no contract. Cancel any month and the assistant switches off, but your customers and your list stay yours.';

// Restricted-category positioning. Named here once; used in Who we serve and the FAQ. Never in client terms.
export const categories = 'hemp-derived products, peptides, supplements and nootropics, nicotine alternatives, adult wellness, and anything that gets rejected by Shopify Payments, Stripe, Amazon, or mainstream support tools';

// Who we serve: one tile per category. `setup` is what we set up, never a claim about the product itself.
export const categoryTiles = [
  { name: 'Hemp-derived products', setup: 'Processors that take it, carriers that ship it, and age and state rules built into checkout.' },
  { name: 'Peptides', setup: 'Support that answers what it can answer and knows exactly where to stop.' },
  { name: 'Supplements and nootropics', setup: 'Reorder reminders and follow-ups for products people buy every month.' },
  { name: 'Nicotine alternatives', setup: 'Age gates, carrier rules and shipping limits that actually hold.' },
  { name: 'Adult wellness', setup: 'Discreet shipping and customer service that stays professional.' },
  { name: 'Rejected by Shopify Payments, Stripe or Amazon', setup: 'A checkout and support stack that doesn’t depend on any of them.' },
];

export const pains = [
  'Turned away by the mainstream tools.',
  'Answering every customer yourself.',
  'Repeat buyers slipping away.',
];

export const howItWorks = [
  { when: 'Day 1', what: 'You pick a plan and pay for the first month.' },
  { when: 'Day 2', what: 'A 20-minute onboarding call, or a voice note if you’d rather, with your operator.' },
  { when: 'Days 3 to 10', what: 'We connect your store and inbox and train the assistant on your policies and the way you write.' },
  { when: 'Day 14', what: 'It goes live, and from then on you get a short daily summary of what it did.' },
  { when: 'Every month', what: 'You keep it or you cancel. There’s no contract and no setup fee.' },
];

export const faqs2 = [
  {
    q: 'Is this AI?',
    a: 'Yes. Your customers are answered by an AI assistant trained on your business, with a human operator on your account and an escalation path. The assistant is trained on your products, policies and voice. Anything it can’t answer, or anything that needs a real decision, goes to your operator and then to you with the full thread.',
  },
  {
    q: 'Who’s my operator?',
    a: 'A named person on our team who is on your account from day one. They run your onboarding call, train the assistant on your business, watch the conversations it handles, and are the human your customers reach when something needs one. You’ll know who they are and how to reach them.',
  },
  {
    q: 'What happens if I go over my conversations?',
    a: 'We keep answering. Customer Service includes 300 conversations a month and Run the Store includes 500, where a conversation is one customer thread however many replies it takes. Past that, each extra conversation bills at $1.50 on your next invoice. Nothing ever shuts off mid-month, and if you’re regularly over we’ll tell you so you can decide whether a bigger plan makes sense.',
  },
  {
    q: 'Who owns my data and my list?',
    a: 'You do. Your store, your inbox, your customer list and every conversation stay in accounts you own. We work through access you grant and can take back whenever you like. If you cancel, we remove our access within 24 hours and keep no copies, and nothing of yours is ever used for another customer.',
  },
  {
    q: 'What if the assistant can’t answer?',
    a: 'It says so and hands the conversation to your operator. The customer is told a person will follow up, your operator either answers it or brings it to you with the thread, and once there’s an answer the assistant knows what to say next time.',
  },
  {
    q: 'Can I cancel?',
    a: 'Any month, from your account, with no contract and no setup fee. The assistant and the automations we run stop at the end of the month you’ve paid for, and we remove our access. Everything that’s yours stays yours, including your customers, your list, every conversation, and anything already sent or published in your own tools.',
  },
  {
    q: 'My category keeps getting rejected. Can you actually work with it?',
    a: `Almost certainly. We work with ${categories}. We’ve run a eight-figure store in this space, so we know the processors that work, the carriers that ship, the compliance that holds, and how to answer a customer without creating a legal problem. We can’t promise any platform will approve you, and we won’t pretend to. What we do is set up what works for your category.`,
  },
];

export const social = {
  youtube: (import.meta.env.PUBLIC_YOUTUBE_URL as string | undefined) || 'https://www.youtube.com/@LaunchRMS',
  instagram: (import.meta.env.PUBLIC_INSTAGRAM_URL as string | undefined) || 'https://www.instagram.com/LaunchRMS',
  handle: '@LaunchRMS',
};

// The offer. Terms marked CONFIRM are sensible defaults Adam should sign off on.
export const offer = {
  name: 'Free 30-day build',
  cta: 'Start your free 30-day build',
  ctaShort: 'Start free build',
  days: 30,
  price: '$0',
  fineprint: 'No card. No contract. You only cover your own software and ad costs.',
};

// Proof numbers. Every figure comes from the Fresh Bros Proof Vault "RMS Brag Pack — LIVE 2026-09-19"
// (Woo Analytics exports, Klaviyo Reviews API, ShipStation export, Organic Growth Report). Numbers the
// vault marks HOLD (homepage "500K+ customers", "3,000 verified customers", Trustpilot) are deliberately
// not used. If you change a number here, change its source note too.
export const proof = {
  brand: 'Fresh Bros',
  href: 'https://freshbros.com',
  tagline: 'Stay fresh, stay lifted',
  window: 'Mar 9 – Sep 9, 2026',
  headline: [
    { value: '$908k', label: 'net sales in six months', note: '4,999 orders · Mar 9 – Sep 9, 2026' },
    { value: '+56%', label: 'monthly revenue, Mar → Jul', note: '$110.7k → $172.5k · orders +62%' },
    { value: '35.6%', label: 'of buyers order again', note: '2,565 of 7,204 customers' },
    { value: '4.75★', label: 'average across 3,089 reviews', note: '2,792 verified · Klaviyo' },
  ],
  // Monthly net sales, Mar 9 – Sep 9 2026 (approved monthly rollup). Sep is partial (through Sep 9).
  monthly: [
    { m: 'Mar', sales: 110705, orders: 568 },
    { m: 'Apr', sales: 163012, orders: 932 },
    { m: 'May', sales: 112401, orders: 693 },
    { m: 'Jun', sales: 144864, orders: 746 },
    { m: 'Jul', sales: 172485, orders: 921 },
    { m: 'Aug', sales: 143388, orders: 813 },
    { m: 'Sep*', sales: 61543, orders: 326 },
  ],
  more: [
    { value: '$181.72', label: 'average order value', note: 'net sales ÷ orders, same window' },
    { value: '5,110', label: 'parcels shipped', note: 'ShipStation live labels, same window' },
    { value: '3.6%', label: 'site conversion rate', note: 'Q4 2025 · $299k · 1,873 orders' },
    { value: '+25%', label: 'search authority in 8 months', note: '34.3 → 43.0 · Organic Growth Report' },
  ],
  reviews: [
    {
      title: 'Fresh Bros never disappoints',
      quote: 'Fresh Bros has become my go-to for quality flower. The products are always fresh, smooth, and reliable, and the whole experience — from browsing to delivery — is seamless and premium.',
      who: 'Jason Miller · verified buyer',
    },
    {
      title: 'Fresh, trusted, and always on point',
      quote: 'Fresh Bros always delivers top-tier quality. The freshness, flavor, and overall experience make it a brand I trust and keep coming back to.',
      who: 'Ryan Cooper · customer',
    },
    {
      title: 'A brand I can rely on',
      quote: 'Fresh Bros has truly set a high standard when it comes to quality and reliability. Every order feels fresh, well-crafted, and exactly what I expect.',
      who: 'Verified buyer',
    },
  ],
};

export type Department = {
  id: string;
  num: string;
  name: string;
  line: string;
  summary: string;
  installs: string[];
  changes: string;
};

export const departments: Department[] = [
  {
    id: 'store',
    num: '01',
    name: 'Storefront & checkout',
    line: 'Turns the traffic you have into orders.',
    summary:
      'A fast store on Shopify or WooCommerce, structured for the catalog you actually have, with a checkout path that survives in a category processors get nervous about.',
    installs: [
      'Store build or rebuild on Shopify / WooCommerce',
      'Product page templates, COAs and lab results where they apply',
      'Checkout and processor path beyond wire and Zelle',
      'Age gates, shipping rules and state-by-state restrictions',
    ],
    changes: 'A site your team can maintain, and a checkout that completes.',
  },
  {
    id: 'traffic',
    num: '02',
    name: 'Traffic & authority',
    line: 'Demand that outlives an ad account.',
    summary:
      'When Meta and Google won’t run your ads, search is the channel. We do the research, the blogging, the outreach and the link building — the same playbook that drives freshbros.com.',
    installs: [
      'Keyword and topic map for your category',
      'Authority blog content, written and published for you',
      'Outreach and link building',
      'AI-search visibility — showing up in ChatGPT, Perplexity and Google AI answers',
    ],
    changes: 'You rank for what people search, not only for your own name.',
  },
  {
    id: 'retention',
    num: '03',
    name: 'Email & SMS list',
    line: 'Sells again to the customers you already paid for.',
    summary:
      'The list is the one channel nobody can ban. We build the flows first, then grow the list into them.',
    installs: [
      'Welcome, abandoned cart, post-purchase and win-back flows',
      'Menu, pricing and restock updates to wholesale buyers',
      'List growth: capture, offers and segmentation',
      'Deliverability set up properly from day one',
    ],
    changes: 'Email becomes a real share of revenue instead of a dormant list.',
  },
  {
    id: 'wholesale',
    num: '04',
    name: 'Wholesale pipeline',
    line: 'From “do you sell bulk?” to a repeat account.',
    summary:
      'A wholesale form that qualifies the buyer, a Close CRM pipeline your reps actually work, and a custom ordering menu at menu.yourbrand.com. Always a custom build.',
    installs: [
      'Wholesale application form and lead routing',
      'Close CRM pipeline, sequences and follow-up tasks',
      'Custom menu.yourbrand.com with live stock and tier pricing',
      'Quotes, invoices and reorders in one place',
    ],
    changes: 'No wholesale lead lives in a text thread again.',
  },
  {
    id: 'fulfillment',
    num: '05',
    name: 'Fulfillment',
    line: 'We hold it, pack it and ship it.',
    summary:
      'Small-scale fulfillment for products the big 3PLs turn away. You fund the inventory; we store it, pick, pack and ship it, with tracking tied back to the order.',
    installs: [
      'Storage, pick, pack and same-day dispatch',
      'Compliant packaging, age and signature requirements',
      'Inventory and order tracking synced to your store',
      'Wholesale and retail orders out of the same stock',
    ],
    changes: 'Orders go out the door without the founder packing boxes.',
  },
  {
    id: 'ops',
    num: '06',
    name: 'Reporting & AI assistants',
    line: 'One source of truth you can ask questions.',
    summary:
      'QuickBooks, inventory, pricing and sales wired together, with assistants trained on your own data so anyone on the team can ask about stock, price or order status.',
    installs: [
      'QuickBooks and inventory sync',
      'One pricing sheet as the source of truth',
      'Attribution you can trust, reported monthly',
      'Knowledge-trained assistants on your menu, inventory and CRM',
    ],
    changes: 'You know what worked, and what to do next month.',
  },
];

export const buildWeeks = [
  { week: 'Week 1', title: 'Storefront & checkout', detail: 'Access by invite, store structure, checkout path.' },
  { week: 'Week 2', title: 'Wholesale form, Close CRM, menu.', detail: 'Pipeline live, menu.yourbrand.com taking orders.' },
  { week: 'Week 3', title: 'Email flows & SEO foundation', detail: 'Core flows on, topic map and first content shipped.' },
  { week: 'Week 4', title: 'Fulfillment & reporting', detail: 'Stock synced, orders shipping, numbers in one place.' },
];

export const notThis = [
  'Fund ad spend or inventory',
  'Act as merchant of record',
  'Take on your regulatory liability',
  'Bill hourly or do spec work',
  'Underwrite revenue targets',
  'Take more than two brands a quarter',
];

export const faqs = [
  {
    q: 'What’s the catch with the free 30 days?',
    a: 'There isn’t a hidden one. We would rather show you a working stack than pitch you a deck. For 30 days our work costs you nothing. You cover your own hard costs — software subscriptions, domains, any ad spend, your inventory. At the end you either keep us on a monthly retainer or you don’t.',
  },
  {
    q: 'What happens on day 31?',
    a: 'We sit down with what’s been built and what it’s doing, and agree a monthly retainer for the parts you want us to keep running. Need wholesale and email but not fulfillment? Then that’s what you pay for. No retainer, no hard feelings.',
  },
  {
    q: 'If we don’t continue, what do we keep?',
    a: 'Everything in your own accounts stays yours — your domain, store, content, customer list and data. Systems running on our infrastructure are handed over when a retainer starts, or wound down cleanly if it doesn’t.',
  },
  {
    q: 'Why would you work for free?',
    a: 'Because we’re selective and the work speaks for itself. We only take two brands a quarter, and only brands with product that already sells. Most who see the stack running don’t want to go back.',
  },
  {
    q: 'Can you work in a regulated or high-risk category?',
    a: 'It’s where we’re strongest. We built a eight-figure operation in hemp under processor instability, ad bans and state-by-state shipping rules. If Amazon won’t list it and Meta won’t advertise it, you’re our kind of brand.',
  },
  {
    q: 'Do we have to leave our current platform?',
    a: 'Usually not. We work with Shopify and WooCommerce, and most of what we install layers onto what you already run. If a move is genuinely worth it, we show you the math first.',
  },
  {
    q: 'What do you need from us?',
    a: 'Product that already sells, capital to keep it in stock, working (or fixable) payment processing, and one person who can make decisions. Access is by invite — we never take your passwords — plus about 45 minutes every two weeks.',
  },
];
