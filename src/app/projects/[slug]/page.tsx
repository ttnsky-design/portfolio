import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import AgencyBadge from "@/components/AgencyBadge";
import ProjectNav from "@/components/ProjectNav";
import { OWNER_NAME } from "@/config/site";
import { getProjectBySlug, PROJECTS } from "@/data/projects";
import styles from "./page.module.css";

/** Width of the content column in the Figma mockups. */
const COLUMN_WIDTH = 1160;

/** Images narrower than the column keep their mockup width, centred; wider ones are capped at the column. */
function sectionWidth(width: number) {
  return `${(Math.min(width, COLUMN_WIDTH) / COLUMN_WIDTH) * 100}%`;
}

/**
 * Renders description text: blank lines separate paragraphs, and a paragraph
 * whose every line starts with "- " becomes a bulleted list.
 */
function Description({ text }: { text: string }) {
  return text.split("\n\n").map((block) => {
    const lines = block.split("\n");
    if (lines.every((line) => line.startsWith("- "))) {
      return (
        <ul key={block} className={styles.list}>
          {lines.map((line) => (
            <li key={line}>{line.slice(2)}</li>
          ))}
        </ul>
      );
    }
    return <p key={block}>{block}</p>;
  });
}

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
  const images = [`/og/${project.slug}.png`];
  return {
    title,
    description,
    openGraph: { title: fullTitle, description, images },
    twitter: { title: fullTitle, description, images },
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
        <h1>{caseContent?.heading ?? project.title}</h1>
        {caseContent?.agency && <AgencyBadge agency={caseContent.agency} />}
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
              <Description text={caseContent.descriptionLeft} />
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
                <Description text={caseContent.descriptionRight} />
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
            {caseContent.sections.map((section) =>
              "heading" in section ? (
                <section key={section.heading} className={styles.textBlock}>
                  <h2>{section.heading}</h2>
                  <div className={styles.introCol}>
                    <Description text={section.text} />
                  </div>
                </section>
              ) : (
                <Image
                  key={section.image}
                  src={section.image}
                  alt={section.alt}
                  width={section.width}
                  height={section.height}
                  className={
                    section.groupStart
                      ? `${styles.sectionImage} ${styles.groupStart}`
                      : styles.sectionImage
                  }
                  style={{ width: sectionWidth(section.width) }}
                />
              ),
            )}
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

      <ProjectNav slug={project.slug} />
    </main>
  );
}
