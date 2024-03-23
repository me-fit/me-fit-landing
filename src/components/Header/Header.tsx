import Link from "next/link";

import Image from "next/image";
import { getIntl } from "@/lib/intl";
import { Locale, i18n } from "@/lib/i18n-config";
import styles from "./Header.module.css";
import Flex from "../Flex";

interface HeaderProps {
  locale: Locale;
}

function Header({ locale }: HeaderProps) {
  const { locales, defaultLocale } = i18n;
  const { formatMessage } = getIntl(defaultLocale);
  return (
    <header className={styles.header}>
      <Flex className={styles.container} alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Image
            className={styles.logo}
            width={115}
            height={106}
            src="/img/me-fit-logo-white-background.svg"
            alt="ME Fit Logo"
          ></Image>
        </Link>

        <nav>
          <Flex alignItems="center" gap="1rem">
          <Link href="/">{formatMessage({ id: "mefit.pro" })}</Link>
            <div className={styles.dropdown}>
              <a tabIndex={0} className={styles.dropdownButton}>
                {formatMessage({ id: "header.solutions" })}
              </a>
              <div className={styles.dropdownWrapper}>
                <div className={styles.dropdownContent}>
                  <Link href="/physiotherapy">
                    {formatMessage({
                      id: "page.home.paragraph.list.one",
                    })}
                  </Link>
                  <Link href="/personal-training">
                    {formatMessage({
                      id: "page.home.paragraph.list.two",
                    })}
                  </Link>
                  <Link href="pro-sport-organization">
                    {formatMessage({
                      id: "page.home.paragraph.list.three",
                    })}
                  </Link>
                  <Link href="/amateur-sport">
                    {formatMessage({
                      id: "page.home.paragraph.list.four",
                    })}
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/app">{formatMessage({ id: "mefit.app" })}</Link>
            <Link href="/contact">{formatMessage({ id: "contact.us" })}</Link>
          </Flex>
        </nav>

        <Flex alignItems="center" gap="1rem" className={styles.headerButtons}>
          <Link
            className={`button button-on-dark ${styles.signup}`}
            href="https://admin.mefit.pro/onboarding"
          >
            {formatMessage({ id: "signup.call.to.action" })}
          </Link>
          <Link
            className={` ${styles.login} button button-on-dark secondary`}
            href="https://admin.mefit.pro"
          >
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
