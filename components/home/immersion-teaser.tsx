import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ImmersionTeaser() {
  return (
    <section className="bg-[#0a1628] py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="label-caps mb-4">Experiência Intensiva</p>
          <h2 className="font-serif text-white text-3xl md:text-4xl mb-4">
            Imersão Rotas de Alta Performance Emocional
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            3 dias em hotel de alto padrão para pausar, olhar para a própria
            vida com profundidade e redesenhar sua rota com clareza.
          </p>
          <Button
            size="lg"
            asChild
            className="bg-amber-600 hover:bg-amber-700 text-white border-0"
          >
            <Link href="/imersao">Conhecer a Imersão</Link>
          </Button>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <Image
            src="/images/Design%20sem%20nome%20(3).png"
            alt="Alex Zilotti - Imersão Alta Performance"
            width={560}
            height={420}
            className="rounded-sm object-cover shadow-lg border border-amber-900/30"
          />
        </div>
      </div>
    </section>
  );
}
