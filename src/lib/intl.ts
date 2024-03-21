import "server-only";

import { createIntl } from "@formatjs/intl";
import type { Locale } from "./i18n-config";
import en from '../lang/en.json';
import nl from '../lang/nl.json';

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

