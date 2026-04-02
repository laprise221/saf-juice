import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Saf Juice — Jus de fruits frais, sans sucres ajout\u00e9s",
  description:
    "Jus de fruits 100% naturels, press\u00e9s \u00e0 froid, livr\u00e9s chez vous \u00e0 Dakar. Sans sucres ajout\u00e9s. Bouye, bissab, gingembre et plus.",
  keywords: [
    "jus de fruits",
    "Dakar",
    "livraison",
    "naturel",
    "sans sucre",
    "bouye",
    "bissab",
    "Saf Juice",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Saf Juice",
              telephone: "+221774361676",
              description:
                "Jus de fruits 100% naturels, press\u00e9s \u00e0 froid, livr\u00e9s chez vous \u00e0 Dakar.",
              priceRange: "1200-2000 Fcfa",
              servesCuisine: "Jus de fruits frais",
              sameAs: ["https://www.instagram.com/safjuice"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
