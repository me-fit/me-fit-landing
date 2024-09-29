"use client";
import Flex from "@/components/Flex/Flex";
import { Locale, getIntl } from "@/lib/intl";
import styles from "./page.module.css";
import submitContactForm, {
  SubmitContactFormState,
} from "./server-actions/submitContactForm";
import { useFormState, useFormStatus } from "react-dom";
import Card from "@/components/Card/Card";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner/Spinner";

type PageProps = {
  params: { locale: Locale };
};

const submitContactFormState: SubmitContactFormState = {
  success: null,
};

function SubmitButton({ locale }: { locale: Locale }) {
  const { formatMessage } = getIntl(locale);
  const formStatus = useFormStatus();
  return (
    <button type="submit" disabled={formStatus.pending}>
      <Flex alignItems="center" columnGap="1rem">
        {formatMessage({ id: "contact.page.send.message" })}

        {formStatus.pending && <Spinner />}
      </Flex>
    </button>
  );
}

export default function Page({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);
  const [state, formAction] = useFormState(
    submitContactForm,
    submitContactFormState
  );

  const [hasScrolledForSubmission, updateScrolledStatus] = useState(false);
  const formStatus = useFormStatus();

  useEffect(() => {
    if (state.success != null && !hasScrolledForSubmission) {
      window.scrollTo({ top: 0, behavior: "auto" });
      updateScrolledStatus(true);
    }
  }, [state.success, hasScrolledForSubmission]);

  const handleFormSubmit = (payload: FormData) => {
    formAction(payload);
    updateScrolledStatus(false);
  };

  return (
    <main className={styles.main}>
      <section className={`${styles.section}`}>
        <h2>{formatMessage({ id: "contact.page.header" })}</h2>
        {state.success != null && (
          <Card>
            {state.success ? (
              <p className={"text-color-success no-margin"}>
                {formatMessage({ id: "contact.page.success.message" })}
              </p>
            ) : (
              ""
            )}
            {state.success === false ? (
              <p className="text-color-danger no-margin">
                {formatMessage({ id: "contact.page.failure.message" })}
              </p>
            ) : (
              ""
            )}
          </Card>
        )}
        <p>{formatMessage({ id: "contact.page.paragraph.one" })}</p>
      </section>

      <form className={`${styles.form}`} action={handleFormSubmit}>
        <Flex flexDirection="column">
          <input
            name="userName"
            id="name"
            autoComplete="name"
            type="text"
            placeholder={formatMessage({ id: "contact.page.name.placeholder" })}
            required
          />

          <br />

          <input
            name="userEmail"
            id="email"
            autoComplete="email"
            type="email"
            placeholder={formatMessage({
              id: "contact.page.email.placeholder",
            })}
            required
          />

          <br />

          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder={formatMessage({
              id: "contact.page.message.placeholder",
            })}
            required
          ></textarea>

          <br />
          <br />

          <Flex justifyContent="flex-end">
            <SubmitButton locale={locale} />
          </Flex>
        </Flex>
      </form>

      <section className={styles.aboutUs}>
        <h2>{formatMessage({ id: "about.us.title" })}</h2>
        <p className={styles.aboutUsParagraph}>
          {formatMessage({ id: "about.us.page.text" })}
        </p>
      </section>
    </main>
  );
}
