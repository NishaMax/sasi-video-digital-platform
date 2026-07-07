import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PwaRegistry } from "@/components/PwaRegistry";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sasivideo.lk"),
  title: "Sasi Video | Entertainment • Electronics • Trust",
  description: "Your trusted local store for Entertainment, Electronics, and Mobile Accessories in Kalawana and Ratnapura.",
  openGraph: {
    title: "Sasi Video",
    description: "Your premier destination for electronics and trusted services in Kalawana and Ratnapura.",
    url: "https://sasivideo.lk", // We can update this when deploying to the real domain
    siteName: "Sasi Video Digital Platform",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_LK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Force dark mode background to match the theme color before CSS loads */}
        <meta name="theme-color" content="#dc2626" />
      </head>
      <body className={`${plusJakarta.className} bg-[#0A0A0A] text-white antialiased selection:bg-red-500/30 selection:text-white`}>
        {children}
        <PwaRegistry />
      </body>
    </html>
  );
}
