import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutSummary() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div className="hidden justify-center md:flex">
          <div className="surface-panel overflow-hidden rounded-[1.5rem] p-3">
            <Image
              src="/images/Design%20sem%20nome.png"
              alt="Alex Zilotti Psicólogo"
              width={320}
              height={480}
              className="rounded-[1.2rem] object-cover"
            />
          </div>
        </div>
        <div>
          <div className="mb-5 flex items-center gap-4">
            <span className="label-caps">Sobre mim</span>
            <span className="editorial-rule" />
          </div>
          <h2 className="mb-6 text-ivory">Alex Cristoffer Zilotti</h2>
          <ul className="mb-8 flex max-w-2xl flex-col gap-4">
            {[
              "Psicólogo clínico com especialização em Psicologia Jurídica e Forense",
              "Especialista em Terapia Cognitivo-Comportamental de Alta Performance",
              "CRP 08/48529 - Conselho Federal de Psicologia",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-7 text-quiet md:text-base">
                <span className="mt-3 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button variant="outline" size="lg" asChild>
            <Link href="/sobre">Conhecer minha história</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
