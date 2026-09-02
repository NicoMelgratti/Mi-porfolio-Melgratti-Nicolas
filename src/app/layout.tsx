import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono, Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-tungsten",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nicomelgratti.vercel.app"),
  title: "Nicolás Melgratti | Full-Stack Software Developer",
  description: "Portafolio profesional de Nicolás Melgratti. Analista Universitario en Sistemas e Ingeniero de Software.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Nicolás Melgratti | Full-Stack Software Developer",
    description: "Portafolio profesional y proyectos de Nicolás Melgratti (UTN FRSF).",
    url: "https://nicomelgratti.vercel.app",
    siteName: "Nicolás Melgratti Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 800,
        alt: "Nicolás Melgratti Logo NM",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nicolás Melgratti | Full-Stack Software Developer",
    description: "Portafolio profesional y proyectos de Nicolás Melgratti (UTN FRSF).",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${oswald.variable} ${playfair.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
