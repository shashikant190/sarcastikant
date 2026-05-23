import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Living Library",
  description:
    "A cinematic bookshelf and immersive image-based reader for Sarcastikant's living archive."
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
