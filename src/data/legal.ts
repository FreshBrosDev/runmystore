// Facts the legal pages depend on. No guesses here: anything left empty renders as a
// visible [placeholder], and while `ready` is false both pages show a DRAFT banner,
// are marked noindex, and are left out of the sitemap.
//
// Fill these in, have counsel review the pages, then set `ready: true`.

export const legal = {
  ready: false,

  /** Registered legal entity, e.g. "RunMyStore LLC". */
  entity: '',
  /** Inbox that is actually monitored for privacy and legal requests. */
  email: '',
  /** Mailing address for legal notices. */
  address: '',
  /** Governing law and venue, e.g. "Florida". */
  state: '',

  /** ISO date. Change it whenever either page changes in substance. */
  updated: '2026-09-20',
  /** How long an application is kept when it does not become an engagement. */
  retentionMonths: 24,
};

export const legalPaths = ['/privacy/', '/terms/'];
