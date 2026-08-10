#!/usr/bin/env node
/**
 * Refreshes src/data/google-reviews.json from the Google Places API.
 *
 * Runs as npm `prebuild` (so every Netlify deploy picks up the current
 * numbers) and weekly from .github/workflows/refresh-google-reviews.yml.
 *
 * Never fails the build: without a key, or if Google is unreachable or
 * answers with something implausible, it leaves the committed JSON alone
 * and exits 0. The site always has a real number to render.
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../src/data/google-reviews.json", import.meta.url));
const PLACE_ID = "ChIJ2cpZB78i_EMRSRNj7E9DgAw"; // Pine Valley Plumbing, 8 Walden Dr
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

const skip = (why) => {
  console.log(`[google-reviews] ${why} — keeping the committed values.`);
  process.exit(0);
};

if (!API_KEY) skip("GOOGLE_PLACES_API_KEY is not set");

const current = JSON.parse(await readFile(OUT, "utf8"));

let data;
try {
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,userRatingCount`,
    { headers: { "X-Goog-Api-Key": API_KEY } },
  );
  if (!res.ok) skip(`Places API returned ${res.status} ${res.statusText}`);
  data = await res.json();
} catch (err) {
  skip(`Places API request failed (${err.message})`);
}

const { rating, userRatingCount } = data;

// Guard against a partial/garbled response quietly wiping the social proof.
// The count only ever climbs, so a drop means bad data, not lost reviews.
if (typeof rating !== "number" || typeof userRatingCount !== "number") {
  skip("Places API response was missing rating or userRatingCount");
}
if (userRatingCount < Number(current.reviewCount)) {
  skip(`Places API reported ${userRatingCount} reviews, down from ${current.reviewCount}`);
}

const next = {
  rating: rating.toFixed(1),
  reviewCount: String(userRatingCount),
  fetchedAt: new Date().toISOString().slice(0, 10),
};

if (next.rating === current.rating && next.reviewCount === current.reviewCount) {
  console.log(`[google-reviews] Unchanged: ${next.rating} stars, ${next.reviewCount} reviews.`);
  process.exit(0);
}

await writeFile(OUT, `${JSON.stringify(next, null, 2)}\n`);
console.log(
  `[google-reviews] Updated: ${current.rating}/${current.reviewCount} -> ${next.rating}/${next.reviewCount}.`,
);
