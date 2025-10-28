import { Locale } from "@/lib/intl";
import { getIntl } from "@/lib/intl";
import Link from "next/link";
import Flex from "@/components/Flex/Flex";
import Image from "next/image";
import ArticlePage from "@/components/ArticlePage/ArticlePage";
import styles from "./personal-traning.module.css";
import HeroSection from "@/components/HeroSection/HeroSection";
import Divider from "@/components/Divider/Divider";

type PageProps = {
  params: { locale: Locale };
};

export default function PersonalTrainingPage({
  params: { locale },
}: PageProps) {
  const { formatMessage } = getIntl(locale);

  return (
    <main className={styles.main}>
      <HeroSection
        header={formatMessage({ id: "personalTrainer.page.header" })}
        subHeader={formatMessage({ id: "personalTrainer.page.sub.header" })}
        text={formatMessage({ id: "personalTrainer.page.header.one" })}
        imageSrc="/img/me-fit-pro-workouts.png"
        variant="light"
      />
      <HeroSection
        header={formatMessage({ id: "personalTrainer.page.header.two" })}
        text={formatMessage({ id: "personalTrainer.page.paragraph.two" })}
        imageSrc="/img/me-fit-pro-workout-details-front.png"
        variant="dark"
        reverse={true}
      />
      <HeroSection
        header={formatMessage({ id: "personalTrainer.page.header.three" })}
        text={formatMessage({ id: "personalTrainer.page.paragraph.three" })}
        imageSrc="/img/me-fit-pro-calendar-filled.png"
        variant="light"
      />
      <HeroSection
        header={formatMessage({ id: "personalTrainer.page.header.four" })}
        text={formatMessage({ id: "personalTrainer.page.paragraph.four" })}
        imageSrc="/img/me-fit-pro-exercise-library.png"
        variant="dark"
        reverse={true}
      />
      <HeroSection
        header={formatMessage({ id: "personalTrainer.page.header.five" })}
        text={formatMessage({ id: "personalTrainer.page.paragraph.five" })}
        imageSrc="/img/me-fit-pro-exercises.png"
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
