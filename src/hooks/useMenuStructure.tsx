import { Locale, getIntl } from "@/lib/intl";
import { useMemo } from "react";

interface MenuItem {
  label: string;
}

export type MenuItemWithHref = MenuItem & { href: string };
export type MenuItemWithItems = MenuItem & { items: MenuItem[] };

export type MenuItemExclusive = MenuItemWithHref | MenuItemWithItems;

interface MenuStructureProps {
  locale: Locale;
}

const useMenuStructure = ({ locale }: MenuStructureProps) => {
  const { formatMessage } = getIntl(locale);

  const menuStructure: MenuItemExclusive[] = useMemo(() => {
    return [
      { label: formatMessage({ id: "mefit.pro" }), href: `/${locale}` },
      {
        label: formatMessage({ id: "header.solutions" }),
        items: [
          {
            label: formatMessage({ id: "mefit.pro.page.paragraph.list.one" }),
            href: `/${locale}/physiotherapy`,
          },
          {
            label: formatMessage({ id: "mefit.pro.page.paragraph.list.two" }),
            href: `/${locale}/personal-training`,
          },
          {
            label: formatMessage({ id: "mefit.pro.page.paragraph.list.three" }),
            href: `/${locale}/pro-sport-organization`,
          },
          {
            label: formatMessage({ id: "mefit.pro.page.paragraph.list.four" }),
            href: `/${locale}/amateur-sport`,
          },
        ],
      },
      { label: formatMessage({ id: "mefit.app" }), href: `/${locale}/app` },
      {
        label: formatMessage({ id: "contact.us" }),
        href: `/${locale}/contact`,
      },
    ];
  }, [formatMessage, locale]);

  return menuStructure;
};

export default useMenuStructure;
