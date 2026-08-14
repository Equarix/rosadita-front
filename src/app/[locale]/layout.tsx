import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { Toaster } from "sonner";
import QueryProvider from "@/context/QueryProvider";
import { Analytics } from "@vercel/analytics/next";
import StructuredData from "@/components/seo/StructuredData";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Equarix | Soluciones Digitales y Desarrollo de Software",
    template: "%s | Equarix",
  },
  description:
    "Equarix es una agencia de desarrollo de software especializada en soluciones digitales innovadoras, desarrollo web a medida, aplicaciones móviles y transformación digital para empresas.",
  keywords: [
    "desarrollo de software",
    "diseño web",
    "aplicaciones móviles",
    "transformación digital",
    "Equarix",
    "tecnología",
    "soluciones digitales",
    "software a medida",
    "Perú",
    "latam",
  ],
  authors: [{ name: "Equarix" }],
  creator: "Equarix",
  publisher: "Equarix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://equarix.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Equarix | Soluciones Digitales y Desarrollo de Software",
    description:
      "Transformamos tus ideas en realidad con tecnología de vanguardia. Expertos en desarrollo web, móvil y consultoría digital.",
    url: "https://equarix.vercel.app/",
    siteName: "Equarix",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Equarix - Soluciones Digitales",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Equarix | Soluciones Digitales y Desarrollo de Software",
    description: "Expertos en desarrollo de software y transformación digital.",
    images: ["/images/og-image.jpg"],
    creator: "@equarix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  category: "technology",
};

import { getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased font-inter content overflow-x-hidden flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <QueryProvider>
            <StructuredData />
            <Header />
            <main className="flex flex-col h-full overflow-x-hidden">
              {children}
            </main>
            <Footer />
            <Toaster richColors position="top-right" />
            <Analytics />
            <GoogleAnalytics gaId="G-GM7MZ5C5TW" />
            <GoogleTagManager gtmId="G-GM7MZ5C5TW" />
          </QueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
