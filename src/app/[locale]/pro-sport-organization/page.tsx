import { Locale } from "@/lib/i18n-config";
import styles from "./page.module.css";
import { getIntl } from "@/lib/intl";
import Link from "next/link";
import Flex from "@/components/Flex";

type PageProps = {
  params: { locale: Locale };
};

export default function Page({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);
  return (
    <main className={styles.main}>
      <h1>{formatMessage({ id: "pro.sport.organization.page.header" })}</h1>
      <h6>{formatMessage({ id: "pro.sport.organization.page.sub.header" })}</h6>
      <h2>{formatMessage({ id: "pro.sport.organization.page.header.one" })}</h2>
      <p>
        {formatMessage({ id: "pro.sport.organization.page.paragraph.one" })}
      </p>
      <h2>{formatMessage({ id: "pro.sport.organization.page.header.two" })}</h2>
      <p>
        {formatMessage({ id: "pro.sport.organization.page.paragraph.two" })}
      </p>
      <h2>
        {formatMessage({ id: "pro.sport.organization.page.header.three" })}
      </h2>
      <p>
        {formatMessage({ id: "pro.sport.organization.page.paragraph.three" })}
      </p>
      <h2>
        {formatMessage({ id: "pro.sport.organization.page.header.four" })}
      </h2>
      <p>
        {formatMessage({ id: "pro.sport.organization.page.paragraph.four" })}
      </p>
      <h2>
        {formatMessage({ id: "pro.sport.organization.page.header.five" })}
      </h2>
      <p>
        {formatMessage({ id: "pro.sport.organization.page.paragraph.five" })}
      </p>
      <h2>{formatMessage({ id: "pro.sport.organization.page.header.six" })}</h2>
      <p>
        {formatMessage({ id: "pro.sport.organization.page.paragraph.six" })}
      </p>
      <h2>
        {formatMessage({ id: "pro.sport.organization.page.header.seven" })}
      </h2>
      <p>
        {formatMessage({ id: "pro.sport.organization.page.paragraph.seven" })}
      </p>
      <br />

      <hr />

      <Flex flexDirection="column" alignItems="center">
        <p>
          {formatMessage({
            id: "pro.sport.organization.signup.call.to.action",
          })}
        </p>
        <Link
          className={`button-like ${styles.signup}`}
          href="https://admin.mefit.pro/onboarding"
        >
          {formatMessage({ id: "signup.call.to.action" })}
        </Link>
      </Flex>
    </main>
  );
}
