import React from "react";
import { InfoCardProps } from "./types";
import styles from "./infoCard.module.sass";

export default function InfoCard({ children, label, tooltip }: InfoCardProps & { tooltip?: string }) {
  return (
    <div className={styles.wrapper} aria-label={label} title={tooltip}>
      <span className={styles.icon}>{children}</span>
      <p>{label}</p>
    </div>
  );
}