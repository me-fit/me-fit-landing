import Flex from "@/components/Flex/Flex";
import ProBenefits from "@/components/ProBenefits/ProBenefits";
import { Locale } from "@/lib/intl";
import Image from "next/image";
import Link from "next/link";
import { getIntl } from "../../lib/intl";
import styles from "./page.module.css";
import BoltIcon from "@/components/icons/BoltIcon";
import CustomersList from "@/components/CustomersList/CustomersList";
import ProFeatures from "@/components/ProFeatures/ProFeatures";

type HomeProps = {
  params: { locale: Locale };
};

export default function Home({ params: { locale } }: HomeProps) {
  const { formatMessage } = getIntl(locale);

  return (
    <main className={styles.main}>
      <section className={`${styles.firstSection}`}>
        <Flex
          gap="1rem"
          rowGap="4rem"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <div className={styles.firstSectionLeftBlock}>
            <h4>{formatMessage({ id: "mefit.pro.page.header.one" })}</h4>

            <h2>{formatMessage({ id: "mefit.pro.page.header.two" })}</h2>

            <p>
              {formatMessage({
                id: "mefit.pro.page.paragraph.one",
              })}
            </p>

            <ul>
              <li>
                {formatMessage({
                  id: "mefit.pro.page.paragraph.list.one",
                })}
              </li>
              <li>
                {formatMessage({
                  id: "mefit.pro.page.paragraph.list.two",
                })}
              </li>
              <li>
                {formatMessage({
                  id: "mefit.pro.page.paragraph.list.three",
                })}
              </li>
              <li>
                {formatMessage({
                  id: "mefit.pro.page.paragraph.list.four",
                })}
              </li>
            </ul>

            <Link
              className={`button ${styles.signup}`}
              href="https://admin.mefit.pro/onboarding"
            >
              {formatMessage({ id: "signup.call.to.action" })}
            </Link>

            <Flex gap="1rem" alignItems="center">
              <BoltIcon />
              {formatMessage({ id: "mefit.pro.page.signup.callout" })}
            </Flex>
          </div>

          <Image
            className={styles["me-fit-pro-exercise-library"]}
            priority={true}
            src="/img/me-fit-pro-exercise-library.png"
            alt={formatMessage({
              id: "mefit.pro.exercise.library.screenshot.alt",
            })}
            width={1278}
            height={685}
          />
        </Flex>
      </section>

      <section className={"light-background no-padding"}>
        <ProFeatures locale={locale} />
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

      <section className={"light-background"}>
        <Flex flexDirection="column" alignItems="center">
          <h4>
            {formatMessage({
              id: "mefit.pro.page.customers.header",
            })}
          </h4>
          <h1 className={"text-align-center"}>
            {formatMessage({
              id: "mefit.pro.page.customers.subheader",
            })}
          </h1>
        </Flex>

        <CustomersList className={styles.customersList} locale={locale} />
      </section>
    </main>
  );
}
