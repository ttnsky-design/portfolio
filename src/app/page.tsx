import { SITE_DESCRIPTION, SITE_NAME } from "@/config/site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>{SITE_NAME}</h1>
      <p>{SITE_DESCRIPTION}</p>
      <p className={styles.note}>Вёрстка по макету появится здесь.</p>
    </main>
  );
}
