"use client";

import { useSearchParams } from "next/navigation";
import { Locale, getIntl } from "@/lib/intl";
import styles from "./pricing.module.css";
import ContactForm from "@/components/ContactForm/page";
import { useEffect, useState } from "react";

type PageProps = {
  params: { locale: Locale };
};

export default function PricingPage({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);
  const searchParams = useSearchParams();

  const type = searchParams.get("type") === "teams" ? "teams" : "practitioners";
  const [success, setSuccess] = useState<boolean | null>(null);
  const [hasScrolledForSubmission, updateScrolledStatus] = useState(false);

  useEffect(() => {
    if (success !== null && !hasScrolledForSubmission) {
      window.scrollTo({ top: 0, behavior: "auto" });
      updateScrolledStatus(true);
    }
  }, [success, hasScrolledForSubmission]);

  return (
    <div className={styles.container}>
      <div className={styles.subtitle}>
        <h1>{formatMessage({ id: "pricing.page.header" })}</h1>
      </div>

      {type === "practitioners" && (
        <section className={styles.section}>
          <p className={styles.subheader}>
            {formatMessage({ id: "pricing.practitioners.subheader" })}
          </p>

          <p className={styles.description}>
            {formatMessage({ id: "pricing.practitioners.description" })}
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h2>{formatMessage({ id: "pricing.workoutBuilder" })}</h2>
              <ul>
                <li>{formatMessage({ id: "pricing.workout.item1" })}</li>
                <li>{formatMessage({ id: "pricing.workout.item2" })}</li>
                <li>{formatMessage({ id: "pricing.workout.item3" })}</li>
                <li>{formatMessage({ id: "pricing.workout.item4" })}</li>
                <li>{formatMessage({ id: "pricing.workout.item5" })}</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h2>{formatMessage({ id: "pricing.assessments" })}</h2>
              <ul>
                <li>{formatMessage({ id: "pricing.assessments.item1" })}</li>
                <li>{formatMessage({ id: "pricing.assessments.item2" })}</li>
                <li>{formatMessage({ id: "pricing.assessments.item3" })}</li>
                <li>{formatMessage({ id: "pricing.assessments.item4" })}</li>
                <li>{formatMessage({ id: "pricing.assessments.item5" })}</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h2>{formatMessage({ id: "pricing.client.app" })}</h2>
              <ul>
                <li>{formatMessage({ id: "pricing.client.item1" })}</li>
                <li>{formatMessage({ id: "pricing.client.item2" })}</li>
                <li>{formatMessage({ id: "pricing.client.item3" })}</li>
                <li>{formatMessage({ id: "pricing.client.item4" })}</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h2>{formatMessage({ id: "pricing.monitoring.reporting" })}</h2>
              <ul>
                <li>
                  {formatMessage({ id: "pricing.monitoring.reporting.item1" })}
                </li>
                <li>
                  {formatMessage({ id: "pricing.monitoring.reporting.item2" })}
                </li>
                <li>
                  {formatMessage({ id: "pricing.monitoring.reporting.item1" })}
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <h2>{formatMessage({ id: "pricing.pricing" })}</h2>
              <p>
                {formatMessage({ id: "pricing.practitioners.pricing" })}
                <br />
                <strong>{formatMessage({ id: "pricing.contact" })}</strong>
              </p>
            </div>
          </div>
        </section>
      )}

      {type === "teams" && (
        <section className={styles.section}>
          <p className={styles.subheader}>
            {formatMessage({ id: "pricing.teams.description" })}
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h2>{formatMessage({ id: "pricing.workoutBuilder" })}</h2>
              <ul>
                <li>{formatMessage({ id: "pricing.teams.workout1" })}</li>
                <li>{formatMessage({ id: "pricing.teams.workout2" })}</li>
                <li>{formatMessage({ id: "pricing.teams.workout3" })}</li>
                <li>{formatMessage({ id: "pricing.teams.workout4" })}</li>
                <li>{formatMessage({ id: "pricing.teams.workout5" })}</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h2>{formatMessage({ id: "pricing.assessments" })}</h2>
              <ul>
                <li>{formatMessage({ id: "pricing.assessments.item1" })}</li>
                <li>{formatMessage({ id: "pricing.assessments.item2" })}</li>
                <li>{formatMessage({ id: "pricing.assessments.item3" })}</li>
                <li>{formatMessage({ id: "pricing.assessments.item4" })}</li>
                <li>{formatMessage({ id: "pricing.assessments.item5" })}</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h2>{formatMessage({ id: "pricing.athlete.app" })}</h2>
              <ul>
                <li>{formatMessage({ id: "pricing.athlete.app.item1" })}</li>
                <li>{formatMessage({ id: "pricing.athlete.app.item2" })}</li>
                <li>{formatMessage({ id: "pricing.athlete.app.item3" })}</li>
                <li>{formatMessage({ id: "pricing.athlete.app.item4" })}</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h2>{formatMessage({ id: "pricing.monitoring.reporting" })}</h2>
              <ul>
                <li>
                  {formatMessage({ id: "pricing.monitoring.reporting.item1" })}
                </li>
                <li>
                  {formatMessage({ id: "pricing.monitoring.reporting.item2" })}
                </li>
                <li>
                  {formatMessage({ id: "pricing.monitoring.reporting.item3" })}
                </li>
              </ul>
            </div>
            <div className={styles.card}>
              <h2>
                {formatMessage({ id: "pricing.organization.management" })}
              </h2>
              <ul>
                <li>
                  {formatMessage({
                    id: "pricing.organization.management.item1",
                  })}
                </li>
                <li>
                  {formatMessage({
                    id: "pricing.organization.management.item2",
                  })}
                </li>
                <li>
                  {formatMessage({
                    id: "pricing.organization.management.item3",
                  })}
                </li>
                <li>
                  {formatMessage({
                    id: "pricing.organization.management.item4",
                  })}
                </li>
                <li>
                  {formatMessage({
                    id: "pricing.organization.management.item5",
                  })}
                </li>
              </ul>
            </div>

            <div className={styles.card}>
              <h2>{formatMessage({ id: "pricing.pricing" })}</h2>
              <p>
                {formatMessage({ id: "pricing.teams.pricing" })}
                <br />
                <strong>{formatMessage({ id: "pricing.contact" })}</strong>
              </p>
            </div>
          </div>
        </section>

      )}
      {success !== null && (
    <div className={styles.contactResult}>
      {success ? (
        <p className="text-color-success no-margin">
          {formatMessage({ id: "contact.page.success.message" })}
        </p>
      ) : (
        <p className="text-color-danger no-margin">
          {formatMessage({ id: "contact.page.failure.message" })}
        </p>
      )}
    </div>
  )}


      <section className={styles.contactSection}>
        <ContactForm
          locale={locale}
          className={styles.contactForm}
          onSubmitSuccess={(result) => {
            setSuccess(result);
            updateScrolledStatus(false);
          }}
        />
      </section>
    </div>
  );
}
