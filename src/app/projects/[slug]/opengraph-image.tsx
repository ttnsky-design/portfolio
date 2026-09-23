import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { OWNER_NAME, OWNER_ROLE } from "@/config/site";
import { PROJECTS, getProjectBySlug } from "@/data/projects";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${OWNER_NAME} — ${OWNER_ROLE}`;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            fontSize: 64,
            fontWeight: 700,
            color: "#000000",
          }}
        >
          {OWNER_NAME}
        </div>
      ),
      { ...size }
    );
  }

  const imageData = await readFile(join(process.cwd(), "public", project.cardImage));
  const imageSrc = `data:image/png;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#000000",
        }}
      >
        <img
          src={imageSrc}
          alt=""
          width={size.width}
          height={size.height}
          style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            padding: "64px 72px",
            background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
          }}
        >
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#ffffff" }}>
            {project.title}
          </div>
          {project.category && (
            <div style={{ display: "flex", fontSize: 30, color: "#d9d9d9", marginTop: 12 }}>
              {project.category}
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
