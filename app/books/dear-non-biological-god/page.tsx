import type { Metadata } from "next";
import PdfReader from "@/components/PdfReader";
import { createPageMetadata } from "../../siteMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Dear Non-Biological God, Is this the nation you promised?",
  description:
    "A cinematic reader for Dear Non-Biological God, Is this the nation you promised? by Sarcastikant, a Neti Neti literary and Vedic book writer archive experience.",
  canonical: "/books/dear-non-biological-god"
});

export default function BookReaderPage() {
  return <PdfReader />;
}
