// Pre-renders Open Graph / Twitter preview images as static PNGs into public/og/.
// Static export writes code-generated opengraph-image routes as extensionless
// files, which static hosts (including Vercel's static output) serve with the
// wrong Content-Type — social crawlers then reject them as "not an image".
// Plain files in public/ are served with the correct type, like every other
// image on the site, so we render once here and commit the result.
//
// Run with: node scripts/generate-og-images.mjs

import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = process.cwd();
const OUT_DIR = join(ROOT, "public", "og");
const SIZE = { width: 1200, height: 630 };

const OWNER_NAME = "Татьяна Колышкина";
const OWNER_ROLE = "графический дизайнер";
const SITE_DESCRIPTION =
  "Портфолио графического дизайнера: айдентика, event и digital-кампании для Yango, Яндекса, VK, Пика и Совкомбанка.";

const { PROJECTS } = await import("../src/data/projects.ts");

async function save(name, buffer) {
  await writeFile(join(OUT_DIR, name), buffer);
  console.log("wrote", name, `${(buffer.length / 1024).toFixed(0)}kb`);
}

async function renderDefault() {
  const el = h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#ffffff",
        padding: "96px",
      },
    },
    h("div", { style: { display: "flex", fontSize: 84, fontWeight: 700, color: "#000000" } }, OWNER_NAME),
    h(
      "div",
      { style: { display: "flex", fontSize: 36, color: "#8d8d8d", marginTop: 24 } },
      OWNER_ROLE
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          fontSize: 24,
          color: "#000000",
          marginTop: 72,
          maxWidth: 880,
          lineHeight: 1.4,
        },
      },
      SITE_DESCRIPTION
    )
  );
  const res = new ImageResponse(el, SIZE);
  return Buffer.from(await res.arrayBuffer());
}

async function renderProject(project) {
  const imageData = await readFile(join(ROOT, "public", project.cardImage));
  const imageSrc = `data:image/png;base64,${imageData.toString("base64")}`;

  const el = h(
    "div",
    { style: { width: "100%", height: "100%", display: "flex", position: "relative", background: "#000000" } },
    h("img", {
      src: imageSrc,
      width: SIZE.width,
      height: SIZE.height,
      style: { position: "absolute", top: 0, left: 0, objectFit: "cover" },
    }),
    h(
      "div",
      {
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          padding: "64px 72px",
          background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
        },
      },
      h("div", { style: { display: "flex", fontSize: 64, fontWeight: 700, color: "#ffffff" } }, project.title),
      project.category
        ? h(
            "div",
            { style: { display: "flex", fontSize: 30, color: "#d9d9d9", marginTop: 12 } },
            project.category
          )
        : null
    )
  );
  const res = new ImageResponse(el, SIZE);
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  await save("default.png", await renderDefault());
  for (const project of PROJECTS) {
    await save(`${project.slug}.png`, await renderProject(project));
  }
}

main();
