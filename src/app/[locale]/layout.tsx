import { Locale } from "@/lib/intl";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header/Header";
import "./styles/globals.scss";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import HubSpotRefresher from "@/components/HubSpotRefresher/HubSpotRefresher";

const poppins = Poppins({
  weight: ["700", "500", "400"],
  subsets: ["latin"],
});

export default async function RootLayout({ params, children }: {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;

  return (
    <html lang={locale}>
      <head>
        <title>ME Fit</title>
        <link
          rel="icon"
          href="/img/me-fit-logo-black-background.png"
          sizes="any"
          type="image/png"
        />
        <meta property="og:title" content="ME Fit"></meta>
        <meta
          property="og:image"
          content="/img/me-fit-logo-black-background.png"
        ></meta>
        <link
          rel="icon"
          href="/img/me-fit-logo-white-background.svg"
          sizes="any"
          type="image/svg+xml"
        />
      </head>
      <body className={poppins.className}>
        <Header locale={locale} />

        {children}

        <Footer locale={locale} />

        <Analytics />

        <HubSpotRefresher />

        {/* HubSpot Chat Widget */}
        <Script
          id="hs-script-loader"
          src="//js-na1.hs-scripts.com/49177217.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
