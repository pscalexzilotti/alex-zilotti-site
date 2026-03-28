import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alex-zilotti-site.vercel.app"),
  title: {
    default: "Alex Zilotti | Psicologo Juridico e Alta Performance",
    template: "%s | Alex Zilotti Psicologo",
  },
  description:
    "Psicologia Juridica, TCC de Alta Performance e Hipnose clinica como recurso auxiliar. Atendimento para empresarios, influenciadores, artistas e executivos. CRP 08/48529.",
  keywords: [
    "psicologo juridico",
    "psicologo forense",
    "psicologo alta performance",
    "TCC alta performance",
    "hipnose clinica",
    "psicologo para empresarios",
    "psicologo para influenciadores",
    "Sao Jose dos Pinhais",
  ],
  openGraph: {
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
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
