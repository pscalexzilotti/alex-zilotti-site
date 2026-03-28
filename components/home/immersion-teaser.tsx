import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Compass } from "lucide-react";

export default function ImmersionTeaser() {
  return (
    <section className="w-full bg-primary px-6 py-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Compass size={24} className="text-accent" />
            <p className="text-xs uppercase tracking-widest text-accent">Experiencia intensiva</p>
          </div>
          <h2 className="font-serif text-3xl text-primary-foreground mb-3">Imersao Rotas de Alta Performance Emocional</h2>
          <p className="text-primary-foreground/70 max-w-xl">3 dias em hotel de alto padrao para pausar, olhar para a propria vida com profundidade e redesenhar sua rota com clareza.</p>
        </div>
        <Button asChild size="lg" variant="primary" className="flex-shrink-0">
          <Link href="/imersao">Conhecer a Imersao</Link>
        </Button>
      </div>
    </section>
  );
}
