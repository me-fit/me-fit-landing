import { createIntl } from "@formatjs/intl";
import en from "../lang/en.json";
import nl from "../lang/nl.json";


export const i18n = {
  locales: ["en", "nl"],
  defaultLocale: "en",
} as const;

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig["locales"][number];


const translationsMap = {
  en,
  nl
}

export function getIntl(locale: Locale) {
  return createIntl<keyof typeof en>({
    locale: locale,
    messages: translationsMap[locale],
  });
}
