import { Locale } from "@/lib/i18n-config";
import { Poppins } from "next/font/google";
import Header from "../../components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

type LayoutProps = {
  params: { locale: Locale };
  children: React.ReactNode;
};

const poppins = Poppins({ 
  weight: ['500', '400'],
  subsets: ["latin"] 
});

export default function RootLayout({ params, children }: LayoutProps) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <head>
        <link
          rel="icon"
          href="/img/me-fit-logo-black-background.png"
          sizes="any"
          type="image/png"
        />
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
