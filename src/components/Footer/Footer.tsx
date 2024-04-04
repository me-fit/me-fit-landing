"use client";
import Link from "next/link";

import Image from "next/image";
import { Locale, getIntl } from "@/lib/intl";
import styles from "./Footer.module.css";
import Flex from "../Flex/Flex";
import StoreButtons from "../StoreButtons/StoreButtons";
import LanguageIcon from "../icons/LanguageIcon";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

interface FooterProps {
  locale: Locale;
}

function Footer({ locale }: FooterProps) {
  const { formatMessage } = getIntl(locale);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const onLanguageChange = (lang: Locale) => {
    // Replace the language prefix with the new language
    const newPathname = `/${lang}${pathname}`;

    // Navigate to the new language version of the page
    router.push(newPathname);
  };

  return (
    <footer className={styles.footer}>
      <Flex
        rowGap="2rem"
        flexWrap="wrap"
        flexDirection="column"
        className={styles.flexContainer}
        justifyContent="space-between"
      >
        <Link href="/" className={styles.logoLink}>
          <Image
            className={styles.logo}
            width={115}
            height={106}
            src="/img/me-fit-logo-white-background.svg"
            alt="ME Fit Logo"
          ></Image>
        </Link>

        <div>
          <h5 className={"no-margin"}>{formatMessage({ id: "mefit.pro" })}</h5>
          <p className={styles.footerGetMeFitPro}>
            {formatMessage({ id: "footer.get.me.fit.pro" })}
          </p>
          <Link
            className={"button button-small"}
            href="https://admin.mefit.pro/onboarding"
          >
            {formatMessage({ id: "signup.call.to.action" })}
          </Link>
        </div>

        <div>
          <StoreButtons locale={locale} />
        </div>
      </Flex>

      <Flex
        justifyContent="space-between"
        alignItems="center"
        className={styles.bottomSection}
        flexWrap="wrap"
        rowGap="1rem"
      >
        <Flex columnGap="0.5em" alignItems="center">
          <label
            htmlFor="language"
            aria-label={formatMessage({ id: "language" })}
          >
            <LanguageIcon />
          </label>

          <select
            id="language"
            className={styles.select}
            onChange={(e) => {
              onLanguageChange(e.target.value as Locale);
            }}
          >
            <option value="en">English</option>
            <option value="nl">Nederlands</option>
          </select>
        </Flex>
        <small className={styles["company-name"]}>© 2024 ME Fit B.V.</small>
      </Flex>
    </footer>
  );
}

export default Footer;
