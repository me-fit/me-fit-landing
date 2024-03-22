import Link from "next/link";

import Image from "next/image";
import { getIntl } from "@/lib/intl";
import { Locale, i18n } from "@/lib/i18n-config";
import styles from "./Header.module.css";
import Flex from "../Flex";

interface HeaderProps {
  locale: Locale;
}

function Header({locale}: HeaderProps) {
  const { locales, defaultLocale } = i18n;
  const {formatMessage} = getIntl(defaultLocale);
  return (
    <header className={styles.header}>
      <Flex
        className={styles.container}
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/">
          <Image
            className={styles.logo}
            width={115}
            height={106}
            src="/img/me-fit-logo-white-background.svg"
            alt="ME Fit Logo"
          ></Image>
        </Link>

        <Flex alignItems="center" gap="1rem">
          <Link
            className={`button-like button-on-dark ${styles.signup}`}
            href="https://admin.mefit.pro/onboarding"
          >
            {formatMessage({ id: "signup.call.to.action" })}
          </Link>
          <Link className={` ${styles.login}`} href="https://admin.mefit.pro">
            {formatMessage({ id: "login.call.to.action" })}
          </Link>
        </Flex>
      </Flex>

      {/* <div className="languages">
        {[...locales].sort().map((locale) => (
          <Link
            key={locale}
            href={locale === defaultLocale ? "/" : `/${locale}`}
          >
            {locale}
          </Link>
        ))}
      </div> */}

      {/* <Link href={'/me-fit-pro'}>
            ME Fit Pro
      </Link> */}
    </header>
  );
}

export default Header;
