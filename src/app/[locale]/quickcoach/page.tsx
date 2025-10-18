import Image from "next/image";
import {
  IoVideocamOutline,
  IoCloudUploadOutline,
  IoFlashOutline,
  IoPhonePortraitOutline,
  IoSyncOutline,
  IoCallOutline,
} from "react-icons/io5";

import styles from "./quickcoach.module.css";
export default function QuickCoach() {
  return (
    <div className={styles.container}>
      <h1>
        QuickCoach is shutting down. Keep your coaching running with ME Fit Pro.
      </h1>
      <div className={styles.logoTransition}>
        <Image
          src="/img/quickcoach.png"
          alt=""
          width={100}
          height={100}
          className={styles.quickcoachlogo}
        />
        <span className={styles.arrow}>→</span>
        <Image
          src="/img/me-fit-logo-black-background.png"
          alt=""
          width={100}
          height={100}
          className={styles.mefitlogo}
        />
      </div>
      <h2>
        Seamlessly transition your coaching business with ME Fit Pro: the
        all-in-one platform trusted by coaches, physios, and sports
        professionals.
      </h2>
      <section className={styles.features}>
        <h3>Why ME Fit Pro?</h3>
        <div className={styles.cards}>
          <div className={styles.card}>
            <IoVideocamOutline className={styles.icon} />
            <p>3,700+ exercises with professional video demos</p>
          </div>
          <div className={styles.card}>
            <IoFlashOutline className={styles.icon} />
            <p>Build workouts fast with flexible templates</p>
          </div>
          <div className={styles.card}>
            <IoPhonePortraitOutline className={styles.icon} />
            <p>Client app available on iOS & Android</p>
          </div>
          <div className={styles.card}>
            <IoSyncOutline className={styles.icon} />
            <p>Easy client import</p>
          </div>
          <div className={styles.card}>
            <IoCallOutline className={styles.icon} />
            <p>Onboarding call available upon request</p>
          </div>
          <div className={styles.card}>
            <IoCloudUploadOutline className={styles.icon} />
            <p>Upload your own exercise videos</p>
          </div>
        </div>
      </section>

      <section className={styles.offers}>
        <h3>Special Transition Offer for QuickCoach Users</h3>
        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.highlight}`}>
            <p>Start with a 14-day free trial</p>
          </div>
          <div className={`${styles.card} ${styles.highlight}`}>
            <p>Get 50% off your first 6 months</p>
          </div>
          <div className={`${styles.card} ${styles.highlight}`}>
            <p>
              Then enjoy one simple plan: €20/month per user with unlimited
              clients
            </p>
          </div>
        </div>
      </section>
      <button className={styles.ctaBtn}>Start Your Free Trial</button>
      <footer>
        <p>Instant Access, No Credit Card Required</p>
      </footer>
    </div>
  );
}
