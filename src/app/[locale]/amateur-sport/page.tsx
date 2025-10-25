import { Locale } from "@/lib/intl";
import { getIntl } from "@/lib/intl";
import Link from "next/link";
import Flex from "@/components/Flex/Flex";
import Image from "next/image";
import styles from "./amateur-sport.module.css";

type PageProps = {
  params: { locale: Locale };
};

export default function AmateurSportPage({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);

  return (
    <main className={styles.main}>
      <section className={styles.firstSection}>
        <Flex className={styles.sectionContainer}>
          <div className={styles.textContent}>
            <h1>{formatMessage({ id: "amateur.sports.page.header" })}</h1>
            <h5>{formatMessage({ id: "amateur.sports.page.sub.header" })}</h5>
            <p>{formatMessage({ id: "amateur.sports.page.header.one" })}</p>
          </div>
          <Image
            src="/img/me-fit-app-login.png"
            alt="Login Screen"
            width={900}
            height={700}
            className={styles.proMainScreenshot}
          />
        </Flex>
      </section>

      <section className={styles.altSection}>
        <Flex className={styles.sectionContainer}>
          <div className={styles.textContent}>
            <h2>{formatMessage({ id: "amateur.sports.page.header.two" })}</h2>
            <p>{formatMessage({ id: "amateur.sports.page.paragraph.two" })}</p>
          </div>
          <Image
            src="/img/me-fit-app-home.png"
            alt="Home Screen"
            width={900}
            height={700}
            className={styles.proMainScreenshot}
          />
        </Flex>
      </section>

      <section className={styles.firstSection}>
        <Flex className={styles.sectionContainer}>
          <div className={styles.textContent}>
            <h2>{formatMessage({ id: "amateur.sports.page.header.three" })}</h2>
            <p>
              {formatMessage({ id: "amateur.sports.page.paragraph.three" })}
            </p>
          </div>
          <Image
            src="/img/me-fit-app-workout-details.png"
            alt="Workout Details"
            width={900}
            height={700}
            className={styles.proMainScreenshot}
          />
        </Flex>
      </section>

      <section className={styles.altSection}>
        <Flex className={styles.sectionContainer}>
          <div className={styles.textContent}>
            <h2>{formatMessage({ id: "amateur.sports.page.header.four" })}</h2>
            <p>{formatMessage({ id: "amateur.sports.page.paragraph.four" })}</p>
          </div>
          <Image
            src="/img/me-fit-app-calendar.png"
            alt="Calendar"
            width={900}
            height={700}
            className={styles.proMainScreenshot}
          />
        </Flex>
      </section>

      <section className={styles.firstSection}>
        <Flex className={styles.sectionContainer}>
          <div className={styles.textContent}>
            <h2>{formatMessage({ id: "amateur.sports.page.header.five" })}</h2>
            <p>{formatMessage({ id: "amateur.sports.page.paragraph.five" })}</p>
          </div>
          <Image
            src="/img/me-fit-app-workout-step.png"
            alt="Workout Step"
            width={900}
            height={700}
            className={styles.proMainScreenshot}
          />
        </Flex>
      </section>

      <section className={styles.ctaSection}>
        <Flex flexDirection="column" alignItems="center" gap="1rem">
          <div className={styles.yellowLine}></div>
          <p>{formatMessage({ id: "amateur.sports.page.header.six" })}</p>
          <Link className="button" href="contact">
            {formatMessage({ id: "contact.us" })}
          </Link>
        </Flex>
      </section>
    </main>
  );
}
