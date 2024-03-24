import Image from "next/image";
import styles from "./FeatureCard.module.css";
import Flex from "../Flex/Flex";
import { ReactNode } from "react";

interface FeatureCardProps {
  imgSrc?: string;
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

function FeatureCard({
  className,
  description,
  imgSrc,
  title,
  icon
}: FeatureCardProps) {
  return (
    <div className={`${styles.card} ${className}`}>
      <Flex columnGap="2rem" className={styles.flexContainer}>
        {imgSrc && (
          <Image
            className={styles.img}
            src={imgSrc}
            width={200}
            height={200}
            alt=""
          />
        )}
        {
          icon && icon
        }
        <div>
          <h3 className={styles.header}>{title}</h3>
          <p>{description}</p>
        </div>
      </Flex>
    </div>
  );
}

export default FeatureCard;
