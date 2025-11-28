import React from "react";
import Button from "@components/button";
import routes from "@utils/routes";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  AiOutlineCreditCard,
  AiOutlineCustomerService,
  AiOutlineSafety,
} from "react-icons/ai";
import { HiOutlineTruck } from "react-icons/hi";
import FeaturedProducts from "./components/featuredProducts";
import InfoCard from "./components/infoCard";
import styles from "./home.module.sass";

export default function HomeView() {
  const router = useRouter();
  const handleShopNowClick = () => router.push(routes.catalog.main);

  return (
    <div className={styles.wrapper}>
      <section className={styles.hero} aria-label="hero-section">
        <div className={styles.left}>
          <div className={styles.text}>
            <h1>Find your next smartphone today</h1>
            <p>Smartphones with warranty, secure and fast delivery</p>
          </div>
          <Button
            style="Primary"
            onClick={handleShopNowClick}
            aria-label="Shop Now"
          >
            Shop Now
          </Button>
        </div>
        <div className={styles.image}>
          <Image
            src="/assets/mobile.png"
            width={500}
            height={500}
            alt="Featured smartphone"
            priority
          />
        </div>
      </section>
      <section className={styles.additionalInfo} aria-label="benefits">
        <h2>Why Choose MBST</h2>
        <div className={styles.infoCards}>
          <InfoCard
            label="Fast Shipping"
            tooltip="Get your phone delivered within 24 hours!"
          >
            <HiOutlineTruck size={30} color="white" />
          </InfoCard>
          <InfoCard
            label="Secure Payment"
            tooltip="Your payment info is safe with us"
          >
            <AiOutlineCreditCard size={30} color="white" />
          </InfoCard>
          <InfoCard label="24/7 Support" tooltip="We are here for you anytime">
            <AiOutlineCustomerService size={30} color="white" />
          </InfoCard>
          <InfoCard
            label="Warranty Included"
            tooltip="All products come with warranty"
          >
            <AiOutlineSafety size={30} color="white" />
          </InfoCard>
        </div>
      </section>
      <section className={styles.about} aria-label="about-mbst">
        <h2>About MBST</h2>
        <div className={styles.content}>
          <p>
            MBST is a leading provider of mobile devices, offering a wide range of
            smartphones with cutting-edge technology and sleek designs. Our mission
            is to bring high-quality devices to everyone, paired with exceptional
            service.
          </p>
          <p>
            We pride ourselves on delivering a seamless shopping experience: from
            lightning-fast shipping to secure payments and responsive 24/7 support.
            Every device in our catalog is carefully curated to ensure optimal
            performance, reliability, and value for our customers.
          </p>
          <p>
            Whether you're seeking the newest flagship model or a budget-friendly
            option, MBST helps you find the perfect smartphone for your lifestyle.
            Join thousands of satisfied customers who trust us for quality,
            convenience, and unmatched care.
          </p>
          <Button style="Standard" onClick={() => router.push(routes.catalog.main)}>
            Explore Our Catalog
          </Button>
        </div>
      </section>
      <section
        className={styles.featuredProducts}
        aria-label="featured-products"
      >
        <h2>Featured Smartphones</h2>
        <FeaturedProducts limit={6} />
        <Button
          style="Primary"
          onClick={handleShopNowClick}
          aria-label="Go to Catalog"
        >
          View All Products
        </Button>
      </section>
      <section className={styles.action} aria-label="cta-section">
        <h2>Ready to upgrade your phone?</h2>
        <p>Explore our full catalog now and find your perfect device.</p>
        <Button
          style="Primary"
          onClick={handleShopNowClick}
          aria-label="Go to Catalog"
        >
          Go to Catalog
        </Button>
      </section>
    </div>
  );
}
