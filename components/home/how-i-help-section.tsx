import Section from "@/components/shared/section";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import servicesData from "@/content/services.json";

export default function HowIHelpSection() {
  const services = servicesData.services.slice(0, 3);
  return (
    <Section>
      <SectionHeader title="Como posso ajudar" subtitle="Tres formas principais de atuacao psicologica." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.id} className="bg-card border border-border rounded-sm p-6 flex flex-col">
            <h3 className="font-serif text-lg text-primary mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{s.description}</p>
            <Button asChild size="sm" variant="outline">
              <Link href={`/servicos#${s.id}`}>Saiba mais</Link>
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
