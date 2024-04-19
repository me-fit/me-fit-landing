import { Locale } from "@/lib/intl";
import FeatureCard from "../FeatureCard/FeatureCard";
import { getIntl } from "@/lib/intl";
import styles from "./ProBenefits.module.css";
import Flex from "../Flex/Flex";
import TrackIcon from "../icons/TrackIcon";
import EditSquareIcon from "../icons/EditSquareIcon";
import CalendarMonth from "../icons/CalendarMonthIcon";
import CheckListIcon from "../icons/CheckListIcon";

interface ProBenefitsProps {
  locale: Locale;
}

const ProBenefits = ({ locale }: ProBenefitsProps) => {
  const { formatMessage } = getIntl(locale);

  const benefits = [
    {
      icon: <EditSquareIcon width={"100px"} height={"auto"} />,
      title: formatMessage({ id: "mefit.pro.page.benefits.title.one" }),
      description: formatMessage({
        id: "mefit.pro.page.benefits.paragraph.one",
      }),
    },
    {
      icon: <TrackIcon width={"100px"} height={"auto"} />,
      title: formatMessage({ id: "mefit.pro.page.benefits.title.two" }),
      description: formatMessage({
        id: "mefit.pro.page.benefits.paragraph.two",
      }),
    },
    {
      icon: <CalendarMonth width={"100px"} height={"auto"} />,
      title: formatMessage({ id: "mefit.pro.page.benefits.title.three" }),
      description: formatMessage({
        id: "mefit.pro.page.benefits.paragraph.three",
      }),
    },
    {
      icon: <CheckListIcon width={"100px"} height={"auto"} />,
      title: formatMessage({ id: "mefit.pro.page.benefits.title.four" }),
      description: formatMessage({
        id: "mefit.pro.page.benefits.paragraph.four",
      }),
    },
  ];

  return (
    <Flex flexWrap="wrap" justifyContent="center" className={styles.container}>
      {benefits.map((benefit, index) => (
        <FeatureCard
          className={styles.benefitCard}
          key={index}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </Flex>
  );
};

export default ProBenefits;
