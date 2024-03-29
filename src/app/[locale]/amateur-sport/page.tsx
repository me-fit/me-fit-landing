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
    <ArticlePage>
      <h1>{formatMessage({ id: "amateur.sports.page.header" })}</h1>
        <h6>{formatMessage({ id: "amateur.sports.page.sub.header" })}</h6>
        <p>{formatMessage({ id: "amateur.sports.page.header.one" })}</p>
        <h2>{formatMessage({ id: "amateur.sports.page.header.two" })}</h2>
        <p>{formatMessage({ id: "amateur.sports.page.paragraph.two" })}</p>
        <h2>{formatMessage({ id: "amateur.sports.page.header.three" })}</h2>
        <p>{formatMessage({ id: "amateur.sports.page.paragraph.three" })}</p>
        <h2>{formatMessage({ id: "amateur.sports.page.header.four" })}</h2>
        <p>{formatMessage({ id: "amateur.sports.page.paragraph.four" })}</p>
        <h2>{formatMessage({ id: "amateur.sports.page.header.five" })}</h2>
        <p>{formatMessage({ id: "amateur.sports.page.paragraph.five" })}</p>

        <br />

        <hr />

        <Flex flexDirection="column" alignItems="center">
          <p className="text-align-center">{formatMessage({ id: "amateur.sports.page.header.six" })}</p>
          <Link
            className={"button"}
            href="/contact"
          >
            {formatMessage({ id: "contact.us" })}
          </Link>
        </Flex>
    </ArticlePage>
  );
}
