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
            Psicologia Juridica &bull; TCC de Alta Performance &bull; Imersoes em hoteis de alto padrao
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary leading-tight mb-6">
            Psicologia Clinica Cognitiva Comportamental para Alta Performance e Psicologia Juridica e Forense.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Atendimento psicologico e imersoes para empresarios, influenciadores, artistas e
            executivos que lidam com pressao constante, exposicao publica e decisoes de alto impacto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="primary">
              <Link href="/contato">Agendar sessao</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar com a equipe
              </a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            Psicologo graduado - Pos-graduando em Psicologia Forense e Juridica e em TCC de Alta
            Performance - MBA em Gestao de Pessoas - CRP 08/48529
          </p>
        </div>
        {/* Foto */}
        <div className="hidden md:flex justify-center items-center">
          <div className="w-full max-w-sm aspect-[3/4] bg-muted rounded-sm border border-border" />
        </div>
      </div>
    </section>
  );
}
