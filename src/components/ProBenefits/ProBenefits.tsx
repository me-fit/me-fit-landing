import { Locale } from "@/lib/intl";
import FeatureCard from "../FeatureCard/FeatureCard";
import { getIntl } from "@/lib/intl";
import styles from "./ProBenefits.module.css";
import Flex from "../Flex/Flex";
import Image from "next/image";
import Create from "../../../public/img/pro-benefits/Create.png";
import Track from "../../../public/img/pro-benefits/Track.gif";
import CheckList from "../../../public/img/pro-benefits/CheckList.gif";
import CalendarMonth from "../../../public/img/pro-benefits/CalendarMonth.png";
interface ProBenefitsProps {
  locale: Locale;
}

const ProBenefits = ({ locale }: ProBenefitsProps) => {
  const { formatMessage } = getIntl(locale);

  const benefits = [
    {
      imgSrc: "/img/pro-benefits/Create.png",
      title: formatMessage({ id: "mefit.pro.page.benefits.title.one" }),
      description: formatMessage({
        id: "mefit.pro.page.benefits.paragraph.one",
      }),
      unoptimized: false,
    },
    {
      imgSrc: "/img/pro-benefits/Track.gif",
      title: formatMessage({ id: "mefit.pro.page.benefits.title.two" }),
      description: formatMessage({
        id: "mefit.pro.page.benefits.paragraph.two",
      }),
      unoptimized: true,
    },
    {
      imgSrc: "/img/pro-benefits/CalendarMonth.png",
      title: formatMessage({ id: "mefit.pro.page.benefits.title.three" }),
      description: formatMessage({
        id: "mefit.pro.page.benefits.paragraph.three",
      }),
      unoptimized: false,
    },
    {
      imgSrc: "/img/pro-benefits/CheckList.gif",
      title: formatMessage({ id: "mefit.pro.page.benefits.title.four" }),
      description: formatMessage({
        id: "mefit.pro.page.benefits.paragraph.four",
      }),
      unoptimized: true,
    },
  ];

  return (
    <Flex flexWrap="wrap" justifyContent="center" className={styles.container}>
      {benefits.map((benefit, index) => (
        <FeatureCard
          className={styles.benefitCard}
          key={index}
          title={benefit.title}
          unoptimizedImage={benefit.unoptimized}
          imgSrc={benefit.imgSrc}
          description={benefit.description}
        />
      ))}
    </Flex>
  );
};

export default ProBenefits;
