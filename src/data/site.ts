/* ============================================================
   Pine Valley Plumbing — single source of truth for links/contacts.
   Internal links are all root-relative and clean (no .html).
   ============================================================ */

export const business = {
  name: "Pine Valley Plumbing",

  // External actions
  bookingUrl: "https://portal.fieldpulse.com/priorityplumbing",
  careersApplyUrl: "https://priorityplumbing.applicantpro.com/jobs/",
  mapsUrl: "https://maps.app.goo.gl/W7Gsk52nfKate5Jc9",
  googleReviewUrl: "https://share.google/uo5SvDFsKKNNTtAn0",

  // One number everywhere (old 521-2433 tracking split retired 2026-07).
  navPhone: "(603) 339-6732", // nav / footer / contact
  navPhoneTel: "tel:(603)339-6732",
  primaryPhone: "(603) 339-6732", // hero CTA / JSON-LD / SEO blocks
  primaryPhoneTel: "tel:(603)339-6732",
  navEmail: "office@hirepinevalley.com",
  navEmailHref: "mailto:office@hirepinevalley.com?subject=Inquiry",
  jsonLdEmail: "priorityplumbingnh@gmail.com",

  // Reviews
  rating: "4.9",
  reviewCount: "132",

  // Real Work Labs widget
  rwlToken: "LO0UmloUXs9p8MYL",
  rwlOrigin: "https://app.realworklabs.com",

  serviceArea: "Merrimack, New Hampshire and surrounding areas",
} as const;

export interface LinkItem {
  label: string;
  href: string;
}

/* Primary nav links (order matches source) */
export const navLinks: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-pine-valley-plumbing-merrimack-nh" },
  { label: "Recent Projects", href: "/recent-projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact-plumber-merrimack-nh" },
];

/* Services dropdown (order matches source nav) */
export const services: LinkItem[] = [
  { label: "Drain Cleaning Services", href: "/drain-cleaning-merrimack-nh" },
  { label: "Water Heater Installation", href: "/water-heater-installation-merrimack-nh" },
  { label: "Water Heater Repair", href: "/water-heater-repair-merrimack-nh" },
  { label: "Faucet Repair Services", href: "/faucet-repair-merrimack-nh" },
  { label: "Kitchen Plumbing Services", href: "/kitchen-plumbing-merrimack-nh" },
  { label: "Gas Line Services", href: "/gas-line-services-merrimack-nh" },
  { label: "Toilet Installation Services", href: "/toilet-installation-merrimack-nh" },
  { label: "Garbage Disposal Installation", href: "/garbage-disposal-installation-merrimack-nh" },
  { label: "Pipe Repair Services", href: "/pipe-repair-merrimack-nh" },
  { label: "Water & Flood Prevention Systems", href: "/sump-pump-backflow-merrimack-nh" },
  { label: "Emergency Plumbing Services", href: "/emergency-plumber-merrimack-nh" },
];

/* Areas dropdown (order matches source nav; Hillsborough County last) */
export const areas: LinkItem[] = [
  { label: "Manchester, NH", href: "/areas/plumber-in-manchester-nh" },
  { label: "Nashua, NH", href: "/areas/plumber-in-nashua-nh" },
  { label: "Derry, NH", href: "/areas/plumber-in-derry-nh" },
  { label: "Salem, NH", href: "/areas/plumber-in-salem-nh" },
  { label: "Bedford, NH", href: "/areas/plumber-in-bedford-nh" },
  { label: "Londonderry, NH", href: "/areas/plumber-in-londonderry-nh" },
  { label: "Hillsborough County", href: "/plumbing-services-in-hillsborough-county" },
];

/* Footer column 1 (pages + areas), matches source footer order */
export const footerPages: LinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-pine-valley-plumbing-merrimack-nh" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact-plumber-merrimack-nh" },
  { label: "Hillsborough County", href: "/plumbing-services-in-hillsborough-county" },
  { label: "Manchester, NH", href: "/areas/plumber-in-manchester-nh" },
  { label: "Nashua, NH", href: "/areas/plumber-in-nashua-nh" },
  { label: "Derry, NH", href: "/areas/plumber-in-derry-nh" },
  { label: "Salem, NH", href: "/areas/plumber-in-salem-nh" },
  { label: "Bedford, NH", href: "/areas/plumber-in-bedford-nh" },
  { label: "Londonderry, NH", href: "/areas/plumber-in-londonderry-nh" },
];

/* Footer column 2 (services), matches source footer order */
export const footerServices: LinkItem[] = services;

/* Social links — placeholders kept as "#" (no real URLs exist) */
export const socialLinks = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "X (Twitter)", href: "#", icon: "x" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "YouTube", href: "#", icon: "youtube" },
] as const;
