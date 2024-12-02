"use client";
import Flex from "@/components/Flex/Flex";
import { Locale, getIntl } from "@/lib/intl";
import styles from "./page.module.css";
import submitContactForm, {
  SubmitContactFormState,
} from "./server-actions/submitContactForm";
import { useFormState } from "react-dom";



type PageProps = {
  params: { locale: Locale };
};

const submitContactFormState: SubmitContactFormState = {
  success:  null,
  
};



export default function Page({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);
  const [state, formAction] = useFormState(
    submitContactForm,
    submitContactFormState


  );


  
  console.log(state.success);
    
  return (
   
   

    <main className={styles.main}>
      <section className={`${styles.section}`}>
        <h2>{formatMessage({ id: "contact.page.header" })}</h2>
        {state.success===true?<p>{formatMessage({ id: "contact.page.success.message" })}</p>:""}
        {state.success===false?<p>{formatMessage({ id: "contact.page.failure.message" })}</p>:""}
        <p>{formatMessage({ id: "contact.page.paragraph.one" })}</p>
      </section>
    
       

      <form  className={`${styles.form}`} action={formAction}>
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
            <button>
              {formatMessage({ id: "contact.page.send.message" })}
            </button>

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
