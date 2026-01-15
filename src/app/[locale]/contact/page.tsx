"use client";

import Flex from "@/components/Flex/Flex";
import { Locale, getIntl } from "@/lib/intl";
import styles from "./page.module.css";
import Card from "@/components/Card/Card";
import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm/page";

type PageProps = {
  params: { locale: Locale };
};

export default function Page({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [hasScrolledForSubmission, updateScrolledStatus] = useState(false);

  useEffect(() => {
    if (success !== null && !hasScrolledForSubmission) {
      window.scrollTo({ top: 0, behavior: "auto" });
      updateScrolledStatus(true);
    }
  }, [success, hasScrolledForSubmission]);

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h2>{formatMessage({ id: "contact.page.header" })}</h2>

        {success !== null && (
          <Card>
            {success ? (
              <p className="text-color-success no-margin">
                {formatMessage({ id: "contact.page.success.message" })}
              </p>
            ) : (
              <p className="text-color-danger no-margin">
                {formatMessage({ id: "contact.page.failure.message" })}
              </p>
            )}
          </Card>
        )}

        <p>{formatMessage({ id: "contact.page.paragraph.one" })}</p>
      </section>

      <ContactForm
        locale={locale}
        className={styles.form}
        onSubmitSuccess={(result) => {
          setSuccess(result);
          updateScrolledStatus(false);
        }}
      />

      <section className={styles.aboutUs}>
        <h2>{formatMessage({ id: "about.us.title" })}</h2>
        <p className={styles.aboutUsParagraph}>
          {formatMessage({ id: "about.us.page.text" })}
        </p>
      </section>
    </main>
  );
}