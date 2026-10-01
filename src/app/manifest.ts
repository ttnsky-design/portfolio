import type { MetadataRoute } from "next";
import { asset } from "@/lib/asset";
import { OWNER_NAME, SITE_DESCRIPTION, SITE_NAME } from "@/config/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: OWNER_NAME,
    description: SITE_DESCRIPTION,
    start_url: asset("/"),
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: asset("/icons/android-chrome-192x192.png"),
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: asset("/icons/android-chrome-512x512.png"),
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
