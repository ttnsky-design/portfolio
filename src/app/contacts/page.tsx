import type { Metadata } from "next";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { CONTACTS, OWNER_NAME, SOCIAL_LINKS } from "@/config/site";
import { typograph } from "@/lib/typograph";
import styles from "./page.module.css";

const CONTACTS_TITLE = `Контакты — ${OWNER_NAME}`;
const CONTACTS_DESCRIPTION = "Контакты: Telegram, почта, Behance и Dprofile.";

export const metadata: Metadata = {
  title: "Контакты",
  description: CONTACTS_DESCRIPTION,
  openGraph: {
    title: CONTACTS_TITLE,
    description: CONTACTS_DESCRIPTION,
    images: ["/og/default.png"],
  },
  twitter: {
    title: CONTACTS_TITLE,
    description: CONTACTS_DESCRIPTION,
    images: ["/og/default.png"],
  },
};

export default function ContactsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.social}>
        <a href={SOCIAL_LINKS.behance} target="_blank" rel="noopener noreferrer">
          Behance
        </a>
        <Image
          src={asset("/images/contacts/portrait.jpg")}
          alt={OWNER_NAME}
          width={166}
          height={213}
          className={styles.portrait}
        />
        <a href={SOCIAL_LINKS.dprofile} target="_blank" rel="noopener noreferrer">
          Dprofile
        </a>
      </div>

      <p className={styles.lead}>
        {typograph("Буду рада обсудить проекты и возможное сотрудничество :)")}
      </p>

      <div className={styles.details}>
        <div className={styles.detail}>
          <span>мой номер</span>
          <a href={`tel:${CONTACTS.phoneHref}`}>{CONTACTS.phoneHref}</a>
        </div>
        <div className={styles.detail}>
          <span>я в Telegram</span>
          <a href={CONTACTS.telegramHref} target="_blank" rel="noopener noreferrer">
            {CONTACTS.telegram}
          </a>
        </div>
        <div className={styles.detail}>
          <span>написать на почту</span>
          <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
        </div>
      </div>
    </main>
  );
}
