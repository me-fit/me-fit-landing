import { Locale } from "@/lib/intl";
import styles from "./page.module.css";
import { getIntl } from "@/lib/intl";

type PageProps = {
  params: { locale: Locale };
};

export default function Page({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);
  return <main className={styles.main}>TBD</main>;
}
