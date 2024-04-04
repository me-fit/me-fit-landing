import { Locale, getIntl } from "@/lib/intl";
import Image from "next/image";
import Link from "next/link";
import Flex from "../Flex/Flex";
import styles from "./CustomersList.module.css";

interface CustomersListProps {
  locale: Locale;
  className?: string;
}

const customers = [
  {
    imgSrc: "/img/customers/smart-road.png",
    name: "Smart Road",
    link: "https://www.smartroad.nl/",
  },
  {
    imgSrc: "/img/customers/fctwente-heracles.png",
    name: "FC Twente Heracles academie",
    link: "https://fctwenteheraclesacademie.nl/2023/10/04/academie-en-me-fit-werken-samen-aan-optimalisatie-van-krachttrainingen/",
  },
] as const;

function CustomersList({ locale, className }: CustomersListProps) {
  const { formatMessage } = getIntl(locale);

  return (
    <Flex gap="3rem" justifyContent="center" className={className}>
      {customers.map((customer) => {
        return (
          <Link
            target="_blank"
            key={customer.link}
            href={customer.link}
            className={`text-align-center logoLink ${styles.link}`}
          >
            <Flex
              alignContent="center"
              justifyContent="center"
              flexDirection="column"
              rowGap="1rem"
            >
              <Image
                className={`${styles.logo}`}
                width={100}
                height={100}
                src={customer.imgSrc}
                alt={formatMessage(
                  { id: "mefit.pro.page.customers.image.alt" },
                  {
                    customerName: customer.name,
                  }
                )}
              />
              <p className="no-margin text-align-center">{customer.name}</p>
            </Flex>
          </Link>
        );
      })}
    </Flex>
  );
}

export default CustomersList;
