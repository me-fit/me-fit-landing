import { Locale } from "@/lib/intl";
import { getIntl } from "@/lib/intl";
import Link from "next/link";
import Flex from "@/components/Flex/Flex";
import Image from "next/image";
import styles from "./pro-sport-organization.module.css";

type PageProps = {
  params: { locale: Locale };
};

export default function ProSportOrganizationPage({
  params: { locale },
}: PageProps) {
  const { formatMessage } = getIntl(locale);

  return (
    <main className={styles.main}>
      <section className={styles.firstSection}>
        <Flex className={styles.sectionContainer}>
          <div className={styles.textContent}>
            <h1>
              {formatMessage({ id: "pro.sport.organization.page.header" })}
            </h1>
            <h5>
              {formatMessage({ id: "pro.sport.organization.page.sub.header" })}
            </h5>
            <h2>
              {formatMessage({ id: "pro.sport.organization.page.header.one" })}
            </h2>
            <p>
              {formatMessage({
                id: "pro.sport.organization.page.paragraph.one",
              })}
            </p>
          </div>
          <Image
            src="/img/me-fit-pro-groups.png"
            alt="Groups"
            width={900}
            height={700}
            className={styles.proMainScreenshot}
          />
        </Flex>
      </section>

      <section className={styles.altSection}>
        <Flex className={styles.sectionContainer}>
          <div className={styles.textContent}>
            <h2>
              {formatMessage({ id: "pro.sport.organization.page.header.two" })}
            </h2>
            <p>
              {formatMessage({
                id: "pro.sport.organization.page.paragraph.two",
              })}
            </p>
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
            <h2>
              {formatMessage({
                id: "pro.sport.organization.page.header.three",
              })}
            </h2>
            <p>
              {formatMessage({
                id: "pro.sport.organization.page.paragraph.three",
              })}
            </p>
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
            <h2>
              {formatMessage({ id: "pro.sport.organization.page.header.four" })}
            </h2>
            <p>
              {formatMessage({
                id: "pro.sport.organization.page.paragraph.four",
              })}
            </p>
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

      <section className={styles.firstSection}>
        <Flex className={styles.sectionContainer}>
          <div className={styles.textContent}>
            <h2>
              {formatMessage({ id: "pro.sport.organization.page.header.five" })}
            </h2>
            <p>
              {formatMessage({
                id: "pro.sport.organization.page.paragraph.five",
              })}
            </p>
          </div>
          <Image
            src="/img/me-fit-pro-customer-notes.png"
            alt="Customer Notes"
            width={900}
            height={700}
            className={styles.proMainScreenshot}
          />
        </Flex>
      </section>

      <section className={styles.altSection}>
        <Flex className={styles.sectionContainer}>
          <div className={styles.textContent}>
            <h2>
              {formatMessage({ id: "pro.sport.organization.page.header.six" })}
            </h2>
            <p>
              {formatMessage({
                id: "pro.sport.organization.page.paragraph.six",
              })}
            </p>
          </div>
          <Image
            src="/img/me-fit-pro-exercises.png"
            alt="Exercises"
            width={900}
            height={700}
            className={styles.proMainScreenshot}
          />
        </Flex>
      </section>

      <section className={styles.firstSection}>
        <Flex className={styles.sectionContainer}>
          <div className={styles.textContent}>
            <h2>
              {formatMessage({
                id: "pro.sport.organization.page.header.seven",
              })}
            </h2>
            <p>
              {formatMessage({
                id: "pro.sport.organization.page.paragraph.seven",
              })}
            </p>
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
          <p>
            {formatMessage({
              id: "pro.sport.organization.signup.call.to.action",
            })}
          </p>
          <Link className="button" href="https://admin.mefit.pro/onboarding">
            {formatMessage({ id: "signup.call.to.action" })}
          </Link>
        </Flex>
      </section>
    </main>
  );
}
