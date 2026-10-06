// Site motion, built on GSAP. Tiered for prefers-reduced-motion per the
// accessible-animation skill: movement is removed, short fades are kept.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const mm = gsap.matchMedia();

mm.add(
  { motionOK: '(prefers-reduced-motion: no-preference)', reduce: '(prefers-reduced-motion: reduce)' },
  (ctx) => {
    const { motionOK } = ctx.conditions as { motionOK: boolean };

    // --- Scroll reveals (replaces the old IntersectionObserver) ---
    const reveals = gsap.utils.toArray<HTMLElement>('.reveal');
    if (motionOK) {
      ScrollTrigger.batch(reveals, {
        start: 'top 88%',
        once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08, overwrite: true }),
      });
    } else {
      ScrollTrigger.batch(reveals, { start: 'top 95%', once: true, onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.15, overwrite: true }) });
    }

    // --- Hero entrance: one master timeline ---
    const hero = document.querySelector('.hero');
    if (hero) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.7 } });
      if (motionOK) {
        tl.from('.hero .eyebrow .stripes i', { scaleX: 0, transformOrigin: 'left center', stagger: 0.06, duration: 0.5 })
          .from('.hero .eyebrow', { opacity: 0, duration: 0.4 }, '<')
          .from('.hero h1', { yPercent: 18, opacity: 0, duration: 0.9 }, '-=0.2')
          .from('.hero .lede', { y: 18, opacity: 0 }, '-=0.5')
          .from('.hero .actions .btn', { y: 14, opacity: 0, stagger: 0.1 }, '-=0.45')
          .from('.hero .facts li', { y: 12, opacity: 0, stagger: 0.08, duration: 0.5 }, '-=0.4')
          .from('.live', { y: 24, opacity: 0, duration: 0.9 }, 0.15);
      } else {
        tl.from(['.hero > .wrap', '.live'], { opacity: 0, duration: 0.15 });
      }
      // Safety net: if rAF is throttled (hidden tab, headless, some crawlers) the timeline
      // never ticks and the hero would stay invisible. Timers still fire, so jump to the end.
      window.setTimeout(() => { if (tl.progress() < 1) tl.progress(1); }, 3500);
    }

    // Same net for scroll reveals: anything already above the fold's bottom edge gets shown.
    window.setTimeout(() => {
      const bottom = window.innerHeight * 1.1;
      const stuck = reveals.filter((el) => getComputedStyle(el).opacity === '0' && el.getBoundingClientRect().top < bottom);
      if (stuck.length) gsap.set(stuck, { opacity: 1, y: 0 });
    }, 4000);

    // Prices are static on purpose: a counting price reads as the wrong price.

    // --- Big speed trails in the final CTA sweep in ---
    if (motionOK) {
      gsap.from('.band .stripes.lg i', {
        scaleX: 0, transformOrigin: 'left center', stagger: 0.07, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.band', start: 'top 80%', once: true },
      });
    }
  },
);
