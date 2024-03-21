import Link from "next/link";

import Image from "next/image";
import { getIntl } from "@/lib/intl";
import { Locale, i18n } from "@/lib/i18n-config";
import styles from "./Header.module.css";

interface HeaderProps {
  locale: Locale;
}

function Header({locale}: HeaderProps) {
  const { locales, defaultLocale } = i18n;
  const intl = getIntl(defaultLocale);
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.logo}
          width={115}
          height={106}
          src="/img/me-fit-logo-white-background.svg"
          alt="ME Fit Logo"
        ></Image>
      </Link>

      <div className="languages">
        {[...locales].sort().map((locale) => (
          <Link
            key={locale}
            href={locale === defaultLocale ? "/" : `/${locale}`}
          >
            {locale}
          </Link>
        ))}
      </div>

      {/* <Link href={'/me-fit-pro'}>
            ME Fit Pro
      </Link> */}
    </header>
  );
}

export default Header;
