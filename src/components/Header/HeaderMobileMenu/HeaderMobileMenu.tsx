"use client";
import Link from "next/link";

import Flex from "@/components/Flex/Flex";
import CloseIcon from "@/components/icons/CloseIcon";
import MenuIcon from "@/components/icons/MenuIcon";
import classnames from "classnames";
import Image from "next/image";
import styles from "./HeaderMobileMenu.module.css";
import { useEffect, useState } from "react";
import { Locale, getIntl } from "@/lib/intl";
import useMenuStructure, { MenuItemWithHref } from "@/hooks/useMenuStructure";
import ChevronMore from "@/components/icons/ChevronMore";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import FocusLock from "react-focus-lock";
import { FocusOn } from "react-focus-on";

interface HeaderMobileMenuProps {
  locale: Locale;
  className: string;
}

const HeaderMobileMenu = ({ locale, className }: HeaderMobileMenuProps) => {
  const { formatMessage } = getIntl(locale);
  const [expandedItemIndex, setExpandedItemIndex] = useState<number | null>(
    null
  );

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;

    console.log("[HeaderMobileMenu] url change, closing popover", url);
    // If the url changes, we want to close the menu
    updateMobileMenuOpen(false);
  }, [pathname, searchParams]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const menuStructure = useMenuStructure({ locale });

  const updateMobileMenuOpen = (openState: boolean) => {
    setMobileMenuOpen(openState);
  };

  const handleItemClick = (index: number) => {
    if (index === expandedItemIndex) {
      setExpandedItemIndex(null);
    } else {
      setExpandedItemIndex(index);
    }
  };

  return (
    <FocusOn enabled={mobileMenuOpen}>
      <Flex justifyContent="space-between" alignItems="center" className={className}>
        <Link href="/" className="logo-link">
          <Image
            width={115}
            height={106}
            src="/img/me-fit-logo-white-background.svg"
            alt="ME Fit Logo"
            className={styles.logo}
          ></Image>
        </Link>

        <button
          className="round button-on-dark icon secondary"
          onClick={() => updateMobileMenuOpen(!mobileMenuOpen)}
        >
          {!mobileMenuOpen && <MenuIcon />}
          {mobileMenuOpen && <CloseIcon />}
        </button>

        {mobileMenuOpen && (
          <div role="menu" className={styles.mobileMenuOverlay}>
            <Flex
              rowGap="1rem"
              className={styles.mobileMenuOverlayContainer}
              flexDirection="column"
            >
              <Link
                className={`button secondary ${styles.login}`}
                href="https://admin.mefit.pro"
              >
                {formatMessage({ id: "login.call.to.action" })}
              </Link>
              <Link
                className={`button button-on-dark ${styles.signup}`}
                href="https://admin.mefit.pro/onboarding"
              >
                {formatMessage({ id: "signup.call.to.action" })}
              </Link>

              {menuStructure.map((menuItem, index) => {
                if ("items" in menuItem) {
                  return (
                    <React.Fragment key={index}>
                      <button
                        className={"secondary"}
                        onClick={() => handleItemClick(index)}
                      >
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                          className={styles.menuItemsTrigger}
                        >
                          {menuItem.label}
                          <div
                            className={classnames(styles.chevron, {
                              [styles.menuItemIsOpen]:
                                expandedItemIndex === index,
                            })}
                          >
                            <ChevronMore />
                          </div>
                        </Flex>
                      </button>
                      {expandedItemIndex === index && (
                        <div className={styles.menuItemsContainer}>
                          {menuItem.items.map((subMenuItem, subIndex) => (
                            <Link
                              role="menuitem"
                              className={`${styles.menuItem} button secondary`}
                              key={subIndex}
                              href={(subMenuItem as MenuItemWithHref).href}
                            >
                              {subMenuItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </React.Fragment>
                  );
                } else if ("href" in menuItem) {
                  return (
                    <Link
                      key={index}
                      href={menuItem.href}
                      className={`button secondary`}
                    >
                      {menuItem.label}
                    </Link>
                  );
                } else {
                  return null;
                }
              })}
            </Flex>
          </div>
        )}
      </Flex>
    </FocusOn>
  );
};

export default HeaderMobileMenu;
