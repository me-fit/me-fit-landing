import { Locale } from "@/lib/intl";
import { getIntl } from "@/lib/intl";
import Link from "next/link";
import Flex from "@/components/Flex/Flex";
import Image from "next/image";
import ArticlePage from "@/components/ArticlePage/ArticlePage";
import styles from "./personal-traning.module.css";

type PageProps = {
  params: { locale: Locale };
};

export default function Page({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);
  return (
    <>
      <ArticlePage>
        <h1>{formatMessage({ id: "personalTrainer.page.header" })}</h1>
        <h5>{formatMessage({ id: "personalTrainer.page.sub.header" })}</h5>
        <h2>{formatMessage({ id: "personalTrainer.page.header.one" })}</h2>
        <p>{formatMessage({ id: "personalTrainer.page.paragraph.one" })}</p>
      <Flex justifyContent="center">
       <Image 
        src="/img/workout1.png"
        alt=""
        width={1024}
        height={400}
        className={styles.proMainImages}

      />
      </Flex>
        <h2>{formatMessage({ id: "personalTrainer.page.header.two" })}</h2>
        <p>{formatMessage({ id: "personalTrainer.page.paragraph.two" })}</p>
      <Flex justifyContent="center">
       <Image
        src="/img/me-fit-pro-workout-details-front.png"
        alt=""
        width={1028}
        height={400}
        className={styles.proMainImages}

        />
      </Flex>
        <h2>{formatMessage({ id: "personalTrainer.page.header.three" })}</h2>
        <p>{formatMessage({ id: "personalTrainer.page.paragraph.three" })}</p>
      <Flex justifyContent="center">
       <Image 
        src="/img/calendar-1.png"
        alt=""
        width={1024}
        height={400}
        className={styles.proMainImages}

      />
      </Flex>
        <h2>{formatMessage({ id: "personalTrainer.page.header.four" })}</h2>
        <p>{formatMessage({ id: "personalTrainer.page.paragraph.four" })}</p>
      <Flex justifyContent="center">
       <Image 
        src="/img/me-fit-pro-exercise-libraryy.png"
        alt=""
        width={1024}
        height={400}
        className={styles.proMainImages}

      />
      </Flex>
        <h2>{formatMessage({ id: "personalTrainer.page.header.five" })}</h2>
        <p>{formatMessage({ id: "personalTrainer.page.paragraph.five" })}</p>
      <Flex justifyContent="center">
      <Image
        src="/img/custom-exercises-front.png"
        alt=""
        width={1028}
        height={400}
        className={styles.proMainImages}

        />
      </Flex>

        <br />

        <hr />

        <Flex flexDirection="column" alignItems="center">
          <p className="text-align-center">
            {formatMessage({ id: "explore.advantages.text" })}
          </p>
          <Link className={"button"} href="https://admin.mefit.pro/onboarding">
            {formatMessage({ id: "signup.call.to.action" })}
          </Link>
        </Flex>
      </ArticlePage>
    </>
  );
}
