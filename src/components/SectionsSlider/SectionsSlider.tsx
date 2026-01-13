"use client";
import { ReactNode, useMemo, useState, useRef } from "react";
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

  // Swipe handling state
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  // Reset the timer
  const resetTimer = () => {
    setAnimationDuration(null);
    setTimeout(() => {
      setAnimationDuration(ANIMATION_DURATION_CONSTANT);
    }, ANIMATION_DURATION_CONSTANT);
  };

  // Handle swipe left (go to next slide)
  const handleSwipeLeft = () => {
    setActiveIndex((value) => {
      if (value + 1 === slides.length) {
        return 0;
      } else {
        return value + 1;
      }
    });
    resetTimer();
  };

  // Handle swipe right (go to previous slide)
  const handleSwipeRight = () => {
    setActiveIndex((value) => {
      if (value === 0) {
        return slides.length - 1;
      } else {
        return value - 1;
      }
    });
    resetTimer();
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 50; // minimum distance for swipe
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped left
        handleSwipeLeft();
      } else {
        // Swiped right
        handleSwipeRight();
      }
    }
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      touchEndX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      const swipeThreshold = 50; // minimum distance for swipe
      const diff = touchStartX.current - touchEndX.current;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swiped left
          handleSwipeLeft();
        } else {
          // Swiped right
          handleSwipeRight();
        }
      }
      isDragging.current = false;
    }
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

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
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
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
                // Stop timer and reset it
                resetTimer();
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
