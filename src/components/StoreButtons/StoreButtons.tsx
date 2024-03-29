import { Locale } from "@/lib/intl";
import Flex from "../Flex/Flex";
import Image from "next/image";
import { getIntl } from "@/lib/intl";
import styles from "./StoreButtons.module.css";

interface StoreButtonsProps {
  locale: Locale;
}

function StoreButtons({ locale }: StoreButtonsProps) {
  const { formatMessage } = getIntl(locale);
  return (
    <>
      <h5 className={"no-margin"}>{formatMessage({ id: "mefit.app" })}</h5>

      <p className={styles.text}>{formatMessage({ id: "mefit.app.text" })}</p>
      <Flex gap="0.5rem">
        <a
          className={styles.link}
          href="https://apps.apple.com/app/me-fit/id1514761739?ign-itscg=30200&ign-itsct=apps_box_link"
        >
          <Image
            width={124}
            height={37}
            src="/img/apple-store.svg"
            alt={formatMessage({ id: "appstore.alt.text" })}
          />
        </a>
        <a
          className={styles.link}
          href="https://play.google.com/store/apps/details?id=com.mefit.app"
        >
          <Image
            width={124}
            height={37}
            src="/img/play-store.svg"
            alt={formatMessage({ id: "playstore.alt.text" })}
          />
        </a>
      </Flex>
    </>
  );
}

export default StoreButtons;
