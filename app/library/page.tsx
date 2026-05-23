import type { Metadata } from "next";
import LivingLibrary from "@/components/LivingLibrary";
import { createPageMetadata } from "../siteMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "The Living Library",
  description:
    "An immersive cinematic bookshelf for Sarcastikant, Dear Non-Biological God Is this the nation you promised, Neti Neti, and the living archive.",
  canonical: "/library"
});

export default function LibraryPage() {
  return <LivingLibrary />;
}
