import { Locale } from "@/lib/i18n-config";
import styles from "./page.module.css";
import { getIntl } from "@/lib/intl";
import AppBenefits from "@/components/AppBenefits/AppBenefits";
import Flex from "@/components/Flex";
import Image from "next/image";
type PageProps = {
  params: { locale: Locale };
};

export default function Page({ params: { locale } }: PageProps) {
  const {formatMessage} = getIntl(locale);
  return (
    <main>
      <section className={styles.padding}>
        <h1>{formatMessage({ id: "mefit.app.page.title" })}</h1>
        <p>{formatMessage({ id: "mefit.app.page.paragraph.one" })}</p>
        <p>{formatMessage({ id: "mefit.app.page.paragraph.two" })}</p>
        <p>{formatMessage({ id: "mefit.app.page.paragraph.three" })}</p>
      </section>

      <section className={styles.benefits}>
        <Flex flexDirection="column" alignItems="center">
          <h4>
            {formatMessage({
              id: "mefit.app.page.benefits.header",
            })}
          </h4>
          <h1>
            {formatMessage({
              id: "mefit.app.page.benefits.header.subheader",
            })}
          </h1>
          <AppBenefits locale={locale} />
        </Flex>
      </section>

      <section className={styles.screenshots}>
        <Flex justifyContent="center" gap="2rem">
          <Image
            width={384}
            height={792}
            alt=""
            src="/img/me-fit-app-workout.jpg"
          ></Image>
          <Image
            width={384}
            height={792}
            alt=""
            src="/img/me-fit-app-exercise.jpg"
          ></Image>
          <Image
            width={384}
            height={792}
            alt=""
            src="/img/me-fit-app-calendar.jpg"
          ></Image>
        </Flex>
      </section>
    </main>
  );
}
