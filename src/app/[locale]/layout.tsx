import { Locale } from "@/lib/i18n-config";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import "./styles/globals.scss";
import Footer from "@/components/Footer/Footer";

type LayoutProps = {
  params: { locale: Locale };
  children: React.ReactNode;
};

const poppins = Poppins({ 
  weight: ['700', '500', '400'],
  subsets: ["latin"] 
});

export default function RootLayout({ params, children }: LayoutProps) {
  const { locale } = params;

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
        <meta property="og:title" content="Me Fit"></meta>
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
      </body>
    </html>
  );
}
