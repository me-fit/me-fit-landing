import { Locale } from "@/lib/intl";
import { getIntl } from "@/lib/intl";
import Link from "next/link";
import Flex from "@/components/Flex/Flex";
import Image from "next/image";
import ArticlePage from "@/components/ArticlePage/ArticlePage";
import styles from "./pro-sport-organization.module.css";

type PageProps = {
  params: { locale: Locale };
};

export default function Page({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);
  return (
    <ArticlePage>
      <h1>{formatMessage({ id: "pro.sport.organization.page.header" })}</h1>
      <h5>{formatMessage({ id: "pro.sport.organization.page.sub.header" })}</h5>
      <h2>{formatMessage({ id: "pro.sport.organization.page.header.one" })}</h2>
      <p>
        {formatMessage({ id: "pro.sport.organization.page.paragraph.one" })}
      </p>
      <Flex justifyContent="center">
       <Image
        src="/img/groups-front.png"
        alt=""
        width={1028}
        height={400}
        className={styles.proMainImages}

        />
      </Flex>
      <h2>{formatMessage({ id: "pro.sport.organization.page.header.two" })}</h2>
      <p>
        {formatMessage({ id: "pro.sport.organization.page.paragraph.two" })}
      </p>
      <Flex justifyContent="center">
       <Image 
        src="/img/workout1.png"
        alt=""
        width={1024}
        height={400}
        className={styles.proMainImages}

      />
      </Flex>
      <h2>
        {formatMessage({ id: "pro.sport.organization.page.header.three" })}
      </h2>
      <p>
        {formatMessage({ id: "pro.sport.organization.page.paragraph.three" })}
      </p>
      <Flex justifyContent="center">
       <Image 
        src="/img/me-fit-pro-exercise-libraryy.png"
        alt=""
        width={1024}
        height={400}
        className={styles.proMainImages}

      />
      </Flex>
      <h2>
        {formatMessage({ id: "pro.sport.organization.page.header.four" })}
      </h2>
      <p>
        {formatMessage({ id: "pro.sport.organization.page.paragraph.four" })}
      </p>
      <Flex justifyContent="center">
       <Image 
        src="/img/calendar-1.png"
        alt=""
        width={1024}
        height={400}
        className={styles.proMainImages}

      />
      </Flex>
      <h2>
        {formatMessage({ id: "pro.sport.organization.page.header.five" })}
      </h2>
      <p>
        {formatMessage({ id: "pro.sport.organization.page.paragraph.five" })}
      </p>
      <Flex justifyContent="center">
       <Image 
        src="/img/athlete-notes-front.png"
        alt=""
        width={1024}
        height={400}
        className={styles.proMainImages}

      />
      </Flex>
      <h2>{formatMessage({ id: "pro.sport.organization.page.header.six" })}</h2>
      <p>
        {formatMessage({ id: "pro.sport.organization.page.paragraph.six" })}
      </p>
      <Flex justifyContent="center">
       <Image 
        src="/img/custom-exercises-front.png"
        alt=""
        width={1024}
        height={400}
        className={styles.proMainImages}

      />
      </Flex>
      <h2>
        {formatMessage({ id: "pro.sport.organization.page.header.seven" })}
      </h2>
      <p>
        {formatMessage({ id: "pro.sport.organization.page.paragraph.seven" })}
      </p>
      <Flex justifyContent="center">
       <Image 
        src="/img/me-fit-pro-workout-details-front.png"
        alt=""
        width={1024}
        height={400}
        className={styles.proMainImages}
      />
      </Flex>
      <br />

      <hr />

      <Flex flexDirection="column" alignItems="center">
        <p className="text-align-center">
          {formatMessage({
            id: "pro.sport.organization.signup.call.to.action",
          })}
        </p>
        <Link className={"button"} href="https://admin.mefit.pro/onboarding">
          {formatMessage({ id: "signup.call.to.action" })}
        </Link>
      </Flex>
    </ArticlePage>
  );
}
