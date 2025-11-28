"use client";
import React, { useState } from "react";
import styles from "./faqAccordion.module.sass";

export type FaqAccordionProps = {
  id: string;
  title: string;
  description: string;
};

export default function FaqAccordion({ title, description }: FaqAccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.header} // ahora coincide con la hoja de estilos
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={styles.title}>{title}</span>
        <span className={styles.toggleButton}>{open ? "-" : "+"}</span>
      </button>

      <div className={`${styles.description} ${open ? styles.open : ""}`}>
        <p>{description}</p>
      </div>
    </div>
  );
}
