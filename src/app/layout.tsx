import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sasi Video | Entertainment • Electronics • Trust",
  description: "Your Trusted Local Store for Entertainment, Electronics, and Mobile Accessories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} antialiased`}
    >
      <body className="bg-background text-foreground font-sans min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
