import { Locale } from "@/lib/intl";
import { getIntl } from "@/lib/intl";
import Link from "next/link";
import Flex from "@/components/Flex/Flex";
import Image from "next/image";
import styles from "./pro-sport-organization.module.css";
import HeroSection from "@/components/HeroSection/HeroSection";
import Divider from "@/components/Divider/Divider";

type PageProps = {
  params: { locale: Locale };
};

export default function ProSportOrganizationPage({
  params: { locale },
}: PageProps) {
  const { formatMessage } = getIntl(locale);

  return (
    <main className={styles.main}>
      <HeroSection
        header={formatMessage({ id: "pro.sport.organization.page.header" })}
        subHeader={formatMessage({
          id: "pro.sport.organization.page.sub.header",
        })}
        highlight={formatMessage({
          id: "pro.sport.organization.page.header.one",
        })}
        text={formatMessage({
          id: "pro.sport.organization.page.paragraph.one",
        })}
        imageSrc="/img/me-fit-pro-groups.png"
        variant="light"
      />
      <HeroSection
        header={formatMessage({ id: "pro.sport.organization.page.header.two" })}
        text={formatMessage({
          id: "pro.sport.organization.page.paragraph.two",
        })}
        imageSrc="/img/me-fit-pro-workouts.png"
        variant="dark"
        reverse={true}
      />
      <HeroSection
        header={formatMessage({
          id: "pro.sport.organization.page.header.three",
        })}
        text={formatMessage({
          id: "pro.sport.organization.page.paragraph.three",
        })}
        imageSrc="/img/me-fit-pro-exercise-library.png"
        variant="light"
      />
      <HeroSection
        header={formatMessage({
          id: "pro.sport.organization.page.header.four",
        })}
        text={formatMessage({
          id: "pro.sport.organization.page.paragraph.four",
        })}
        imageSrc="/img/me-fit-pro-calendar-filled.png"
        variant="dark"
        reverse={true}
      />
      <HeroSection
        header={formatMessage({
          id: "pro.sport.organization.page.header.five",
        })}
        text={formatMessage({
          id: "pro.sport.organization.page.paragraph.five",
        })}
        imageSrc="/img/me-fit-pro-customer-notes.png"
        variant="light"
      />
      <HeroSection
        header={formatMessage({ id: "pro.sport.organization.page.header.six" })}
        text={formatMessage({
          id: "pro.sport.organization.page.paragraph.six",
        })}
        imageSrc="/img/me-fit-pro-exercises.png"
        variant="dark"
        reverse={true}
      />
      <HeroSection
        header={formatMessage({
          id: "pro.sport.organization.page.header.seven",
        })}
        text={formatMessage({
          id: "pro.sport.organization.page.paragraph.seven",
        })}
        imageSrc="/img/me-fit-pro-workout-details-front.png"
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
