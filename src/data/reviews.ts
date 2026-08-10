/* ============================================================
   Google reviews shown on the site. Excerpted from the live
   profile (business.googleReviewUrl) — trim for length, never
   reword the reviewer's point.
   Order = display order; the first 6 show before "Show more".
   ============================================================ */

export interface Review {
  quote: string;
  name: string;
  service?: string;
}

export const reviews: Review[] = [
  {
    quote:
      "Stop looking and hire these guys. My old house has some (interesting) plumbing left over from the previous owner. Michael was able to diagnose the problem, provide upfront options with costs and implement a clean fix. The customer experience is also top notch — arrival texts, invoices and pay by card.",
    name: "Joe McCaffrey",
  },
  {
    quote:
      "My water heater was failing and needed to be replaced ASAP. They came and looked at it, gave me an estimate on the spot, and were able to change it the same day. I would highly recommend them.",
    name: "Arron Langevin",
    service: "Water heater installation",
  },
  {
    quote:
      "Needed an outside spigot replaced and wanted a local small business in our area. They came out the next day. Mike was very kind, knowledgeable and professional. He gave me 3 options for replacement and talked through each one to best suit our need.",
    name: "M. Costas",
  },
  {
    quote:
      "Pine Valley's been a great help multiple times for me. Called them once to replace a shower valve cartridge, and then for replacing a burst pipe for an outdoor spigot. Each time, they have been prompt, friendly, professional, and I'm satisfied with the end result.",
    name: "Brad Bonn",
    service: "Plumbing pipe repair",
  },
  {
    quote:
      "I called early in the morning about a clogged sewer line. Spoke with Jessica, she scheduled Mike to come out in the afternoon. Mike was prompt, knowledgeable, professional and fixed us up with no concerns. I highly recommend them for all your plumbing needs!",
    name: "Marsha Peterson",
  },
  {
    quote:
      "Amazing all around!! Excellent customer service and a wealth of knowledge! Mike explained all of our options and was very helpful with any questions we had. Pine Valley will be our go-to company for all of our plumbing needs.",
    name: "Natalie Belleau",
  },
  {
    quote:
      "Mike was very positive, professional and a pleasure to have first thing on a Monday morning working on our unexpected plumbing issue. Got an appointment very quickly, and work was completed well and on time. Very satisfied with the quality of work and service!",
    name: "Kwame",
  },
  {
    quote:
      "Mike did a good job. He managed to quickly adjust and fix the faulty equipment sent to us and now it works perfectly. Very nice crew.",
    name: "Mike Walls",
  },
];
