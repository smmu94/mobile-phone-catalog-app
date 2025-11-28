import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import styles from "./footer.module.sass";
import routes from "@utils/routes";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.topContent}>
        <div className={styles.leftContent}>
          <Image
            src="/assets/logo.svg"
            width={74}
            height={24}
            alt="logo"
            priority
          />
          <p>Find your ideal smartphone. Best prices, fast delivery and more.</p>
          <div className={styles.socials}>
            <AiOutlineInstagram size={40} className={styles.icon} />
            <AiOutlineWhatsApp size={40} className={styles.icon} />
            <AiOutlineFacebook size={40} className={styles.icon} />
          </div>
        </div>
        <div className={styles.mediumContent}>
          <h3>Company</h3>
          <Link href={routes.catalog.main}>All Phones</Link>
          <Link href={routes.support.main}>Contact/Support</Link>
        </div>
        <div className={styles.rightContent}>
          <h3>Legal</h3>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
      <div className={styles.bottomContent}>
        <p>© 2025 MBST. All rights reserved.</p>
      </div>
    </footer>
  );
}
