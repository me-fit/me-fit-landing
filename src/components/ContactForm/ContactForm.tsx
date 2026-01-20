"use client";

import { useEffect } from "react";
import Flex from "@/components/Flex/Flex";
import Spinner from "@/components/Spinner/Spinner";
import Card from "@/components/Card/Card";
import { Locale, getIntl } from "@/lib/intl";
import submitContactForm, {
  SubmitContactFormState,
} from "@/app/[locale]/contact/server-actions/submitContactForm";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./ContactForm.module.css";

type Props = {
  locale: Locale;
  className?: string;
  onSubmitSuccess?: (result: boolean) => void;
};

const initialState: SubmitContactFormState = {
  success: null,
};

function SubmitButton({ locale }: { locale: Locale }) {
  const { formatMessage } = getIntl(locale);
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      <Flex alignItems="center" columnGap="1rem">
        {formatMessage({ id: "contact.page.send.message" })}
        {pending && <Spinner />}
      </Flex>
    </button>
  );
}

export default function ContactForm({
  locale,
  className,
  onSubmitSuccess,
}: Props) {
  const { formatMessage } = getIntl(locale);

  const [state, formAction] = useFormState(submitContactForm, initialState);

  useEffect(() => {
    if (state.success !== null) {
      onSubmitSuccess?.(state.success);
    }
  }, [state.success, onSubmitSuccess]);

  return (
    <>
      {state.success !== null && (
        <div className={styles.result}>
          <Card>
            {state.success ? (
              <p className="text-color-success no-margin">
                {formatMessage({ id: "contact.page.success.message" })}
              </p>
            ) : (
              <p className="text-color-danger no-margin">
                {formatMessage({ id: "contact.page.failure.message" })}
              </p>
            )}
          </Card>
        </div>
      )}

      <form className={`${styles.form} ${className ?? ""}`} action={formAction}>
        <Flex flexDirection="column">
          <input
            name="userName"
            type="text"
            autoComplete="name"
            placeholder={formatMessage({
              id: "contact.page.name.placeholder",
            })}
            required
          />

          <input
            name="userEmail"
            type="email"
            autoComplete="email"
            placeholder={formatMessage({
              id: "contact.page.email.placeholder",
            })}
            required
          />

          <textarea
            name="message"
            rows={4}
            placeholder={formatMessage({
              id: "contact.page.message.placeholder",
            })}
            required
          />

          <Flex justifyContent="flex-end">
            <SubmitButton locale={locale} />
          </Flex>
        </Flex>
      </form>
    </>
  );
}
