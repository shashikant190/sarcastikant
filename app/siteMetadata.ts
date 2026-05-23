import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sarcastikant.com";

export const brand = {
  name: "Sarcastikant",
  siteName: "Sarcastikant",
  url: siteUrl,
  favicon: "/branding/favicon-symbol.png",
  logo: "/branding/logo-signature-gold.png",
  ogImage: "/branding/og-image.jpg"
};

export const searchableIdentities = [
  "Sarcastikant",
  "Dear Non-Biological God, Is this the nation you promised?",
  "Dear Non-Biological God, Is this the nation you promised ?",
  "Dear Non-Biological God",
  "Vedic Book writer",
  "Neti Neti",
  "The Living Library"
];

export const siteDescription =
  "Sarcastikant is the authored home of Neti Neti, The Living Library, Dear Non-Biological God, systems, fragments, and cinematic literary experiments.";

type PageMetadata = {
  title: string;
  description: string;
  canonical: string;
};

export function createPageMetadata({ title, description, canonical }: PageMetadata): Metadata {
  return {
    title,
    description,
    keywords: searchableIdentities,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: brand.siteName,
      images: [
        {
          url: brand.ogImage,
          width: 2000,
          height: 2000,
          alt: "Sarcastikant, Neti Neti, and The Living Library"
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [brand.ogImage]
    }
  };
}
