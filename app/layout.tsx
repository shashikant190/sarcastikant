import type { Metadata } from "next";
import "./globals.css";
import { brand, createPageMetadata, searchableIdentities, siteDescription } from "./siteMetadata";

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Sarcastikant | Neti Neti | The Living Library",
    description: siteDescription,
    canonical: "/"
  }),
  metadataBase: new URL(brand.url),
  applicationName: "Sarcastikant",
  authors: [{ name: brand.name, url: brand.url }],
  category: "literature",
  creator: brand.name,
  publisher: brand.name,
  icons: {
    apple: [{ url: brand.favicon, type: "image/png" }],
    icon: [{ url: brand.favicon, type: "image/png" }],
    shortcut: [brand.favicon]
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    },
    index: true
  },
  title: {
    default: "Sarcastikant | Neti Neti | The Living Library",
    template: "%s | Sarcastikant"
  },
  keywords: searchableIdentities,
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification
        }
      }
    : {})
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
