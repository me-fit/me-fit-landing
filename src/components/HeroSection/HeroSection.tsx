"use client";

import Image from "next/image";
import Flex from "@/components/Flex/Flex";
import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  header: string;
  subHeader?: string;
  highlight?: string;
  text: string;
  imageSrc: string;
  reverse?: boolean;
  variant?: "light" | "dark";
};

export default function HeroSection({
  header,
  subHeader,
  highlight,

  text,
  imageSrc,
  reverse = false,
  variant = "dark",
}: HeroSectionProps) {
  return (
    <section
      className={`${styles.section} ${
        variant === "light" ? styles.light : styles.dark
      }`}
    >
      <Flex className={`${styles.container} ${reverse ? styles.reverse : ""}`}>
        <div className={styles.text}>
          <h1>{header}</h1>
          {subHeader && <h5>{subHeader}</h5>}
          {highlight && <h2>{highlight}</h2>}
          <p>{text}</p>
        </div>

        <Image
          src={imageSrc}
          alt={header}
          width={900}
          height={700}
          className={styles.image}
        />
      </Flex>
    </section>
  );
}
