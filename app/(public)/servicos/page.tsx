import { Metadata } from 'next';
import { SectionHeader } from '@/components/shared/section-header';
import { Section } from '@/components/shared/section';
import { IconCard } from '@/components/shared/icon-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Serviços | Alex Zilotti - Psicólogo',
  description: 'Conheça os serviços de psicologia oferecidos por Alex Zilotti: consultas individuais, atendimento online e programas especializados.',
};

const servicos = [
  {
    icon: '🧠',
    title: 'Psicoterapia Individual',
    description: 'Atendimento personalizado para adultos que buscam autoconhecimento, resolução de conflitos internos e desenvolvimento emocional. Sessões presenciais e online.',
  },
  {
    icon: '⚖️',
    title: 'Psicologia Jurídica',
    description: 'Suporte psicológico especializado em contextos jurídicos, incluindo laudos, avaliações e acompanhamento de processos legais.',
  },
  {
    icon: '🚀',
    title: 'Coaching de Alta Performance',
    description: 'Programa estruturado para executivos e profissionais que desejam maximizar resultados sem sacrificar o bem-estar e a saúde mental.',
  },
  {
    icon: '🎯',
    title: 'Programa de Imersão',
    description: 'Processo intensivo de transformação pessoal com sessões aprofundadas, ferramentas práticas e acompanhamento contínuo por 90 dias.',
  },
  {
    icon: '👥',
    title: 'Atendimento Empresarial',
    description: 'Consultoria psicológica para empresas focada em saúde mental no trabalho, gestão de equipes e prevenção de burnout corporativo.',
  },
  {
    icon: '📱',
    title: 'Consultas Online',
    description: 'Atendimento via videochamada com a mesma qualidade e sigilo das sessões presenciais, para você se cuidar de qualquer lugar.',
  },
];

export default function ServicosPage() {
  return (
    <main>
      <Section className="bg-slate-900 text-white">
        <SectionHeader
          title="Serviços"
          subtitle="Soluções psicológicas personalizadas para cada fase da sua jornada"
          centered
          className="text-white [&>p]:text-slate-300"
        />
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((servico) => (
            <IconCard
              key={servico.title}
              icon={servico.icon}
              title={servico.title}
              description={servico.description}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Como funciona uma sessão?
          </h2>
          <p className="text-slate-600 mb-4">
            As sessões têm duração de 50 minutos e acontecem semanalmente ou conforme combinado. O processo terapêutico é adaptado às suas necessidades individuais.
          </p>
          <p className="text-slate-500 text-sm mb-8">
            *Atendimento realizado por profissional registrado no CRP 08/48529. Todos os atendimentos seguem o Código de Ética do CFP.
          </p>
          <Button asChild size="lg">
            <Link href="/contato">Agendar Consulta</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
