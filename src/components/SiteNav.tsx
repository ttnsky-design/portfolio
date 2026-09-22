"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./SiteNav.module.css";

const LINKS = [
  { href: "/", label: "проекты" },
  { href: "/about", label: "обо мне" },
  { href: "/contacts", label: "контакты" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        className={styles.burger}
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      {open && (
        <nav className={styles.mobileNav}>
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
