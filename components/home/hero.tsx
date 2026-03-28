import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="bg-background w-full pt-20 pb-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <p className="text-xs uppercase tracking-widest text-accent mb-4">
            Psicologia Jurídica • TCC de Alta Performance • Imersões em hotéis de alto padrão
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary leading-tight mb-6">
            Psicologia Jurídica, Alta Performance e Hipnose clínica como recurso auxiliar.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Atendimento psicológico e imersões para empresários, influenciadores, artistas e
            executivos que lidam com pressão constante, exposição pública e decisões de alto impacto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="primary">
              <Link href="/contato">Agendar sessão</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar com a equipe
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            Psicólogo graduado · Pós-graduando em Psicologia Forense e Jurídica e em TCC de Alta
            Performance · MBA em Gestão de Pessoas · CRP 08/48529
          </p>
        </div>

        {/* Foto */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-96 md:w-80 md:h-[440px]">
            <div
              className="absolute inset-0 border border-accent rounded-sm"
              style={{ transform: "translate(8px,8px)" }}
            />
            <img
              src="/images/alex-portrait-1.jpg"
              alt="Alex Zilotti – Psicólogo CRP 08/48529"
              className="relative z-10 w-full h-full object-cover rounded-sm grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
