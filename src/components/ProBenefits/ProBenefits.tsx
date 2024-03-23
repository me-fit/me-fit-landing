import { Locale } from "@/lib/intl";
import FeatureCard from "../FeatureCard/FeatureCard"; 
import { getIntl } from "@/lib/intl";
import styles from "./ProBenefits.module.css";
import Flex from "../Flex/Flex";

interface ProBenefitsProps {
    locale: Locale;
}

const ProBenefits = ({ locale }: ProBenefitsProps) => {
  const { formatMessage } = getIntl(locale);

  const benefits = [
    {
      imgSrc: "/img/me-fit-app-one.webp",
      title: formatMessage({ id: "mefit.pro.page.benefits.title.one" }),
      description: formatMessage({ id: "mefit.pro.page.benefits.paragraph.one" }),
    },
    {
      imgSrc: "/img/me-fit-app-two.webp",
      title: formatMessage({ id: "mefit.pro.page.benefits.title.two" }),
      description: formatMessage({ id: "mefit.pro.page.benefits.paragraph.two" }),
    },
    {
      imgSrc: "/img/me-fit-app-three.webp",
      title: formatMessage({ id: "mefit.pro.page.benefits.title.three" }),
      description: formatMessage({ id: "mefit.pro.page.benefits.paragraph.three" }),
    },
    {
      imgSrc: "/img/me-fit-app-four.webp",
      title: formatMessage({ id: "mefit.pro.page.benefits.title.four" }),
      description: formatMessage({ id: "mefit.pro.page.benefits.paragraph.four" }),
    },
  ];

  return (
    <Flex flexWrap="wrap" justifyContent="center" className={styles.container}>
      {benefits.map((benefit, index) => (
        <FeatureCard
          className={styles.benefitCard}
          key={index}
          imgSrc={benefit.imgSrc}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </Flex>
  );
};

export default ProBenefits;
