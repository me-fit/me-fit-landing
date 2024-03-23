import Image from "next/image";
import styles from "./FeatureCard.module.css";
import Flex from "../Flex";

interface FeatureCardProps {
  imgSrc: string;
  title: string;
  description: string;
  className?: string;
}

function FeatureCard({ className, description, imgSrc, title }: FeatureCardProps) {
  return (
    <div className={`${styles.card} ${className}`}>
      <Flex columnGap="2rem" className={styles.flexContainer}>
        <Image
          className={styles.img}
          src={imgSrc}
          width={200}
          height={200}
          alt=""
        />
        <div>
          <h3 className={styles.header}>{title}</h3>
          <p>{description}</p>
        </div>
      </Flex>
    </div>
  );
}

export default FeatureCard;
