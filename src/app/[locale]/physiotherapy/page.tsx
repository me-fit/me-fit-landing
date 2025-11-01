import { Locale } from "@/lib/intl";
import { getIntl } from "@/lib/intl";
import Link from "next/link";
import Flex from "@/components/Flex/Flex";
import Image from "next/image";
import styles from "./physiotherapy.module.css";
import HeroSection from "@/components/HeroSection/HeroSection";
import Divider from "@/components/Divider/Divider";

type PageProps = {
  params: { locale: Locale };
};

export default function PhysiotherapyPage({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);

  return (
    <main className={styles.main}>
      <HeroSection
        header={formatMessage({ id: "physiotherapy.page.header" })}
        subHeader={formatMessage({ id: "physiotherapy.page.sub.header" })}
        text={formatMessage({ id: "physiotherapy.page.paragraph.one" })}
        imageSrc="/img/me-fit-pro-exercise-library.png"
        variant="light"
      />
      <HeroSection
        header={formatMessage({ id: "physiotherapy.page.header.two" })}
        text={formatMessage({ id: "physiotherapy.page.paragraph.two" })}
        imageSrc="/img/me-fit-pro-workouts.png"
        reverse={true}
        variant="dark"
      />
      <HeroSection
        header={formatMessage({ id: "physiotherapy.page.header.three" })}
        text={formatMessage({ id: "physiotherapy.page.paragraph.three" })}
        imageSrc="/img/me-fit-pro-workouts.png"
        variant="light"
      />
      <HeroSection
        header={formatMessage({ id: "physiotherapy.page.header.four" })}
        text={formatMessage({ id: "physiotherapy.page.paragraph.four" })}
        imageSrc="/img/me-fit-pro-workout-details-front.png"
        reverse={true}
        variant="dark"
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
