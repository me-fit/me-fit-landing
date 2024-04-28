import { Locale } from "@/lib/intl";
import { getIntl } from "@/lib/intl";
import Link from "next/link";
import Flex from "@/components/Flex/Flex";
import ArticlePage from "@/components/ArticlePage/ArticlePage";

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
        <h2>{formatMessage({ id: "personalTrainer.page.header.two" })}</h2>
        <p>{formatMessage({ id: "personalTrainer.page.paragraph.two" })}</p>
        <h2>{formatMessage({ id: "personalTrainer.page.header.three" })}</h2>
        <p>{formatMessage({ id: "personalTrainer.page.paragraph.three" })}</p>
        <h2>{formatMessage({ id: "personalTrainer.page.header.four" })}</h2>
        <p>{formatMessage({ id: "personalTrainer.page.paragraph.four" })}</p>
        <h2>{formatMessage({ id: "personalTrainer.page.header.five" })}</h2>
        <p>{formatMessage({ id: "personalTrainer.page.paragraph.five" })}</p>

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
