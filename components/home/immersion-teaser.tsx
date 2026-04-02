import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ImmersionTeaser() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="surface-panel mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 rounded-[1.75rem] px-8 py-10 md:grid-cols-[1fr_0.95fr] md:px-12 md:py-14">
        <div>
          <div className="mb-5 flex items-center gap-4">
            <span className="label-caps">Experiência Intensiva</span>
            <span className="editorial-rule" />
          </div>
          <h2 className="max-w-2xl text-ivory">
            Imersão Rotas de Alta Performance Emocional
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-quiet">
            Três dias em hotel de alto padrão para pausar, observar com profundidade e reorganizar a própria rota com clareza psicológica e critério.
          </p>
          <Button size="lg" asChild variant="primary" className="mt-8">
            <Link href="/imersao">Conhecer a Imersão</Link>
          </Button>
        </div>
        <div className="hidden justify-center md:flex">
          <div className="overflow-hidden rounded-[1.4rem] border border-white/10">
            <Image
              src="/images/Design%20sem%20nome%20(3).png"
              alt="Alex Zilotti - Imersão Alta Performance"
              width={560}
              height={420}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
