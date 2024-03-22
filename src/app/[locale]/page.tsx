import { Metadata, ResolvingMetadata } from "next";

import AppBenefits from "@/components/AppBenefits/AppBenefits";
import Flex from "@/components/Flex";
import { Locale } from "@/lib/i18n-config";
import Image from "next/image";
import { getIntl } from "../../lib/intl";
import styles from "./page.module.css";

type RouteProps = {
  params: { locale: Locale };
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata(
  props: RouteProps,
  parent: ResolvingMetadata
): Metadata {
  const { formatMessage } = getIntl(props.params.locale);

  return {
    title: `ME Fit Pro | ${formatMessage({ id: "mefit.pro.landing" })}`,
    description
    openGraph: {},
  };
}

type HomeProps = {
  params: { locale: Locale };
};

export default function Home({ params: { locale } }: HomeProps) {
  const { formatMessage } = getIntl(locale);

  return (
    <main className={styles.main}>
      <section className={styles.firstSection}>
        <Flex gap="1rem" flexWrap="wrap" justifyContent="space-between">
          <div className={styles.firstSectionLeftBlock}>
            <h4 className={styles.title}>
              {formatMessage({ id: "page.home.header.one" })}
            </h4>

            <h2>{formatMessage({ id: "page.home.header.two" })}</h2>

            <p>
              {formatMessage({
                id: "page.home.paragraph.one",
              })}
            </p>

            <ul>
              <li>
                {formatMessage({
                  id: "page.home.paragraph.list.one",
                })}
              </li>
              <li>
                {formatMessage({
                  id: "page.home.paragraph.list.two",
                })}
              </li>
              <li>
                {formatMessage({
                  id: "page.home.paragraph.list.three",
                })}
              </li>
              <li>
                {formatMessage({
                  id: "page.home.paragraph.list.four",
                })}
              </li>
            </ul>
          </div>

          <Image
            className={styles["me-fit-pro-exercise-library"]}
            priority={true}
            src="/img/me-fit-pro-exercise-library.png"
            alt="ME Fit Pro Exercise Library"
            width={1278}
            height={685}
          />
        </Flex>
      </section>

      <section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, porro
        veniam error adipisci earum praesentium reiciendis fugiat ab a nihil
        expedita. Nostrum, est! Perspiciatis dolorem fugit velit sed, expedita
        ipsum?
      </section>

      <section>
        <Flex flexDirection="column" alignItems="center">
          <h4>
            {formatMessage({
              id: "page.home.benefits.header",
            })}
          </h4>
          <h1>
            {formatMessage({
              id: "page.home.benefits.subheader",
            })}
          </h1>
          <AppBenefits locale={locale} />
        </Flex>
      </section>

      <section>
        <h4>{formatMessage({ id: "testimonials.subheader" })}</h4>
        <h2>{formatMessage({ id: "testimonials.header" })}</h2>
        <p>
          {formatMessage({
            id: "testimonials.paragraph",
          })}
        </p>
      </section>
    </main>
  );
}
