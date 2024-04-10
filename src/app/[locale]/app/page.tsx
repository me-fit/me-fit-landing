import { Locale } from "@/lib/intl";
import styles from "./page.module.css";
import { getIntl } from "@/lib/intl";
import AppBenefits from "@/components/AppBenefits/AppBenefits";
import Flex from "@/components/Flex/Flex";
import Image from "next/image";
import TestimonialsList from "@/components/TestimonialsList/TestimonialsList";
import StoreButtons from "@/components/StoreButtons/StoreButtons";
type PageProps = {
  params: { locale: Locale };
};

export default function Page({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);
  return (
    <main>
      <section className={`${styles.firstSection} light-background`}>
        <Flex
          gap="1rem"
          rowGap="4rem"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
        >
          <div className={styles.firstSectionLeftBlock}>
            <h4>{formatMessage({ id: "mefit.app.page.header.one" })}</h4>
            <h2>{formatMessage({ id: "mefit.app.page.header.two" })}</h2>
            <p>{formatMessage({ id: "mefit.app.page.paragraph" })}</p>

            <StoreButtons locale={locale} />
          </div>

          <Image
            className={styles.appMainScreenshot}
            priority={true}
            src="/img/me-fit-app-2-devices-screenshots.png"
            alt={formatMessage({
              id: "mefit.app.page.photo.alt.text",
            })}
            width={1743}
            height={2076}
          />
        </Flex>
      </section>

      <section className={styles.benefits}>
        <Flex flexDirection="column" alignItems="center">
          <h4>
            {formatMessage({
              id: "mefit.app.page.benefits.header",
            })}
          </h4>
          <h1 className="text-align-center">
            {formatMessage({
              id: "mefit.app.page.benefits.header.subheader",
            })}
          </h1>
          <AppBenefits locale={locale} />
        </Flex>
      </section>

      <section className={styles.screenshots}>
        <Flex justifyContent="center" gap="2rem" flexWrap="wrap">
          <Image
            className={styles.screenshot}
            width={384}
            height={792}
            alt=""
            src="/img/me-fit-app-workout.jpg"
          ></Image>
          <Image
            className={styles.screenshot}
            width={384}
            height={792}
            alt=""
            src="/img/me-fit-app-exercise.jpg"
          ></Image>
          <Image
            className={styles.screenshot}
            width={384}
            height={792}
            alt=""
            src="/img/me-fit-app-calendar.jpg"
          ></Image>
        </Flex>
      </section>

      <section className="light-background">
        <Flex flexDirection="column" alignItems="center">
          <h4>{formatMessage({ id: "testimonials.subheader" })}</h4>
          <h2>{formatMessage({ id: "testimonials.header" })}</h2>
          <p className="no-margin">
            {formatMessage({
              id: "testimonials.paragraph",
            })}
          </p>

          <TestimonialsList />
        </Flex>
      </section>
    </main>
  );
}
