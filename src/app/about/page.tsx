import type { Metadata } from "next";
import Image from "next/image";
import { OWNER_NAME, OWNER_ROLE } from "@/config/site";
import styles from "./page.module.css";

const ABOUT_TITLE = `Обо мне — ${OWNER_NAME}`;
const ABOUT_DESCRIPTION = `${OWNER_NAME} — ${OWNER_ROLE}. Опыт, навыки и путь в дизайне.`;

export const metadata: Metadata = {
  title: "Обо мне",
  description: ABOUT_DESCRIPTION,
  openGraph: { title: ABOUT_TITLE, description: ABOUT_DESCRIPTION, images: ["/og/default.png"] },
  twitter: { title: ABOUT_TITLE, description: ABOUT_DESCRIPTION, images: ["/og/default.png"] },
};

const EXPERIENCE_LEFT = [
  {
    company: "MarkWay",
    type: "маркетинговое агентство",
    period: "май 2021 — окт. 2022",
    role: "SMM, digital дизайнер",
    bullets: [
      "оформление социальных сетей (в т.ч. обработка фото, монтаж видео, отрисовка иллюстраций, создание инфографики и анимационных постов)",
      "создание новых визуальных гайдов клиентов и рассылок",
      "оформление рекламных баннеров",
      "подготовка макетов и графических материалов к печати",
      "разработка дизайна презентаций для бизнеса или продукта",
    ],
  },
  {
    company: "Freelance",
    type: null,
    period: "с 2020 г.",
    role: null,
    bullets: [
      "разработка фирменного стиля, логотипа",
      "создание макетов полиграфической продукции, рекламных баннеров",
      "разработка графического оформления социальных сетей",
      "оформление презентаций, гайдов",
    ],
  },
];

const EXPERIENCE_RIGHT = [
  {
    company: "Narrators",
    type: "креативное агентство",
    period: "апр. 2024 — окт. 2026",
    role: "Графический дизайнер",
    bullets: [
      "дизайн коммуникационных материалов и презентаций",
      "предпечатная подготовка",
      "разработка KV для рекламных кампаний и спецпроектов",
      "оформление ивентов: брендирование, дизайн пространств, декораций и презентаций",
      "создание новых визуальных концепций и фирменных стилей, написание гайдов",
      "генерация материалов в нейросетях: krea, mijourney, freepik, sora",
    ],
  },
];

const COURSES = [
  {
    name: "Bang Bang Education",
    info: "2020—2021 | BBE, Графический дизайн",
  },
  {
    name: "Приволжская Медиашкола",
    info: "2020 | ЧОУ ДПО, Графический дизайн",
  },
  {
    name: "«Типографика и вёрстка: внимание к тексту»",
    info: "2023 | Свят Вишников, Типографика",
  },
];

const SKILLS = [
  "Разработка визуальной айдентики и фирменных элементов",
  "Разработка мерча и сувенирной продукции, брендированной застройки, визуализации на носителях",
  "Работа с полиграфией и предпечатная подготовка макетов",
  "Логотипы, типографические решения, работа со шрифтом и композицией",
  "Разработка визуалов для социальных сетей, digital-коммуникаций и рекламных кампаний",
  "Вёрстка презентаций, брендбуков, коммерческих предложений",
  "Генерация и доработка визуалов, создание концептов и ассетов с помощью нейросетей",
];

function ExperienceCard({
  company,
  type,
  period,
  role,
  bullets,
}: {
  company: string;
  type: string | null;
  period: string;
  role: string | null;
  bullets: string[];
}) {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.experienceHeader}>
        <span className={styles.experienceCompany}>{company}</span>
        {type && <span className={styles.experienceMuted}>{type}</span>}
        <span className={styles.experienceMuted}>{period}</span>
      </div>
      {role && <span className={styles.bold}>{role}</span>}
      <ul className={styles.bulletList}>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.grid}>
        <div className={styles.intro}>
          <div className={styles.introHeading}>
            <h1 className={styles.name}>{OWNER_NAME}</h1>
            <p className={styles.role}>{OWNER_ROLE}</p>
          </div>
          <div className={styles.keyProjects}>
            <span className={styles.bold}>Ключевые проекты:</span>
            <p>
              Yango, Яндекс, Магнит, VK, ПИК, SberDevices, Дикси, Rox, Мегафон, Ростовский Кремль
              и др.
            </p>
          </div>
        </div>

        <Image
          src="/images/about/portrait.png"
          alt={OWNER_NAME}
          width={387}
          height={294}
          className={styles.portrait}
        />

        <div className={styles.stack}>
          <section className={styles.section}>
            <h2>Образование</h2>
            <div className={styles.entry}>
              <span className={styles.bold}>
                Нижегородский государственный архитектурно-строительный университет, Нижний Новгород
              </span>
              <span>Факультет архитектуры и дизайна Художественная Культура</span>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Курсы</h2>
            <div className={styles.coursesList}>
              {COURSES.map((course) => (
                <div key={course.name} className={styles.entry}>
                  <span className={styles.bold}>{course.name}</span>
                  <span>{course.info}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className={styles.section}>
          <h2>Skill Set</h2>
          <ul className={`${styles.bulletList} ${styles.skillsList}`}>
            {SKILLS.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className={styles.experienceSection}>
          <h2>Опыт работы</h2>
          <div className={styles.stack}>
            {EXPERIENCE_LEFT.map((job) => (
              <ExperienceCard key={job.company} {...job} />
            ))}
          </div>
          <div className={styles.stack}>
            {EXPERIENCE_RIGHT.map((job) => (
              <ExperienceCard key={job.company} {...job} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
