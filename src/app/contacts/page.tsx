import type { Metadata } from "next";
import { CONTACTS, SOCIAL_LINKS } from "@/config/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Контакты",
};

export default function ContactsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.social}>
        <a href={SOCIAL_LINKS.behance} target="_blank" rel="noopener noreferrer">
          Behance
        </a>
        <a href={SOCIAL_LINKS.dprofile} target="_blank" rel="noopener noreferrer">
          Dprofile
        </a>
      </div>
      <div className={styles.details}>
        <a href={`tel:${CONTACTS.phoneHref}`}>{CONTACTS.phone}</a>
        <a href={CONTACTS.telegramHref} target="_blank" rel="noopener noreferrer">
          tg: {CONTACTS.telegram}
        </a>
        <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
      </div>
    </main>
  );
}
