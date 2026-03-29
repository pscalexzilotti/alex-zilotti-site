import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Imersão | Alex Zilotti - Psicólogo",
  description:
    "Imersão Rotas de Alta Performance Emocional - 3 dias em hotel de alto padrão para pausar, refletir e redesenhar sua rota com clareza e método.",
};

const dias = [
  {
    numero: "01",
    titulo: "Autoconhecimento Profundo",
    descricao:
      "Mapeamento do seu funcionamento cognitivo e emocional. Identificação de padrões que sustentam ou sabotam suas decisões, relacionamentos e resultados.",
    topicos: [
      "Crenças centrais e pensamentos automáticos",
      "Mapa de funcionamento sob pressão",
      "Gatilhos emocionais em contextos de alta responsabilidade",
    ],
  },
  {
    numero: "02",
    titulo: "Performance Emocional em Decisões Complexas",
    descricao:
      "Ferramentas práticas da TCC aplicadas a situações de alta exposição pública, pressão por resultados, processos judiciais e conflitos interpessoais.",
    topicos: [
      "Gestão de ansiedade de performance",
      "Tomada de decisão sob pressão e exposição",
      "Comunicação assertiva em contextos de risco",
    ],
  },
  {
    numero: "03",
    titulo: "Planejamento e Próximos Passos",
    descricao:
      "Construção de um plano concreto de mudanças, estratégias de manutenção e definição de objetivos alinhados a valores, responsabilidade e saúde emocional.",
    topicos: [
      "Definição de metas realistas e sustentáveis",
      "Estratégias de manutenção pós-imersão",
      "Clareza de próximos passos com método e ética",
    ],
  },
];

export default function ImersaoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] py-24 px-6 text-center">
        <p className="label-caps text-amber-400 mb-6">
          Experiência Intensiva - Vagas Limitadas
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-6 max-w-4xl mx-auto">
          Imersão Rotas de Alta Performance Emocional
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          3 dias em hotel de alto padrão para pausar, olhar para a própria vida
          com profundidade e redesenhar sua rota com clareza, método e suporte
          psicológico especializado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="primary">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Quero saber mais
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0a1628]">
            <Link href="/contato">Solicitar informações</Link>
          </Button>
        </div>
      </section>

      {/* Para quem é */}
      <section className="bg-background py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="label-caps mb-4">Público-alvo</p>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            Para quem é esta imersão
          </h2>
          <p className="text-muted-foreground text-base mb-12">
            Para quem não pode simplesmente parar tudo, mas sabe que precisa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Empresários e executivos que lidam com decisões de alto impacto financeiro e humano.",
              "Influenciadores e artistas sob exposição pública constante, contratos, haters e cobrança por relevância.",
              "Pessoas envolvidas em processos judiciais que sentem o peso emocional do litígio.",
              "Líderes sob alta responsabilidade que sabem que um erro impacta equipes, contratos e reputações.",
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-2xl font-serif text-accent font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground text-base leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Dias */}
      <section className="bg-muted py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="label-caps mb-4">Estrutura</p>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
            O que acontece em cada dia
          </h2>
          <p className="text-muted-foreground text-base mb-12">
            Processo estruturado com método e ética, baseado em TCC, Psicologia
            Jurídica e Gestão de Pessoas.
          </p>
          <div className="space-y-12">
            {dias.map((dia) => (
              <div key={dia.numero} className="flex gap-6 items-start">
                <span className="text-3xl font-serif text-accent font-bold min-w-[3rem]">
                  {dia.numero}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-primary mb-2">
                    {dia.titulo}
                  </h3>
                  <p className="text-muted-foreground text-base mb-4">
                    {dia.descricao}
                  </p>
                  <ul className="space-y-1">
                    {dia.topicos.map((t, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="text-accent">•</span> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="bg-background py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-primary mb-12 text-center">
            Base metodológica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                titulo: "TCC",
                descricao:
                  "Terapia Cognitivo-Comportamental aplicada a contextos de alta pressão e decisões complexas.",
              },
              {
                titulo: "Psicologia Jurídica",
                descricao:
                  "Suporte emocional para quem enfrenta processos, litígios e responsabilidades legais.",
              },
              {
                titulo: "Gestão de Pessoas",
                descricao:
                  "Estratégias de liderança, comunicação e desenvolvimento humano em ambientes de alta responsabilidade.",
              },
            ].map((m) => (
              <div key={m.titulo} className="text-center">
                <h3 className="font-serif text-xl text-primary mb-3">
                  {m.titulo}
                </h3>
                <p className="text-muted-foreground text-sm">{m.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formato */}
      <section className="bg-muted py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl text-primary mb-12 text-center">
            Formato e logística
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Duração", valor: "3 dias intensivos" },
              {
                label: "Local",
                valor: "Hotel de alto padrão (informado aos confirmados)",
              },
              {
                label: "Vagas",
                valor: "Grupo reduzido - acesso mediante triagem",
              },
              {
                label: "Formato",
                valor: "Presencial, com dinâmicas individuais e em grupo",
              },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="label-caps mb-2">{item.label}</p>
                <p className="text-foreground text-sm">{item.valor}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-sm p-6 text-sm text-muted-foreground">
            <strong>Importante:</strong> Esta imersão não substitui psicoterapia
            individual. É uma experiência intensiva de autoconhecimento e
            planejamento pessoal, baseada em referenciais da Psicologia, sempre
            em conformidade com as normas do Conselho Federal de Psicologia e
            com o Código de Ética Profissional do Psicólogo.
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#0a1628] py-20 px-6 text-center">
        <p className="label-caps text-amber-400 mb-4">Vagas limitadas</p>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
          Pronto para redesenhar sua rota?
        </h2>
        <p className="text-gray-300 text-base max-w-xl mx-auto mb-10">
          Entre em contato para saber sobre datas, valores e disponibilidade. O
          acesso é mediante triagem — não via compra direta.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="primary">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Falar pelo WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0a1628]">
            <Link href="/contato">Enviar mensagem</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
