import { Locale, getIntl } from "@/lib/intl";
import styles from "./ProFeatures.module.scss";
import Image from "next/image";
import Flex from "../Flex/Flex";
import classNames from "classnames";
import SectionsSlider from "../SectionsSlider/SectionsSlider";

const screenshots = [
  {
    imgSrc: "/img/me-fit-pro-workout-crud.png",
    altTranslationKey: "mefit.pro.exercise.workout.crud.screenshot.alt",
    headerTranslationKey: "mefit.pro.workout.crud.title",
    textTranslationKey: "mefit.pro.workout.crud.text",
  },
  {
    imgSrc: "/img/me-fit-pro-exercise-list.png",
    altTranslationKey: "mefit.pro.exercise.list.screenshot.alt",
    headerTranslationKey: "mefit.pro.exercise.list.title",
    textTranslationKey: "mefit.pro.exercise.list.text",
  },
  {
    imgSrc: "/img/me-fit-pro-workout-log.png",
    altTranslationKey: "mefit.pro.exercise.workout.log.screenshot.alt",
    headerTranslationKey: "mefit.pro.workout.log.title",
    textTranslationKey: "mefit.pro.workout.log.text",
  },
  {
    imgSrc: "/img/me-fit-pro-calendar.png",
    altTranslationKey: "mefit.pro.exercise.workout.calendar.screenshot.alt",
    headerTranslationKey: "mefit.pro.workout.calendar.title",
    textTranslationKey: "mefit.pro.workout.calendar.text",
  },
] as const;

interface ProFeaturesProps {
  locale: Locale;
}

function ProFeatures({ locale }: ProFeaturesProps) {
  const { formatMessage } = getIntl(locale);

  const slides = screenshots.map((screenshot, index) => {
    return (
      <Flex
        key={screenshot.imgSrc}
        gap="1rem"
        rowGap="4rem"
        justifyContent="space-between"
        className={styles.screenshotContainer}
      >
        <Image
          className={styles["screenshot"]}
          priority={true}
          src={screenshot.imgSrc}
          alt={formatMessage({ id: screenshot.altTranslationKey })}
          width={1278}
          height={685}
        />

        <div className={styles.textBlock}>
          <h3>{formatMessage({ id: screenshot.headerTranslationKey })}</h3>

          <p>{formatMessage({ id: screenshot.textTranslationKey })}</p>
        </div>
      </Flex>
    );
  });

  return (
    <div className={styles.container}>
      <h4 className={`text-align-center ${styles.header}`}>
        {formatMessage({ id: "mefit.pro.page.features.header" })}
      </h4>
      <h1 className={`text-align-center ${styles.subheader}`}>
        {formatMessage({ id: "mefit.pro.page.features.subheader" })}
      </h1>
      <div className={styles.sectionsSliderContainer}>
        <SectionsSlider slides={slides} />
      </div>
    </div>
  );
}

export default ProFeatures;
