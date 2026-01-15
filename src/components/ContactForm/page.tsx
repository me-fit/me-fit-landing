  
"use client";

import Flex from "@/components/Flex/Flex";
import Spinner from "@/components/Spinner/Spinner";
import { Locale, getIntl } from "@/lib/intl";
import submitContactForm, {
  SubmitContactFormState,
} from "@/app/[locale]/contact/server-actions/submitContactForm";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./ContactForm.module.css";

type Props = {
  locale: Locale;
  onSubmitSuccess?: (result: boolean) => void;
  className?: string;
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
  onSubmitSuccess,
  className,
}: Props) {
  const { formatMessage } = getIntl(locale);

  const [, formAction] = useFormState(
    async (prevState: SubmitContactFormState, formData: FormData) => {
      const result = await submitContactForm(prevState, formData);
      onSubmitSuccess?.(!!result.success);
      return result;
    },
    initialState
  );

  return (
    <form
      className={`${styles.form} ${className ?? ""}`}
      action={formAction}
    >
      <Flex flexDirection="column">
        <input
          name="userName"
          type="text"
          autoComplete="name"
          placeholder={formatMessage({ id: "contact.page.name.placeholder" })}
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
  );
}

