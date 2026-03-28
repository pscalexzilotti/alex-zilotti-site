import { Metadata } from 'next';
import { SectionHeader } from '@/components/shared/section-header';
import { Section } from '@/components/shared/section';
import { StepTimeline } from '@/components/shared/step-timeline';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Imersão | Alex Zilotti - Psicólogo',
  description: 'Programa de Imersão: processo intensivo de transformação pessoal em 90 dias com Alex Zilotti, Psicólogo CRP 08/48529.',
};

const etapas = [
  {
    step: '01',
    title: 'Diagnóstico Inicial',
    description: 'Sessão aprofundada para mapear sua história, padrões de comportamento, crenças limitantes e objetivos. Construímos juntos o plano personalizado.',
  },
  {
    step: '02',
    title: 'Processo Intensivo',
    description: 'Sessões semanais com ferramentas de psicologia, neurociência e coaching. Exercícios práticos entre as sessões para acelerar a transformação.',
  },
  {
    step: '03',
    title: 'Integração e Resultados',
    description: 'Consolidação das mudanças, desenvolvimento de autonomia e preparo para sustentar os resultados após o programa.',
  },
];

const beneficios = [
  'Clareza sobre propósito e direção de vida',
  'Redução significativa de ansiedade e estresse',
  'Melhora nos relacionamentos pessoais e profissionais',
  'Aumento da autoconfiança e autoestima',
  'Ferramentas práticas para gestão emocional',
  'Alta performance sem esgotamento',
];

export default function ImersaoPage() {
  return (
    <main>
      <Section className="bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-amber-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Programa Exclusivo
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Imersão 90 Dias
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Um processo intensivo e personalizado para quem quer mudanças reais e duradouras — não apenas alívio temporário.
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
            <Link href="/contato">Quero Participar</Link>
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Como funciona o programa"
          subtitle="Um processo estruturado em três etapas para garantir transformação real"
          centered
        />
        <div className="mt-12">
          <StepTimeline steps={etapas} />
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title="O que você vai conquistar"
            subtitle="Resultados concretos que nossos participantes alcançam"
            centered
          />
          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {beneficios.map((b) => (
              <li key={b} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm">
                <span className="text-green-500 text-xl">✓</span>
                <span className="text-slate-700">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Pronto para começar sua transformação?
          </h2>
          <p className="text-slate-600 mb-4">
            As vagas são limitadas para garantir a qualidade do acompanhamento. Entre em contato e saiba se o programa é ideal para você.
          </p>
          <p className="text-slate-500 text-sm mb-8">
            *Programa conduzido por Alex Zilotti, Psicólogo CRP 08/48529, com formação em Psicologia Jurídica e especialização em TCC.
          </p>
          <Button asChild size="lg">
            <Link href="/contato">Agendar Conversa Inicial</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
