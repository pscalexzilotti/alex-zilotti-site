import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Zilotti | Psicólogo — Alta Performance, Jurídico & Empresas",
  description:
    "Psicólogo CRP 08/48529. Atendimento clínico de alta performance, psicologia jurídica e desenvolvimento humano para empresas. Curitiba/PR.",
  openGraph: {
    title: "Alex Zilotti | Psicólogo",
    description: "Alta performance, psicologia jurídica e desenvolvimento humano para empresas.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
