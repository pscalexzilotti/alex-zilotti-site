import type { Metadata } from "next";
import Section from "@/components/shared/section";
import SectionHeader from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/utils";
import { MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato | Alex Zilotti Psicólogo",
  description:
    "Entre em contato para agendar uma sessão. Psicologia Jurídica, TCC de Alta Performance e Hipnose clínica como recurso auxiliar. CRP 08/48529.",
};

export default function ContatoPage() {
  return (
    <>
      <Section>
        <SectionHeader
          title="Contato"
          subtitle="O primeiro passo é uma sessão inicial para entendermos sua demanda."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <MessageCircle size={24} className="text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-serif text-primary text-lg mb-1">WhatsApp</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Respondo em até 24 horas úteis.
                </p>
                <Button asChild size="sm" variant="primary">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Iniciar conversa
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-serif text-primary text-lg mb-1">Localização</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Atendimento presencial e online.
                </p>
                <p className="text-sm">Curitiba – PR, Brasil.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={24} className="text-accent mt-1 shrink-0" />
              <div>
                <h3 className="font-serif text-primary text-lg mb-1">Horários</h3>
                <p className="text-sm">Segunda a Sexta: 8h – 20h.</p>
                <p className="text-sm">Sábados mediante agendamento.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-xl mb-6">Como funciona o agendamento</h2>
            <ol className="space-y-4">
              {[
                "Entre em contato via WhatsApp.",
                "Fazemos uma breve conversa para entender sua demanda.",
                "Definimos juntos o melhor dia e horário.",
                "Começamos o processo na data agendada.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-sm">{step}</span>
                </li>
              ))}
            </ol>
            <p className="text-xs text-muted-foreground mt-6">
              <strong>Sigilo garantido:</strong> Todos os atendimentos seguem o Código de Ética
              Profissional do Psicólogo. CRP 08/48529.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
