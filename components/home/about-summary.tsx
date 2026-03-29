import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutSummary() {
  return (
    <section className="bg-[#f7f3ed] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="hidden md:flex justify-center">
          <Image
            src="/images/Design sem nome.png"
            alt="Alex Zilotti Psicólogo"
            width={320}
            height={480}
            className="rounded-sm border border-amber-200 shadow-lg object-cover"
          />
        </div>
        <div>
          <p className="label-caps mb-4">Sobre mim</p>
          <h2 className="font-serif text-3xl text-[#0a1628] mb-6">
            Alex Cristoffer Zilotti
          </h2>
          <ul className="flex flex-col gap-3 mb-8">
            {
[
              "Psicólogo clínico com especialização em Psicologia Jurídica e Forense",
              "Especialista em Terapia Cognitivo-Comportamental (TCC) de Alta Performance",
              "CRP 08/48529 - Conselho Federal de Psicologia",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-700">
                <span className="text-amber-600 font-bold mt-0.5">+</span>
                {item}
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
