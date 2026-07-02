/* ============================================================
   Centralized JSON-LD builders. Every page's structured data
   comes from here so the business entity stays consistent
   (single @id) across the whole site.
   ============================================================ */

import { business, services } from "./site";
import { areaPages } from "./areas";

export const SITE_URL = "https://hirepinevalley.com";
export const BUSINESS_ID = `${SITE_URL}/#business`;

const abs = (path: string) => new URL(path.endsWith("/") ? path : `${path}/`, SITE_URL).href;

// E.164-style phone for structured data (display formats live in site.ts).
const PHONE_E164 = "+1-603-339-6732";

const NH = { "@type": "State", name: "New Hampshire" } as const;

/* Bathroom remodeling has its own page but isn't in the nav services list;
   include it in the offer catalog without touching nav data. */
const catalogServices = [
  ...services,
  { label: "Bathroom Remodeling Services", href: "/bathroom-remodeling-merrimack-nh" },
];

/* Single merged business node — Plumber is a LocalBusiness subtype, so one
   node covers both. Rendered on the homepage and contact page. */
export const plumberSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": BUSINESS_ID,
  name: business.name,
  description:
    "Licensed master plumber serving Merrimack, NH and surrounding areas with emergency repairs, installations, and complete plumbing services. Over a decade of expertise with gas certification.",
  url: `${SITE_URL}/`,
  telephone: PHONE_E164,
  email: business.jsonLdEmail,
  image: abs("/images/van-hero-og.jpg"),
  logo: abs("/images/Logo.svg"),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Merrimack",
    addressRegion: "NH",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Merrimack", containedInPlace: NH },
    ...areaPages.map((a) => ({ "@type": "City", name: a.city, containedInPlace: NH })),
    { "@type": "AdministrativeArea", name: "Hillsborough County", containedInPlace: NH },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
    bestRating: "5",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    business.mapsUrl,
    business.googleReviewUrl,
    "https://www.facebook.com/PriorityPlumbingNH/",
    "https://share.google/veV7H31jbW5vpnr8K",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Plumbing Services",
    itemListElement: catalogServices.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.label, url: abs(s.href) },
    })),
  },
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: business.name,
  url: `${SITE_URL}/`,
  publisher: { "@id": BUSINESS_ID },
};

/* Slim provider node: self-contained enough for validators, while the @id
   ties it to the full business entity on the homepage/contact page. */
const providerRef = {
  "@type": "Plumber",
  "@id": BUSINESS_ID,
  name: business.name,
  telephone: PHONE_E164,
  url: `${SITE_URL}/`,
};

export interface ServiceSchemaInput {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
  areaType?: "City" | "AdministrativeArea";
}

export function serviceSchema({
  name,
  description,
  path,
  areaServed = "Merrimack",
  areaType = "City",
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: abs(path),
    provider: providerRef,
    areaServed: { "@type": areaType, name: areaServed, containedInPlace: NH },
  };
}

export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
