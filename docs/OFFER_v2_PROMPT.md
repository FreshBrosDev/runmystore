Here it is with the save instruction moved to the very end as its own closing step:
You are rebuilding the runmystore.com marketing site around a new productized offer. Inspect the repo first and keep the existing framework, components, and routing. Do not rewrite the stack. Append to README, don't replace it.
Brand (locked)
Name: RunMyStore, short form RMS. Tagline: You own the brand. We run the store. Palette: charcoal #1A1A1A, teal #0D7377, gray #5C5C5C, white. Logo: italic charcoal RMS with teal speed trails. Voice: operator. We install, we run, we operate. Never say agency, full-service, we do it all, growth hacking, disrupt, revolutionize. No emojis. Plain English a store owner reads on a phone in 20 seconds.
Offer (locked, replaces the 14-day sprint on the homepage)
Three modules, $500/month each, month to month, no setup fee, cancel anytime, live in 14 days.

1. Customer Service — $500/mo. An assistant trained on your products, policies, and voice answers your customers' email and chat 24/7, in your name. Built for stores handling up to about 300 customer conversations a month.
2. Retention — $500/mo. Your customers hear from you before they drift. Reorder reminders, win-backs by last-order date, post-purchase follow-ups. Runs on your list, in your voice.
3. Lead Engine — $500/mo. We find and qualify new buyers in your category and hand them to you ready to contact. Up to 150 qualified leads a month.

Bundle: Run the Store — $1,250/mo. All three working together: new buyers in, every one answered, every one brought back. Label it "Recommended."
Guarantee line: No setup fee. Month to month. If it isn't producing in 30 days, cancel and keep what we built.
Upper tier: Doing more than $15k a month? You're bigger than these plans. Book a call. (CTA to a scheduling link; use a placeholder env var for the URL.)
Hard rules
No fake testimonials, no case-study numbers, no revenue guarantees, no client names. Do not mention Fresh Bros, hemp, or any client on the public site. Never name the AI model or vendor; say "an assistant trained on your business." Do include one honest disclosure line in Customer Service and the FAQ: your customers are answered by an AI assistant trained on your business, with a human escalation path. No "unlimited" anywhere. Caps are phrased as fair-use lines, not meters.
Page IA (homepage, single page, mobile first)

1. Hero: tagline as H1. Subhead: Three systems that run your store while you run your brand. Pick one or all three. $500 a month each. Live in 14 days. Primary CTA: Start with one. Secondary: Book a call.
2. Who it's for: founders and shop owners already selling, doing roughly $3k to $15k a month, who are answering customers themselves, losing repeat buyers, and have no time to prospect. Three short lines, not a list of industries.
3. The three modules: three equal cards, price, two-sentence description, the fair-use line in small gray text, a "Start" button on each.
4. Run the Store bundle: one wide card, $1,250/mo, Recommended badge, one sentence on why they compound.
5. How it works: Day 1 you pick and pay. Days 2–10 we connect your store, inbox, and list and train the assistant on your business. Day 14 it's live and you get a daily summary of what it did. Every month you keep it or cancel.
6. What you get every month: a short daily summary of conversations handled, customers reached, leads delivered, and anything that needs you. One paragraph, no dashboard promises.
7. FAQ (6 max): Is this AI? Who owns my data and my list? What if my customers ask something it can't answer? Can I cancel? What do you need from me to start? I do more than $15k a month, is this for me?
8. Final CTA: Start with one module. Or book a call.
9. Footer: RunMyStore, contact email, privacy, terms.

Build tasks

1. Inspect current repo state and summarize what exists.
2. Rebuild the homepage to the IA above with the copy above. Write real copy, not lorem.
3. Pricing cards must work as a reusable component with price, description, fair-use line, and CTA as props, so the bundle and the three modules share it.
4. If a 14-day sprint page or section exists, move it to /sprint unlinked from the nav. Do not delete it.
5. Add an environment variable for the booking URL and one for the checkout/start URL per module; wire CTAs to them with sensible fallbacks.
6. Document the page IA and the pricing component in a README section titled "Offer v2 — modules."
7. Check: mobile layout at 375px, contrast on all teal elements (no teal on teal, no white text on teal below 16px), real buttons, no horizontal scroll.

Report back
Files changed, preview path, and at most five open decisions for Adam. Do not ask questions before starting; make the sensible call, note it, proceed.
Last step: update the brief file
Save this entire prompt, verbatim, to docs/OFFER_v2_PROMPT.md in the repo. If that file already exists, replace its contents with this version and add a one-line changelog entry at the top with today's date and what changed. Also update any existing website master prompt file in the repo (for example CLAUDE_CODE_WEBSITE_MASTER_PROMPT.md) by appending a dated note that the homepage offer is now the three modules and the 14-day sprint lives at /sprint. Do not delete prior content in that file.
