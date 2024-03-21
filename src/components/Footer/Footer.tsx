import Link from "next/link";

import Image from "next/image";
import { getIntl } from "@/lib/intl";
import { Locale, i18n } from "@/lib/i18n-config";
import styles from "./Footer.module.css";
import Flex from "../Flex";
import StoreButtons from "../StoreButtons/StoreButtons";

interface FooterProps {
    locale: Locale;
}

function Footer({ locale }: FooterProps) {
  const intl = getIntl(locale);
  return (
    <footer className={styles.footer}>
      <Flex
        rowGap="2rem"
        flexWrap="wrap"
        className={styles.flexContainer}
        justifyContent="space-between"
      >
        <div>
          <Link href="/">
            <Image
              className={styles.logo}
              width={115}
              height={106}
              src="/img/me-fit-logo-white-background.svg"
              alt="ME Fit Logo"
            ></Image>
          </Link>
          <StoreButtons locale={locale} />
        </div>

        <nav className={styles.nav}>
          <ul>
            <li className={styles["list-item"]}>
              <Link href="/">{intl.formatMessage({ id: "home" })}</Link>
            </li>
            {/* <li className={styles["list-item"]}>
              <Link href="/">{intl.formatMessage({ id: "home" })}</Link>
            </li>
            <li className={styles["list-item"]}>
              <Link href="/">{intl.formatMessage({ id: "home" })}</Link>
            </li>
            <li className={styles["list-item"]}>
              <Link href="/">{intl.formatMessage({ id: "home" })}</Link>
            </li> */}
          </ul>
        </nav>
      </Flex>
    </footer>
  );
}

export default Footer;
