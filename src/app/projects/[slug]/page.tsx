import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OWNER_NAME } from "@/config/site";
import { getProjectBySlug, PROJECTS } from "@/data/projects";
import styles from "./page.module.css";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const title = project.title;
  const description = project.category
    ? `${project.title} — ${project.category}`
    : project.title;
  const fullTitle = `${title} — ${OWNER_NAME}`;
  return {
    title,
    description,
    openGraph: { title: fullTitle, description },
    twitter: { title: fullTitle, description },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { caseContent } = project;

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1>{project.title}</h1>
        {caseContent?.badge && <span className={styles.badge}>{caseContent.badge}</span>}
      </div>

      {caseContent ? (
        <>
          <div
            className={
              caseContent.descriptionRight
                ? styles.intro
                : `${styles.intro} ${styles.introSingle}`
            }
          >
            <div className={styles.introCol}>
              {caseContent.descriptionLeft.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {!caseContent.descriptionRight && caseContent.caseUrl && (
                <a
                  className={styles.caseLink}
                  href={caseContent.caseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  смотреть кейс полностью
                </a>
              )}
            </div>
            {caseContent.descriptionRight && (
              <div className={styles.introCol}>
                {caseContent.descriptionRight.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {caseContent.caseUrl && (
                  <a
                    className={styles.caseLink}
                    href={caseContent.caseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    смотреть кейс полностью
                  </a>
                )}
              </div>
            )}
          </div>

          <div className={styles.sections}>
            {caseContent.sections.map((section) => (
              <Image
                key={section.image}
                src={section.image}
                alt={section.alt}
                width={section.width}
                height={section.height}
                className={styles.sectionImage}
              />
            ))}
          </div>
        </>
      ) : (
        <div className={styles.stub}>
          <Image
            src={project.cardImage}
            alt={project.title}
            width={project.cardWidth}
            height={project.cardHeight}
            className={styles.stubImage}
          />
          {project.category && <p className={styles.stubCategory}>{project.category}</p>}
          <p>Кейс скоро будет добавлен.</p>
        </div>
      )}

      <Link href="/" className={styles.backLink}>
        back to projects
      </Link>
    </main>
  );
}
