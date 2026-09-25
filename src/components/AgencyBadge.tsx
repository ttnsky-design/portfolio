import Image from "next/image";
import type { Agency } from "@/data/projects";
import styles from "./AgencyBadge.module.css";

const BADGES: Record<Agency, { src: string; alt: string; width: number; height: number }> = {
  narrators: { src: "/images/badges/narrators.svg", alt: "× narrators", width: 174, height: 34 },
  superdudes: { src: "/images/badges/superdudes.svg", alt: "Superdudes", width: 257, height: 44 },
};

export default function AgencyBadge({ agency }: { agency: Agency }) {
  const badge = BADGES[agency];
  return (
    <Image
      src={badge.src}
      alt={badge.alt}
      width={badge.width}
      height={badge.height}
      className={styles.badge}
      style={{ height: badge.height }}
    />
  );
}
