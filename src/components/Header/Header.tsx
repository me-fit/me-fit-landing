"use client";
import Link from "next/link";

import useMenuStructure, { MenuItemWithHref } from "@/hooks/useMenuStructure";
import { Locale, getIntl } from "@/lib/intl";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Flex from "../Flex/Flex";
import Popover from "../Popover/Popover";
import styles from "./Header.module.css";
import HeaderMobileMenu from "./HeaderMobileMenu/HeaderMobileMenu";
import ChevronMore from "../icons/ChevronMoreIcon";

interface HeaderProps {
  locale: Locale;
}

function Header({ locale }: HeaderProps) {
  const { formatMessage } = getIntl(locale);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const menuStructure = useMenuStructure({ locale });

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;

    console.log("[Header] url change, closing popover");
    // If the url changes, we want to close the popover
    setPopoverOpen(false);
  }, [pathname, searchParams]);

  return (
    <header className={styles.header}>
      <HeaderMobileMenu className={styles.mobileMenu} locale={locale} />

      <Flex
        className={styles.desktopMenu}
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href={`/${locale}`} className="logo-link">
          <Image
            width={115}
            height={106}
            src="/img/me-fit-logo-white-background.svg"
            alt="ME Fit Logo"
            className={styles.logo}
          ></Image>
        </Link>

        <nav>
          <Flex alignItems="center" gap="1rem">
            {menuStructure.map((menuItem, index) =>
              "href" in menuItem ? (
                <Link key={index} href={menuItem.href}>
                  {menuItem.label}
                </Link>
              ) : (
                <Popover
                  key={index}
                  isOpen={popoverOpen}
                  onOpen={setPopoverOpen}
                  trigger={
                    <a tabIndex={0} className={styles.dropdownButton}>
                      {menuItem.label}
                      <ChevronMore />
                    </a>
                  }
                >
                  {menuItem.items?.map((subMenuItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={(subMenuItem as MenuItemWithHref).href}
                    >
                      {subMenuItem.label}
                    </Link>
                  ))}
                </Popover>
              )
            )}
          </Flex>
        </nav>

        <Flex alignItems="center" gap="1rem" className={styles.headerButtons}>
          <Link
            className={`button ${styles.signup}`}
            href="https://admin.mefit.pro/onboarding"
          >
            {formatMessage({ id: "signup.call.to.action" })}
          </Link>
          <Link
            className={` ${styles.login} button secondary`}
            href="https://admin.mefit.pro"
          >
            {formatMessage({ id: "login.call.to.action" })}
          </Link>
        </Flex>
      </Flex>
    </header>
  );
}

export default Header;
