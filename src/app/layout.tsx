import type { Metadata } from "next";
import { Anonymous_Pro } from "next/font/google";
import localFont from "next/font/local";
import SiteNav from "@/components/SiteNav";
import { OWNER_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/config/site";
import "./globals.css";

const anonymousPro = Anonymous_Pro({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

const suisseIntl = localFont({
  variable: "--font-nav",
  src: "../fonts/SuisseIntl-Regular.woff2",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s — ${OWNER_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: ["/og/default.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/og/default.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${anonymousPro.variable} ${suisseIntl.variable}`}>
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
