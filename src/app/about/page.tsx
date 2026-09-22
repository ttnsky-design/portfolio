import type { Metadata } from "next";
import Image from "next/image";
import { OWNER_NAME, OWNER_ROLE } from "@/config/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Обо мне",
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
      {role && <span className={styles.experienceRole}>{role}</span>}
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
        <div className={styles.leftColumn}>
          <div className={styles.intro}>
            <h1 className={styles.name}>{OWNER_NAME}</h1>
            <p className={styles.role}>{OWNER_ROLE}</p>
            <div className={styles.keyProjects}>
              <span className={styles.sectionLabel}>Ключевые проекты:</span>
              <p>
                Yango, Яндекс, Магнит, VK, Пик, SberDevices, Дикси, Rox, Мегафон, Ростовский Кремль
                и др.
              </p>
            </div>
          </div>

          <section className={styles.section}>
            <h2>Образование</h2>
            <div className={styles.educationEntry}>
              <span className={styles.experienceRole}>
                Нижегородский государственный архитектурно-строительный университет, Нижний Новгород
              </span>
              <span>Факультет архитектуры и дизайна Художественная Культура</span>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Курсы</h2>
            <div className={styles.coursesList}>
              {COURSES.map((course) => (
                <div key={course.name} className={styles.courseEntry}>
                  <span className={styles.experienceRole}>{course.name}</span>
                  <span>{course.info}</span>
                </div>
              ))}
            </div>
          </section>

        </div>

        <div className={styles.rightColumn}>
          <Image
            src="/images/about/portrait.png"
            alt={OWNER_NAME}
            width={387}
            height={294}
            className={styles.portrait}
          />

          <section className={styles.section}>
            <h2>Skill Set</h2>
            <ul className={styles.bulletList}>
              {SKILLS.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section className={styles.experienceSection}>
        <h2>Опыт работы</h2>
        <div className={styles.experienceGrid}>
          <div className={styles.experienceStack}>
            {EXPERIENCE_LEFT.map((job) => (
              <ExperienceCard key={job.company} {...job} />
            ))}
          </div>
          <div className={styles.experienceStack}>
            {EXPERIENCE_RIGHT.map((job) => (
              <ExperienceCard key={job.company} {...job} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
