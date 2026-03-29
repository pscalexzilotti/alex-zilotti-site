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
    default: "Alex Zilotti | Psicólogo Jurídico e Alta Performance",
    template: "%s | Alex Zilotti Psicólogo",
  },
  description:
    "Psicologia Jurídica, TCC de Alta Performance e Hipnose clínica como recurso auxiliar. Atendimento para empresários, influenciadores, artistas e executivos. CRP 08/48529.",
  keywords: [
    "psicólogo jurídico",
    "psicólogo forense",
    "psicólogo alta performance",
    "TCC alta performance",
    "hipnose clínica",
    "psicólogo para empresários",
    "psicólogo para influenciadores",
    "Curitiba",
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
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
