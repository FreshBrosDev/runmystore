// Site motion, built on GSAP. Tiered for prefers-reduced-motion per the
// accessible-animation skill: movement is removed, short fades are kept.
// Scroll reveals use IntersectionObserver to decide *when*, GSAP to animate.
import gsap from 'gsap';

const mm = gsap.matchMedia();

mm.add(
  { motionOK: '(prefers-reduced-motion: no-preference)', reduce: '(prefers-reduced-motion: reduce)' },
  (ctx) => {
    const { motionOK } = ctx.conditions as { motionOK: boolean };

    // --- Scroll reveals ---
    const reveals = gsap.utils.toArray<HTMLElement>('.reveal');
    const show = (els: HTMLElement[]) =>
      motionOK
        ? gsap.to(els, { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', stagger: 0.1, overwrite: true })
        : gsap.to(els, { opacity: 1, y: 0, duration: 0.15, overwrite: true });

    let pending: HTMLElement[] = [];
    let flush: number | undefined;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);
          const el = e.target as HTMLElement;
          if (el.dataset.shown) continue;
          el.dataset.shown = '1';
          pending.push(el);
        }
        // Elements that enter in the same scroll frame animate as one staggered group.
        if (pending.length && flush === undefined) {
          flush = window.setTimeout(() => {
            // Anything already scrolled past appears at once; only what is on screen glides in, top to bottom.
            const passed = pending.filter((el) => el.getBoundingClientRect().bottom < 0);
            const onScreen = pending
              .filter((el) => el.getBoundingClientRect().bottom >= 0)
              .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
            if (passed.length) gsap.set(passed, { opacity: 1, y: 0 });
            if (onScreen.length) show(onScreen);
            pending = [];
            flush = undefined;
          }, 40);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );
    reveals.forEach((el) => io.observe(el));

    // Belt and braces: observers can be deferred (background tabs, some browsers), so also check
    // positions on scroll. Whatever is on screen and still hidden reveals on the next frame.
    let ticking = false;
    const checkOnScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const due = reveals.filter((el) => !el.dataset.shown && el.getBoundingClientRect().top < window.innerHeight * 0.9);
        if (!due.length) return;
        due.forEach((el) => { el.dataset.shown = '1'; io.unobserve(el); });
        const passed = due.filter((el) => el.getBoundingClientRect().bottom < 0);
        const onScreen = due.filter((el) => el.getBoundingClientRect().bottom >= 0).sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
        if (passed.length) gsap.set(passed, { opacity: 1, y: 0 });
        if (onScreen.length) show(onScreen);
      });
    };
    window.addEventListener('scroll', checkOnScroll, { passive: true });
    window.addEventListener('resize', checkOnScroll);
    checkOnScroll();

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

    // Same net for reveals: anything on screen that is still hidden fades in.
    window.setTimeout(() => {
      const stuck = reveals.filter((el) => getComputedStyle(el).opacity === '0' && el.getBoundingClientRect().top < window.innerHeight * 1.1);
      if (stuck.length) gsap.to(stuck, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.08 });
    }, 4000);

    // --- Big speed trails in the final CTA sweep in ---
    const band = document.querySelector('.band');
    if (band && motionOK) {
      const bio = new IntersectionObserver(([en]) => {
        if (!en.isIntersecting) return;
        bio.disconnect();
        gsap.from('.band .stripes.lg i', { scaleX: 0, transformOrigin: 'left center', stagger: 0.07, duration: 0.6, ease: 'power3.out' });
      }, { threshold: 0.2 });
      bio.observe(band);
    }
  },
);
