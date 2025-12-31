"use client";

import { useSearchParams } from "next/navigation";
import { Locale, getIntl } from "@/lib/intl";
import styles from "./pricing.module.css";

type PageProps = {
  params: { locale: Locale };
};

export default function PricingPage({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);
  const searchParams = useSearchParams();

  const type = searchParams.get("type") === "teams" ? "teams" : "practitioners";

  return (
    <div className={styles.container}>
      <div className={styles.subtitle}>
        <h1>{formatMessage({ id: "pricing.page.header" })}</h1>
        <p>{formatMessage({ id: "pricing.page.subheader" })}</p>
      </div>

      {type === "practitioners" && (
        <section className={styles.section}>
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
          <p className={styles.description}>
            {formatMessage({ id: "pricing.teams.description" })}
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h2>{formatMessage({ id: "pricing.workoutBuilder" })}</h2>
              <ul>
                <li>{formatMessage({ id: "pricing.teams.workout1" })}</li>
                <li>{formatMessage({ id: "pricing.teams.workout2" })}</li>
                <li>{formatMessage({ id: "pricing.teams.workout3" })}</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h2>{formatMessage({ id: "pricing.organization" })}</h2>
              <ul>
                <li>{formatMessage({ id: "pricing.organization.item1" })}</li>
                <li>{formatMessage({ id: "pricing.organization.item2" })}</li>
                <li>{formatMessage({ id: "pricing.organization.item3" })}</li>
                <li>{formatMessage({ id: "pricing.organization.item4" })}</li>
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
    </div>
  );
}
