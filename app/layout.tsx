import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { getFaqSchema, getProfessionalServiceSchema } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const SITE_URL = "https://analiapsicologa.com";
const TITLE = "Ana Lia Nocrato | Psicóloga em Fortaleza | Terapia Online e Presencial";
const DESCRIPTION =
  "Psicoterapia individual e de casal com Ana Lia Aguiar Nocrato, psicóloga clínica (CRP 11/18220). Atendimento presencial em Fortaleza/CE e online, com foco em ansiedade, relacionamentos, autoestima e saúde mental da mulher.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "psicóloga Fortaleza",
    "terapia online",
    "psicoterapia ansiedade",
    "terapia de casal Fortaleza",
    "psicóloga saúde da mulher",
  ],
  authors: [{ name: "Ana Lia Aguiar Nocrato" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Ana Lia Nocrato | Psicóloga",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/hero-ana-lia.jpg", width: 1707, height: 2380, alt: "Ana Lia Nocrato, psicóloga" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero-ana-lia.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const professionalServiceSchema = getProfessionalServiceSchema();
  const faqSchema = getFaqSchema();

  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable} scroll-pt-24`}>
      <body className="min-h-screen bg-cream text-ink antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
