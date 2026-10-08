Here's the paste block. It supersedes the v2 modules prompt; the security/terms append from earlier still stands and is referenced, not repeated.
RunMyStore — Website Prompt v3 (two modules + revenue-share tier + restricted-category positioning)
You are updating the runmystore.com marketing site. Inspect the repo first, keep the existing framework, components, and routing. Do not rewrite the stack. The pricing card component and the /security and /terms work from the previous prompt stay. Append to README, don't replace it. Do not ask questions before starting; make the sensible call, note it, proceed.
Brand (locked): RunMyStore / RMS. Tagline: You own the brand. We run the store. Palette: charcoal #1A1A1A, teal #0D7377, gray #5C5C5C, white. Logo: italic charcoal RMS with teal speed trails. Voice: operator — install, run, operate. Never: agency, full-service, we do it all, growth hacking, disrupt, revolutionize. No emojis.
Positioning (new, locked): RMS runs the store for brands the big platforms won't touch. Restricted and high-risk categories: hemp-derived products, peptides, supplements and nootropics, nicotine alternatives, adult wellness, and anything that gets rejected by Shopify Payments, Stripe, Amazon, or mainstream support tools. We've run a seven-figure store in this space. We know the processors that work, the carriers that ship, the compliance that holds, and how to answer a customer without creating a legal problem. Say this plainly once in the hero subhead and once in a dedicated "Who we serve" section. Do not name clients, products, or the founder's brand. Do not make medical, legal, or efficacy claims about any category. Do not say "we can get you approved" by any processor or platform. Say "we set up what works for your category."
Offer (locked, replaces the three-module layout):
Self-serve tier — month to month, no setup fee, cancel anytime, live in 14 days, dedicated operator included.

1. Customer Service — $500/mo. A dedicated operator and an assistant trained on your products, policies, and voice answer your customers' email 24/7, in your name. Up to 300 conversations a month. A conversation is one customer thread, however many replies.
2. Run the Store — $900/mo. Label: Recommended. Customer Service plus Retention: reorder reminders, win-backs by last-order date, post-purchase follow-ups, sent from you to your list. Up to 500 conversations and 5,000 retention emails a month.
Fair-use line under each, small gray: Go over and we keep answering. Overage bills at $1.50 per conversation. Nothing ever shuts off mid-month.

Revenue-share tier — the main product.
3. Run the Store Pro — pricing scales with your revenue. 2.5% of monthly store revenue, $2,500 floor. For stores doing $100k a month and up. We run the whole commerce surface: customer service, retention, wholesale menu and ordering, orders and inventory into your CRM, processor and carrier setup for your category, a dedicated operator, weekly numbers in one email. CTA: Book a call. Requires read access to your store and processor statements so the number is real on both sides.
Custom builds — for brands with nothing built yet. One sentence: "Starting from scratch? We build the stack first, then run it." CTA: Book a call. Do not publish the build pricing.
Remove Lead Engine entirely. Do not leave a placeholder or "coming soon."
Hard rules: No fake testimonials, no case-study numbers, no revenue guarantees, no client names, no founder brand name on the public site. Never name the AI model or vendor; say "an assistant trained on your business." Honest AI disclosure in Customer Service and the FAQ: customers are answered by an AI assistant trained on your business, with a human operator on your account and an escalation path. No "unlimited." Caps are fair-use lines with stated overage, not hard cutoffs.
Homepage IA (single page, mobile first):

1. Hero. H1: tagline. Subhead: We run customer service, retention, and the back office for brands in categories the big platforms won't serve. From $500 a month. Live in 14 days. Primary CTA: Start with one. Secondary: Book a call.
2. Who we serve. Three short lines: the categories (list above), the pain (rejected by mainstream tools, answering customers yourself, losing repeat buyers), who it's not for (pre-revenue, ads-only, looking for guarantees).
3. Two self-serve cards side by side, Run the Store marked Recommended. Price, two-sentence description, fair-use line, Start button.
4. Run the Store Pro — wide card. Headline: Doing over $100k a month? We run the whole store. 2.5% of revenue. One paragraph listing what's included. Book a call.
5. How it works. Day 1 pick and pay. Day 2 a 20-minute onboarding call or voice note with your operator. Days 3–10 we connect store and inbox and train the assistant on your policies. Day 14 live. Monthly keep or cancel.
6. What you get every month. One paragraph: daily summary of conversations handled, customers reached, anything needing you. Weekly numbers on Pro. No dashboard promises.
7. FAQ, max 7: Is this AI? Who's my operator? What happens if I go over my conversations? Who owns my data and list? What if the assistant can't answer? Can I cancel? My category keeps getting rejected — can you actually work with it?
8. Final CTA: Start with one. Or book a call.
9. Footer: RunMyStore, contact email, security, privacy, terms.

Build tasks:

1. Inspect repo and summarize state.
2. Rebuild homepage to this IA with the copy above. Real copy, no lorem.
3. Pricing card component: support a "scales with revenue" variant (percentage + floor instead of fixed price).
4. Remove Lead Engine card and any references. Keep /sprint parked and unlinked.
5. Add the category list and the overage policy to the FAQ answers.
6. Env vars: booking URL, two checkout URLs (Customer Service, Run the Store). Wire CTAs with fallbacks.
7. README section "Offer v3 — modules + Pro" documenting the IA, pricing variants, and the restricted-category positioning rule.
8. Check 375px layout, teal contrast, real buttons, no horizontal scroll.

Report back: files changed, preview path, max five open decisions.
