import { Metadata } from 'next';
import { SectionHeader } from '@/components/shared/section-header';
import { Section } from '@/components/shared/section';

export const metadata: Metadata = {
  title: 'Contato | Alex Zilotti - Psicólogo',
  description: 'Entre em contato com Alex Zilotti para agendar sua consulta ou tirar dúvidas sobre os serviços de psicologia.',
};

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5544999999999';

export default function ContatoPage() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.`;

  return (
    <main>
      <Section className="bg-slate-900 text-white">
        <SectionHeader
          title="Contato"
          subtitle="Vamos conversar? Estou aqui para ajudá-lo no seu processo de desenvolvimento pessoal."
          centered
          className="text-white [&>p]:text-slate-300"
        />
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Informações de contato */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Fale comigo</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="font-semibold text-slate-900">WhatsApp</h3>
                  <p className="text-slate-600 text-sm mb-2">Respondo em até 24 horas úteis</p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                  >
                    Iniciar conversa no WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <h3 className="font-semibold text-slate-900">Localização</h3>
                  <p className="text-slate-600">Atendimento presencial e online</p>
                  <p className="text-slate-500 text-sm">Paraná, Brasil</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">⏰</span>
                <div>
                  <h3 className="font-semibold text-slate-900">Horários</h3>
                  <p className="text-slate-600">Segunda a Sexta: 8h - 20h</p>
                  <p className="text-slate-500 text-sm">Sábados mediante agendamento</p>
                </div>
              </div>
            </div>
          </div>

          {/* Informações adicionais */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Como funciona o agendamento</h2>
            <ol className="space-y-4">
              {[
                { step: '1', text: 'Entre em contato via WhatsApp ou e-mail' },
                { step: '2', text: 'Faremos uma breve conversa para entender suas necessidades' },
                { step: '3', text: 'Definimos juntos o melhor dia e horário' },
                { step: '4', text: 'Começamos o processo na data agendada' },
              ].map(({ step, text }) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step}
                  </span>
                  <span className="text-slate-600 pt-0.5">{text}</span>
                </li>
              ))}
            </ol>

            <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-slate-500 text-sm">
                <strong>Sigilo garantido:</strong> Todos os atendimentos seguem o Código de Ética do CFP. CRP 08/48529.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
