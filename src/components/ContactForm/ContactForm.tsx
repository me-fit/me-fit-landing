"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Flex from "@/components/Flex/Flex";
import Spinner from "@/components/Spinner/Spinner";
import Card from "@/components/Card/Card";
import { Locale, getIntl } from "@/lib/intl";
import submitContactForm, {
  SubmitContactFormState,
} from "@/app/[locale]/contact/server-actions/submitContactForm";
import { useFormStatus } from "react-dom";
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
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const onSubmitSuccessRef = useRef(onSubmitSuccess);

  const [state, formAction] = useActionState(submitContactForm, initialState);

  // Update ref when callback changes
  useEffect(() => {
    onSubmitSuccessRef.current = onSubmitSuccess;
  }, [onSubmitSuccess]);

  useEffect(() => {
    if (state.success !== null) {
      onSubmitSuccessRef.current?.(state.success);
      
      // Reset reCAPTCHA after submission (success or failure)
      recaptchaRef.current?.reset();
      setRecaptchaToken(null);
    }
  }, [state.success]);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleFormAction = async (formData: FormData) => {
    if (recaptchaToken) {
      formData.append("recaptchaToken", recaptchaToken);
    }
    return formAction(formData);
  };

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

      <form
        className={`${styles.form} ${className ?? ""}`}
        action={handleFormAction}
      >
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

          <div className={styles.recaptchaContainer}>
            <ReCAPTCHA
              // see supported locales https://developers.google.com/recaptcha/docs/language
              hl={locale}
              theme="dark"
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              onChange={handleRecaptchaChange}
            />
          </div>

          <Flex justifyContent="flex-end">
            <SubmitButton locale={locale} />
          </Flex>
        </Flex>
      </form>
    </>
  );
}
