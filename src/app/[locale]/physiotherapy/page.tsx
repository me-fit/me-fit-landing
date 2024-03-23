import { Locale } from "@/lib/i18n-config";
import styles from "./page.module.css";
import { getIntl } from "@/lib/intl";
import Link from "next/link";
import Flex from "@/components/Flex";

type PageProps = {
  params: { locale: Locale };
};

export default function Page({ params: { locale } }: PageProps) {
  const {formatMessage} = getIntl(locale);
  return (
    <main className={`${styles.main} light-background`}>
      <h1>{formatMessage({ id: "physiotherapy.page.header" })}</h1>
      <h6>{formatMessage({ id: "physiotherapy.page.sub.header" })}</h6>
      <h2>{formatMessage({ id: "physiotherapy.page.header.one" })}</h2>
      <p>{formatMessage({ id: "physiotherapy.page.paragraph.one" })}</p>
      <h2>{formatMessage({ id: "physiotherapy.page.header.two" })}</h2>
      <p>{formatMessage({ id: "physiotherapy.page.paragraph.two" })}</p>
      <h2>{formatMessage({ id: "physiotherapy.page.header.three" })}</h2>
      <p>{formatMessage({ id: "physiotherapy.page.paragraph.three" })}</p>
      <h2>{formatMessage({ id: "physiotherapy.page.header.four" })}</h2>
      <p>{formatMessage({ id: "physiotherapy.page.paragraph.four" })}</p>

      <br />

      <hr />

      <Flex flexDirection="column" alignItems="center">
        <p>{formatMessage({ id: "explore.advantages.text" })}</p>
        <Link
          className={`button ${styles.signup}`}
          href="https://admin.mefit.pro/onboarding"
        >
          {formatMessage({ id: "signup.call.to.action" })}
        </Link>
      </Flex>
    </main>
  );
}
