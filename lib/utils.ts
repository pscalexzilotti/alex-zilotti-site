import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_URL =
  "https://wa.me/351925524772?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20atendimento.";

export const DOCTORALIA_URL =
  "https://www.doctoralia.com.br/alex-cristoffer-zilotti/psicologo/curitiba";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://alexzilotti.com.br";
