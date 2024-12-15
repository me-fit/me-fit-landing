import { Locale } from "@/lib/intl";
import { getIntl } from "@/lib/intl";
import Link from "next/link";
import Flex from "@/components/Flex/Flex";
import Image from "next/image";
import ArticlePage from "@/components/ArticlePage/ArticlePage";
import styles from "./amateur-sport.module.css";

type PageProps = {
  params: { locale: Locale };
};

export default function Page({ params: { locale } }: PageProps) {
  const { formatMessage } = getIntl(locale);
  return (
    <ArticlePage>
      <h1>{formatMessage({ id: "amateur.sports.page.header" })}</h1>
      <h5>{formatMessage({ id: "amateur.sports.page.sub.header" })}</h5>
      <p>{formatMessage({ id: "amateur.sports.page.header.one" })}</p>
      <Flex justifyContent="center">
       <Image
        src="/img/me-fit-app-login.png"
        alt=""
        width={453}
        height={463}
        className={styles.proMainImages}

      />
      </Flex>
      <h2>{formatMessage({ id: "amateur.sports.page.header.two" })}</h2>
      <p>{formatMessage({ id: "amateur.sports.page.paragraph.two" })}</p>
      <Flex justifyContent="center">
        <Image
         src = "/img/me-fit-app-home.png"
         alt=""
         width={567}
         height={567}
         className={styles.proMainImages}

        />
      </Flex>
      <h2>{formatMessage({ id: "amateur.sports.page.header.three" })}</h2>
      <p>{formatMessage({ id: "amateur.sports.page.paragraph.three" })}</p>
      <Flex justifyContent="center">
        <Image
         src = "/img/me-fit-app-workout-details .png"
         alt=""
         width={453}
         height={463}
         className={styles.proMainImages}

        />
      </Flex>
      <h2>{formatMessage({ id: "amateur.sports.page.header.four" })}</h2>
      <p>{formatMessage({ id: "amateur.sports.page.paragraph.four" })}</p>
      <Flex justifyContent="center">
        <Image
         src = "/img/me-fit-app-calendar.png"
         alt=""
         width={453}
         height={463}
         className={styles.proMainImages}

        />
      </Flex>
      <h2>{formatMessage({ id: "amateur.sports.page.header.five" })}</h2>
      <p>{formatMessage({ id: "amateur.sports.page.paragraph.five" })}</p>
      <Flex justifyContent="center">
        <Image
         src = "/img/me-fit-app-workout-step.png"
         alt=""
         width={453}
         height={463}
         className={styles.proMainImages}

        />
      </Flex>

      <br />

      <hr />

      <Flex flexDirection="column" alignItems="center">
        <p className="text-align-center">
          {formatMessage({ id: "amateur.sports.page.header.six" })}
        </p>
        <Link className={"button"} href="contact">
          {" "}
          {formatMessage({ id: "contact.us" })}{" "}
        </Link>
      </Flex>
    </ArticlePage>
  );
}
