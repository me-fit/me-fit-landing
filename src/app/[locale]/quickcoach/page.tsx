import Image from 'next/image';
import {
  IoVideocamOutline,
  IoCloudUploadOutline,
  IoFlashOutline,
  IoPhonePortraitOutline,
  IoSyncOutline,
  IoCallOutline,
} from 'react-icons/io5';

import styles from './quickcoach.module.css';
import Link from 'next/link';
import BoltIcon from '@/components/icons/BoltIcon';
import { getIntl } from '@/lib/intl';
import Flex from '@/components/Flex/Flex';
export default function QuickCoach() {
  const { formatMessage } = getIntl('en');
  return (
    <div className={styles.container}>
      <h1>
        QuickCoach is shutting down. Keep your coaching running with ME Fit Pro.
      </h1>
      <div className={styles.logoTransition}>
        <Image
          src="/img/quickcoach.png"
          alt=""
          width={256}
          height={51}
          className={styles.quickcoachlogo}
        />
        <span className={styles.arrow}>→</span>
        <Image
          className={styles.mefitlogo}
          width={100}
          height={100}
          src="/img/me-fit-logo-white-background.svg"
          alt="ME Fit Logo"
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
            <IoSyncOutline className={styles.icon} />
            <h2>Easy client import</h2>
            <p>
              We built a migration tool that will seamlessly transfer your
              clients from quickcoach to ME Fit
            </p>
          </div>
          <div className={styles.card}>
            <IoVideocamOutline className={styles.icon} />
            <h2>Extensive exercise library</h2>
            <p>3,700+ exercises with professional video demos</p>
          </div>
          <div className={styles.card}>
            <IoFlashOutline className={styles.icon} />
            <h2>Quick workout creation</h2>
            <p>Build workouts fast with flexible templates</p>
          </div>
          <div className={styles.card}>
            <IoPhonePortraitOutline className={styles.icon} />
            <h2>Client app available on iOS & Android</h2>
            <p>Access your coaching tools on the go</p>
          </div>
          <div className={styles.card}>
            <IoCallOutline className={styles.icon} />
            <h2>Quick onboarding</h2>
            <h2>Onboarding call available upon request</h2>
          </div>
          <div className={styles.card}>
            <IoCloudUploadOutline className={styles.icon} />
            <h2>Upload your own exercise videos</h2>
            <p>
              Can't find an exercise in our library? No problem, you can upload
              your own.
            </p>
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
      <div className={styles.footer}>
        <Link className={`button`} href="https://admin.mefit.pro/onboarding">
          Start Your Free Trial
        </Link>
        <Flex
          gap="1rem"
          alignItems="center"
          justifyContent="center"
          className={styles.callout}
        >
          <BoltIcon />
          {formatMessage({ id: 'mefit.pro.page.signup.callout' })}
        </Flex>
      </div>
    </div>
  );
}
