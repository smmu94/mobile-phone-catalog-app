import React from "react";
import Button from "@components/button";
import styles from "./channelCard.module.sass";
import { ChannelCardProps } from "./types";

export default function ChannelCard({
  title,
  description,
  icon,
  action,
  onClick
}: ChannelCardProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>{icon}</span>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <Button style="Standard" onClick={onClick}>{action}</Button>
    </div>
  );
}
