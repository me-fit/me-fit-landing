import { Locale } from "@/lib/intl";
import { getIntl } from "@/lib/intl";
import Link from "next/link";
import Flex from "@/components/Flex/Flex";
import Image from "next/image";
import styles from "./physiotherapy.module.css";

type PageProps = {
  params: { locale: Locale };
};

export default function PhysiotherapyPage({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);

  return (
    <main className={styles.main}>
      <section className={styles.firstSection}>
        <Flex className={styles.sectionContainer}>
          <div className={styles.textContent}>
            <h1>{formatMessage({ id: "physiotherapy.page.header" })}</h1>
            <h5>{formatMessage({ id: "physiotherapy.page.sub.header" })}</h5>
            <p>{formatMessage({ id: "physiotherapy.page.paragraph.one" })}</p>
          </div>
          <Image
            src="/img/me-fit-pro-exercise-library.png"
            alt="Exercise Library"
            width={900}
            height={700}
            className={styles.proMainScreenshot}
          />
        </Flex>
      </section>

      <section className={styles.altSection}>
        <Flex className={styles.sectionContainer}>
          <div className={styles.textContent}>
            <h2>{formatMessage({ id: "physiotherapy.page.header.two" })}</h2>
            <p>{formatMessage({ id: "physiotherapy.page.paragraph.two" })}</p>
          </div>
          <Image
            src="/img/me-fit-pro-workouts.png"
            alt="Workouts"
            width={900}
            height={700}
            className={styles.proMainScreenshot}
          />
        </Flex>
      </section>

      <section className={styles.firstSection}>
        <Flex className={styles.sectionContainer}>
          <div className={styles.textContent}>
            <h2>{formatMessage({ id: "physiotherapy.page.header.three" })}</h2>
            <p>{formatMessage({ id: "physiotherapy.page.paragraph.three" })}</p>
          </div>
          <Image
            src="/img/me-fit-pro-calendar-filled.png"
            alt="Calendar"
            width={900}
            height={700}
            className={styles.proMainScreenshot}
          />
        </Flex>
      </section>

      <section className={styles.altSection}>
        <Flex className={styles.sectionContainer}>
          <div className={styles.textContent}>
            <h2>{formatMessage({ id: "physiotherapy.page.header.four" })}</h2>
            <p>{formatMessage({ id: "physiotherapy.page.paragraph.four" })}</p>
          </div>
          <Image
            src="/img/me-fit-pro-workout-details-front.png"
            alt="Workout Details"
            width={900}
            height={700}
            className={styles.proMainScreenshot}
          />
        </Flex>
      </section>

      <section className={styles.ctaSection}>
        <Flex flexDirection="column" alignItems="center" gap="1rem">
          <div className={styles.yellowLine}></div>
          <p>{formatMessage({ id: "explore.advantages.text" })}</p>
          <Link className="button" href="https://admin.mefit.pro/onboarding">
            {formatMessage({ id: "signup.call.to.action" })}
          </Link>
        </Flex>
      </section>
    </main>
  );
}
