import { Locale } from "@/lib/i18n-config";
import styles from "../../page.module.css";
import { getIntl } from "@/lib/intl";

type HomeProps = {
  params: { locale: Locale };
};

export default function Nested({ params: { locale } }: HomeProps) {
  const intl = getIntl(locale);
  return (
    <main>
        hello
    </main>
  );
}
