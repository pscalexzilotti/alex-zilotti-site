import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Zilotti | Psicologia, Jur\u00eddico & Desenvolvimento Humano",
  description:
    "Psic\u00f3logo (CRP 08/48529) especializado em alta performance, psicologia jur\u00eddica e consultoria de desenvolvimento humano para empresas. Rigor t\u00e9cnico, sigilo absoluto.",
  keywords: [
    "psic\u00f3logo executivos",
    "psicologia jur\u00eddica",
    "desenvolvimento humano empresas",
    "psicoterapia alta performance",
    "Alex Zilotti CRP 08/48529",
  ],
  openGraph: {
    title: "Alex Zilotti | Psicologia, Jur\u00eddico & Desenvolvimento Humano",
    description:
      "Atendo quem vive sob press\u00e3o constante: executivos, profissionais do direito e pessoas em conflitos de alta complexidade.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body
        style={{
          fontFamily: "var(--sans, 'Jost', system-ui, sans-serif)",
          background: "var(--ink)",
          color: "var(--ivory)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
