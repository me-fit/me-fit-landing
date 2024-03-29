"use client";
import { Locale } from "@/lib/intl";
import styles from "./page.module.css";
import { getIntl } from "@/lib/intl";
import Flex from "@/components/Flex/Flex";
import { FormEvent } from "react";

type PageProps = {
  params: { locale: Locale };
};

export default function Page({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  } 

  return (
    <main className={styles.main}>
      <section className={`${styles.section}`}>
        <h2>{formatMessage({ id: "contact.page.header" })}</h2>

        <p>{formatMessage({ id: "contact.page.paragraph.one" })}</p>
      </section>

      <form className={`${styles.form}`} onSubmit={onFormSubmit}>
        <Flex flexDirection="column">
          <input
            autoComplete="name"
            type="text"
            placeholder={formatMessage({ id: "contact.page.name.placeholder" })}
            required
          />

          <br />

          <input
            autoComplete="email"
            type="email"
            placeholder={formatMessage({
              id: "contact.page.email.placeholder",
            })}
            required
          />

          <br />

          <textarea
            rows={4}
            placeholder={formatMessage({
              id: "contact.page.message.placeholder",
            })}
            required
          ></textarea>

          <br />
          <br />
          <Flex justifyContent="flex-end">
            <button>
              {formatMessage({ id: "contact.page.send.message" })}
            </button>
          </Flex>
        </Flex>
      </form>
    </main>
  );
}
