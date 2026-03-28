import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/utils";
import homeData from "@/content/home.json";

export default function Hero() {
  const { hero } = homeData;
  return (
    <section className="w-full min-h-[85vh] flex items-center bg-primary px-6">
      <div className="max-w-5xl mx-auto py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-accent mb-4">Psicologo CRP 08/48529</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground leading-tight mb-6">{hero.headline}</h1>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">{hero.subheadline}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="primary">
              <Link href="/contato">{hero.cta_primary}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{hero.cta_secondary}</a>
            </Button>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="w-80 h-96 bg-accent/10 rounded-sm overflow-hidden">
            <img src="/images/alex-portrait-1.jpg" alt="Alex Zilotti" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}
