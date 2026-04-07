import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Zilotti | Psicologia, Jurídico & Desenvolvimento Humano",
  description:
    "Psicólogo (CRP 08/48529) especializado em alta performance, psicologia jurídica e consultoria de desenvolvimento humano para empresas. Rigor técnico, sigilo absoluto.",
  keywords: [
    "psicólogo executivos",
    "psicologia jurídica",
    "desenvolvimento humano empresas",
    "psicoterapia alta performance",
    "Alex Zilotti CRP 08/48529",
  ],
  openGraph: {
    title: "Alex Zilotti | Psicologia, Jurídico & Desenvolvimento Humano",
    description:
      "Atendo quem vive sob pressão constante: executivos, profissionais do direito e pessoas em conflitos de alta complexidade.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={cormorant.variable}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}