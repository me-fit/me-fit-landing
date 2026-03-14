"use client";

import { useSearchParams } from "next/navigation";
import { Locale, getIntl } from "@/lib/intl";
import styles from "./pricing.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";
import { useEffect, useState, use } from "react";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default function PricingPage({ params }: PageProps) {
  const { locale: rawLocale } = use(params);
  const locale = rawLocale as Locale;
  const { formatMessage } = getIntl(locale);
  const searchParams = useSearchParams();

  const type = searchParams.get("type") === "teams" ? "teams" : "practitioners";

  return (
    <div className={styles.container}>
      {type === "practitioners" && (
        <section className={styles.section}>
          <div className={styles.header}>
            <div className={styles.PricingHeader}>
              <h1>{formatMessage({ id: "pricing.page.header" })}</h1>
              <h5>
                {formatMessage({ id: "pricing.practitioners.subheader" })}
              </h5>
              <p>
                {formatMessage({ id: "pricing.practitioners.description" })}
              </p>
            </div>
          </div>

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
              <p>
                <strong>{formatMessage({ id: "pricing.contact" })}</strong>
                <br />

                {formatMessage({ id: "pricing.practitioners.pricing" })}
              </p>
              <section className={styles.contactSection}>
                <ContactForm locale={locale} className={styles.contactForm} />
              </section>
            </div>
          </div>
        </section>
      )}

      {type === "teams" && (
        <section className={styles.section}>
          <div className={styles.header}>
            <div className={styles.PricingHeader}>
              <h1>{formatMessage({ id: "pricing.page.header" })}</h1>
              <h5>{formatMessage({ id: "pricing.teams.subheader" })}</h5>
              <p>{formatMessage({ id: "pricing.teams.description" })}</p>
            </div>
          </div>

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
              <p>
                <strong>{formatMessage({ id: "pricing.contact" })}</strong>
                <br />
                {formatMessage({ id: "pricing.teams.pricing" })}
              </p>
              <br />

              <section className={styles.contactSection}>
                <ContactForm locale={locale} className={styles.contactForm} />
              </section>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
