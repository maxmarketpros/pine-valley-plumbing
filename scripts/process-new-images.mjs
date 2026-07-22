// One-off: generate web derivatives for the client's new photos
// (public/new-images/) into public/images/ following the -p-{w}.webp convention.
// Run: node scripts/process-new-images.mjs
import sharp from "sharp";

const SRC = "public/new-images";
const OUT = "public/images";

const jobs = [
  { file: "new-truck-pic-wide.jpeg", base: "truck-hero-wide", widths: [500, 800, 1080, 1600] },
  { file: "56BA3285-3FA7-414F-9142-1D121789BD29.png", base: "home-neighborhood", widths: [500, 800, 1080] },
  { file: "5EB8FCC5-A11C-4101-837B-63EF2197A44B.png", base: "home-kitchen-consult", widths: [500, 800, 1080] },
  { file: "627EF66C-B256-4208-8804-9F1A3F3A33FB.png", base: "home-handshake", widths: [500, 800, 1080] },
  { file: "CE3D3D21-AA4E-4080-88D2-9AE39E3452F0.png", base: "home-tablet-consult", widths: [500, 800, 1080] },
];

for (const { file, base, widths } of jobs) {
  for (const width of widths) {
    const out = `${OUT}/${base}-p-${width}.webp`;
    await sharp(`${SRC}/${file}`)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(out);
    console.log("wrote", out);
  }
}

// OG image: 1200x630 band of the wide truck shot that keeps the whole truck
await sharp(`${SRC}/new-truck-pic-wide.jpeg`)
  .rotate()
  .resize({ width: 1200 })
  .extract({ left: 0, top: 140, width: 1200, height: 630 })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(`${OUT}/truck-hero-og.jpg`);
console.log("wrote", `${OUT}/truck-hero-og.jpg`);
