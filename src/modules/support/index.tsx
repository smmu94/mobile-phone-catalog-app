import React from "react";
import ChannelCard from "./components/channelCard";
import FaqAccordion from "./components/faqAccordion";
import { FAQS, SUPPORT_CHANNELS } from "./constants";
import styles from "./support.module.sass";

export default function SupportView() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.hero} aria-label="hero-section">
        <div className={styles.text}>
          <h1>Need Help? We're here for you!</h1>
          <p>
            Choose your preferred way to get in touch. Our team is available
            24/7 to help with any questions or issues.
          </p>
        </div>
      </section>
      <section className={styles.channels}>
        <h2>Support Channels</h2>
        <p>Choose the method that works best for you</p>
        <div className={styles.channelCards}>
          {SUPPORT_CHANNELS.map((channel) => (
            <ChannelCard key={channel.id} {...channel} />
          ))}
        </div>
      </section>
      <section id="faq-section" className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <p>Can't find what you're looking for? Try our search.</p>
        <div className={styles.faqItems}>
          {FAQS.map((faq) => (
            <FaqAccordion key={faq.id} {...faq} />
          ))}
        </div>
      </section>
      <section>
        
      </section>
    </div>
  );
}
