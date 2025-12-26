"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import styles from "./pricing.module.css";
export default function PricingPage() {
  const searchParams = useSearchParams();

  const initialType =
    searchParams.get("type") === "teams" ? "teams" : "practitioners";

  const [type, setType] = useState<"practitioners" | "teams">(initialType);

  useEffect(() => {
    const urlType = searchParams.get("type");

    if (urlType === "teams" || urlType === "practitioners") {
      setType(urlType);
    }
  }, [searchParams]);

  return (
    <div className={styles.container}>
      <div className={styles.subtitle}>
        <h1>ME Fit Pro Pricing</h1>
        <p> Pricing plans built for professionals, teams, and organizations</p>
      </div>

      {type === "practitioners" && (
        <section className={styles.section}>
          <p className={styles.description}>
            Built for physiotherapists, personal trainers, and small teams.
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h2>Workout Builder</h2>
              <ul>
                <li>Personalized workout builder</li>
                <li>Phase & periodization planning</li>
                <li>3,700+ exercise video demonstrations</li>
                <li>Custom exercise creation</li>
                <li>Workout templates & reusable libraries</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h2>Assessments & Testing</h2>
              <ul>
                <li>Ready-to-use assessments & questionnaires</li>
                <li>Custom assessments</li>
                <li>Longitudinal tracking of results</li>
                <li>Professional assessment notes</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h2>Pricing</h2>
              <p>
                Pricing is based on the number of professionals using the
                platform.
                <br />
                <strong>Contact us to discuss your setup.</strong>
              </p>
            </div>
          </div>
        </section>
      )}

      {type === "teams" && (
        <section className={styles.section}>
          <p className={styles.description}>
            Built for teams, academies, and multi-staff environments.
          </p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <h2>Workout Builder</h2>
              <ul>
                <li>Team & squad workout planning</li>
                <li>Advanced phase & periodization</li>
                <li>Shared exercise libraries</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h2>Organization Management</h2>
              <ul>
                <li>Multi-professional access</li>
                <li>Team, squad & department structure</li>
                <li>Centralized data management</li>
                <li>Scalable organization setup</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h2>Pricing</h2>
              <p>
                Pricing is tailored to your organization and based on the number
                of professionals.
                <br />
                <strong>Contact us to discuss your setup.</strong>
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
