import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    template: "%s | Alex Zilotti Psicologo",
    default: "Alex Zilotti | Psicologo Juridico e Alta Performance",
  },
  description:
    "Psicologia Juridica, TCC de Alta Performance e Hipnose clinica como recurso auxiliar para empresarios, influenciadores, artistas e executivos. CRP 08/48529.",
  authors: [{ name: "Alex Cristoffer Zilotti" }],
  creator: "Alex Cristoffer Zilotti",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://alexzilotti.com.br"
  ),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Alex Zilotti Psicologo",
  },
  robots: {
    index: true,
    follow: true,
  },
};
