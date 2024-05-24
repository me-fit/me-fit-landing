"use client";
import { ReactNode, useMemo, useState } from "react";
import Flex from "../Flex/Flex";
import styles from "./SectionsSlider.module.scss";
import classNames from "classnames";
import useInterval from "@/hooks/useInterval";

interface SectionsSliderProps {
  slides: ReactNode[];
  sliderDuration?: number;
}

function SectionsSlider({ slides, sliderDuration }: SectionsSliderProps) {
  const totalDots = slides.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const ANIMATION_DURATION_CONSTANT = sliderDuration ?? 10000;
  // We will set this to null if we want to pause the setInterval
  const [animationDuration, setAnimationDuration] = useState<number | null>(
    ANIMATION_DURATION_CONSTANT
  );
  const totalSlidesPlaceholdingArray: Array<number> = useMemo(() => {
    return Array(totalDots).fill(0);
  }, [totalDots]);

  // TODO only execute this when the controls bar is in screen
  useInterval(() => {
    setActiveIndex((value) => {
      if (value + 1 === slides.length) {
        return 0;
      } else {
        return value + 1;
      }
    });
  }, animationDuration);

  return (
    <div
      className={styles.container}
      style={{
        ["--animation-duration" as string]: `${animationDuration}ms`,
      }}
    >
      <div
        className={styles.pictureFrameSlidesContainer}
        style={{
          gap: "var(--section-horizontal-padding)",
          transform: `translateX(calc(-${
            activeIndex * 100
          }% - var(--section-horizontal-padding) * ${activeIndex}))`,
        }}
      >
        {totalSlidesPlaceholdingArray.map((_, index) => {
          return (
            <div className={styles.pictureFrame} key={index}>
              {slides[index]}
            </div>
          );
        })}
      </div>

      <Flex
        flexDirection="row"
        alignItems="center"
        gap="1rem"
        className={styles.controlsBar}
      >
        {totalSlidesPlaceholdingArray.map((_, index) => {
          return (
            <div
              role="button"
              onClick={() => {
                setActiveIndex(index);
                // Stop timer
                setAnimationDuration(null);
                // We will continue the timer after animation duration, that way previous intervals dont affect the current slide
                setTimeout(() => {
                  setAnimationDuration(ANIMATION_DURATION_CONSTANT);
                }, ANIMATION_DURATION_CONSTANT);
              }}
              className={classNames(styles.circle, {
                [styles.circleActive]: index == activeIndex,
              })}
              key={index}
            >
              {index == activeIndex && (
                <div className={styles.circleProgressBar}></div>
              )}
            </div>
          );
        })}
      </Flex>
    </div>
  );
}

export default SectionsSlider;
