import { Locale } from "@/lib/i18n-config";
import Flex from "../Flex";
import Image from "next/image";
import { getIntl } from "@/lib/intl";
import styles from "./StoreButtons.module.css";

interface StoreButtonsProps {
    locale: Locale;
}

function StoreButtons({locale}: StoreButtonsProps) {
const {formatMessage} = getIntl(locale);
  return (
    <>
      <h5 className={styles.header}>
        {formatMessage({ id: "download.app.call.to.action" })}
      </h5>
      <Flex gap="0.5rem">
        <a href="https://apps.apple.com/app/me-fit/id1514761739?ign-itscg=30200&ign-itsct=apps_box_link">
          <Image
            width={124}
            height={37}
            src="/img/apple-store.svg"
            alt={formatMessage({ id: "appstore.alt.text" })}
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.mefit.app">
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
