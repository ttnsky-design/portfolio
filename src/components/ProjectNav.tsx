import Link from "next/link";
import { getAdjacentProjects } from "@/data/projects";
import styles from "./ProjectNav.module.css";

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      className={styles.arrow}
      width="11"
      height="18"
      viewBox="0 0 10.5 17.32"
      aria-hidden="true"
    >
      <path
        d={direction === "left" ? "M0 8.66 10.5 17.32V0Z" : "M10.5 8.66 0 17.32V0Z"}
        fill="currentColor"
      />
    </svg>
  );
}

export default function ProjectNav({ slug }: { slug: string }) {
  const { previous, next } = getAdjacentProjects(slug);

  return (
    <nav className={styles.nav} aria-label="Навигация по проектам">
      <Link href={`/projects/${previous.slug}`} className={styles.link} title={previous.title}>
        <Arrow direction="left" />
        previous
      </Link>
      <Link href="/" className={styles.link}>
        back to projects
      </Link>
      <Link href={`/projects/${next.slug}`} className={styles.link} title={next.title}>
        next
        <Arrow direction="right" />
      </Link>
    </nav>
  );
}
