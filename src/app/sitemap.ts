import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { PROJECTS } from "@/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified },
    { url: `${SITE_URL}/about`, lastModified },
    { url: `${SITE_URL}/contacts`, lastModified },
    ...PROJECTS.map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified,
    })),
  ];
}
