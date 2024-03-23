import Flex from "@/components/Flex/Flex";
import ProBenefits from "@/components/ProBenefits/ProBenefits";
import { Locale } from "@/lib/intl";
import Image from "next/image";
import Link from "next/link";
import { getIntl } from "../../lib/intl";
import styles from "./page.module.css";


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
              {formatMessage({ id: "mefit.pro.page.header.one" })}
            </h4>

            <h2>{formatMessage({ id: "mefit.pro.page.header.two" })}</h2>

            <p>
              {formatMessage({
                id: "mefit.pro.page.paragraph.one",
              })}
            </p>

            <ul>
              <li>
                <Link href="/physiotherapy">
                  {formatMessage({
                    id: "mefit.pro.page.paragraph.list.one",
                  })}
                </Link>
              </li>
              <li>
                <Link href="/personal-training">
                  {formatMessage({
                    id: "mefit.pro.page.paragraph.list.two",
                  })}
                </Link>
              </li>
              <li>
                <Link href="pro-sport-organization">
                  {formatMessage({
                    id: "mefit.pro.page.paragraph.list.three",
                  })}
                </Link>
              </li>
              <li>
                <Link href="/amateur-sport">
                  {formatMessage({
                    id: "mefit.pro.page.paragraph.list.four",
                  })}
                </Link>
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
              id: "mefit.pro.page.benefits.header",
            })}
          </h4>
          <h1 className="text-align-center">
            {formatMessage({
              id: "mefit.pro.page.benefits.subheader",
            })}
          </h1>
          <ProBenefits locale={locale} />
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
