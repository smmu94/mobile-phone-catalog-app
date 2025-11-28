import React from "react";
import styles from "./spinner.module.sass";

export default function Spinner() {
  return (
    <div className={styles.spinnerContainer} data-testid="spinner">
      <div className={styles.spinner} aria-label="loading-spinner" role="status"></div>
    </div>
  );
}