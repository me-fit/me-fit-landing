import { Locale } from "@/lib/i18n-config";
import FeatureCard from "../FeatureCard/FeatureCard"; 
import { getIntl } from "@/lib/intl";
import styles from "./AppBenefits.module.css";
import Flex from "../Flex";

interface AppBenefitsProps {
    locale: Locale;
}

const AppBenefits = ({ locale }: AppBenefitsProps) => {
  const { formatMessage } = getIntl(locale);

  // Define an array of objects containing imgSrc, title, and description
  const benefits = [
    {
      imgSrc: "/img/me-fit-app-one.webp",
      title: formatMessage({ id: "mefit.app.benefit.title.one" }),
      description: formatMessage({ id: "mefit.app.benefit.one" }),
    },
    {
      imgSrc: "/img/me-fit-app-two.webp",
      title: formatMessage({ id: "mefit.app.benefit.title.two" }),
      description: formatMessage({ id: "mefit.app.benefit.two" }),
    },
    {
      imgSrc: "/img/me-fit-app-three.webp",
      title: formatMessage({ id: "mefit.app.benefit.title.three" }),
      description: formatMessage({ id: "mefit.app.benefit.three" }),
    },
    {
      imgSrc: "/img/me-fit-app-four.webp",
      title: formatMessage({ id: "mefit.app.benefit.title.four" }),
      description: formatMessage({ id: "mefit.app.benefit.four" }),
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

export default AppBenefits;
