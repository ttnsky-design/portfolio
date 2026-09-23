import { ImageResponse } from "next/og";
import { OWNER_NAME, OWNER_ROLE, SITE_DESCRIPTION } from "@/config/site";

export const dynamic = "force-static";
export const alt = `${OWNER_NAME} — ${OWNER_ROLE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#ffffff",
          padding: "96px",
        }}
      >
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, color: "#000000" }}>
          {OWNER_NAME}
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#8d8d8d", marginTop: 24 }}>
          {OWNER_ROLE}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#000000",
            marginTop: 72,
            maxWidth: 880,
            lineHeight: 1.4,
          }}
        >
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    { ...size }
  );
}
