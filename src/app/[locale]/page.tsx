import { Metadata, ResolvingMetadata } from "next";

import { getIntl } from "../../lib/intl";
import styles from "./page.module.css";
import { Locale } from "@/lib/i18n-config";
import Image from "next/image";
import Flex from "@/components/Flex";

type RouteProps = {
  params: { locale: Locale };
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata(
  props: RouteProps,
  parent: ResolvingMetadata
): Metadata {
  const intl = getIntl(props.params.locale);

  return {
    title: intl.formatMessage({ id: "page.home.header.one" }),
    description: intl.formatMessage({
      id: "page.home.header.one",
    }),
    alternates: {
      canonical: "https://example.com",
      languages: {
        ar: "http://example.com/ar",
        en: "http://example.com",
        fr: "http://example.com/fr",
        "nl-NL": "http://example.com/nl-NL",
        "x-default": "http://example.com",
      },
    },
  };
}

type HomeProps = {
  params: { locale: Locale };
};

export default function Home({ params: { locale } }: HomeProps) {
  const intl = getIntl(locale);

  return (
    <main className={styles.main}>
      <section className={styles.firstSection}>
        <Flex gap="1rem" flexWrap="wrap" justifyContent="space-between">
          <div className={styles.firstSectionLeftBlock}>
            <h6 className={styles.title}>
              {intl.formatMessage({ id: "page.home.header.one" })}
            </h6>

            <h2>{intl.formatMessage({ id: "page.home.header.two" })}</h2>

            <p>
              {intl.formatMessage({
                id: "page.home.paragraph.one",
              })}
            </p>

            <ul>
              <li>
                {intl.formatMessage({
                  id: "page.home.paragraph.list.one",
                })}
              </li>
              <li>
                {intl.formatMessage({
                  id: "page.home.paragraph.list.two",
                })}
              </li>
              <li>
                {intl.formatMessage({
                  id: "page.home.paragraph.list.three",
                })}
              </li>
              <li>
                {intl.formatMessage({
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, porro
        veniam error adipisci earum praesentium reiciendis fugiat ab a nihil
        expedita. Nostrum, est! Perspiciatis dolorem fugit velit sed, expedita
        ipsum?
      </section>

      <section>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, porro
        veniam error adipisci earum praesentium reiciendis fugiat ab a nihil
        expedita. Nostrum, est! Perspiciatis dolorem fugit velit sed, expedita
        ipsum?
      </section>
    </main>
  );
}
