import { Locale } from "@/lib/intl";
import { getIntl } from "@/lib/intl";
import Link from "next/link";
import Flex from "@/components/Flex/Flex";
import Image from "next/image";
import styles from "./amateur-sport.module.css";
import HeroSection from "@/components/HeroSection/HeroSection";
import Divider from "@/components/Divider/Divider";

type PageProps = {
  params: { locale: Locale };
};

export default function AmateurSportPage({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);

  return (
    <main className={styles.main}>
      <HeroSection
        header={formatMessage({ id: "amateur.sports.page.header" })}
        subHeader={formatMessage({ id: "amateur.sports.page.sub.header" })}
        text={formatMessage({ id: "amateur.sports.page.header.one" })}
        imageSrc="/img/me-fit-app-login.png"
        variant="light"
      />

      <HeroSection
        header={formatMessage({ id: "amateur.sports.page.header.two" })}
        text={formatMessage({ id: "amateur.sports.page.paragraph.two" })}
        imageSrc="/img/me-fit-app-home.png"
        reverse={true}
        variant="dark"
      />

      <HeroSection
        header={formatMessage({ id: "amateur.sports.page.header.three" })}
        text={formatMessage({ id: "amateur.sports.page.paragraph.three" })}
        imageSrc="/img/me-fit-app-workout-details.png"
        variant="light"
      />

      <HeroSection
        header={formatMessage({ id: "amateur.sports.page.header.four" })}
        text={formatMessage({ id: "amateur.sports.page.paragraph.four" })}
        imageSrc="/img/me-fit-app-calendar.png"
        reverse={true}
        variant="dark"
      />
      <HeroSection
        header={formatMessage({ id: "amateur.sports.page.header.five" })}
        text={formatMessage({  id: "amateur.sports.page.paragraph.five" })}
        imageSrc="/img/me-fit-app-workout-step.png"
        variant="light"
      />
      <section className={styles.ctaSection}>
        <Flex flexDirection="column" alignItems="center" gap="1rem">
          <Divider />
          <p>{formatMessage({ id: "amateur.sports.page.header.six" })}</p>
          <Link className="button" href="contact">
            {formatMessage({ id: "contact.us" })}
          </Link>
        </Flex>
      </section>
    </main>
  );
}
