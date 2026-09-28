import Image from "next/image";
import { asset } from "@/lib/asset";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className={styles.card}>
            <Image
              src={asset(project.cardImage)}
              alt={project.title}
              width={project.cardWidth}
              height={project.cardHeight}
              className={styles.cardImage}
            />
            <div className={styles.cardMeta}>
              <span className={styles.cardTitle}>{project.title}</span>
              {project.category && <span className={styles.cardCategory}>{project.category}</span>}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
