import Image from "next/image";
import styles from "./NarratorsBadge.module.css";

export default function NarratorsBadge() {
  return (
    <Image
      src="/images/badges/narrators.svg"
      alt="× narrators"
      width={174}
      height={34}
      className={styles.badge}
    />
  );
}
