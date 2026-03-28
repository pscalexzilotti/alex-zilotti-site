import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Imersao | Alex Zilotti - Psicologo",
  description:
    "Imersao Rotas de Alta Performance Emocional - 3 dias em hotel de alto padrao para pausar, refletir e redesenhar sua rota com clareza e metodo.",
};

const dias = [
  {
    numero: "01",
    titulo: "Autoconhecimento Profundo",
    descricao:
      "Mapeamento do seu funcionamento cognitivo e emocional. Identificacao de padroes que sustentam ou sabotam suas decisoes, relacionamentos e resultados.",
    topicos: [
      "Crencas centrais e pensamentos automaticos",
      "Mapa de funcionamento sob pressao",
      "Gatilhos emocionais em contextos de alta responsabilidade",
    ],
  },
  {
    numero: "02",
    titulo: "Performance Emocional em Decisoes Complexas",
    descricao:
      "Ferramentas praticas da TCC aplicadas a situacoes de alta exposicao publica, pressao por resultados, processos judiciais e conflitos interpessoais.",
    topicos: [
      "Gestao de ansiedade de performance",
      "Tomada de decisao sob pressao e exposicao",
      "Comunicacao assertiva em contextos de risco",
    ],
  },
  {
    numero: "03",
    titulo: "Planejamento e Proximos Passos",
    descricao:
      "Construcao de um plano concreto de mudancas, estrategias de manutencao e definicao de objetivos alinhados a valores, responsabilidade e saude emocional.",
    topicos: [
      "Definicao de metas realistas e sustentaveis",
      "Estrategias de manutencao pos-imersao",
      "Clareza de proximos passos com metodo e etica",
    ],
  },
];

export default function ImersaoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1628] text-white pt-24 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="label-caps mb-4">Experiencia Intensiva - Vagas Limitadas</p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
            Imersao Rotas de Alta Performance Emocional
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            3 dias em hotel de alto padrao para pausar, olhar para a propria
            vida com profundidade e redesenhar sua rota com clareza, metodo e
            suporte psicologico especializado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-white border-0">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Quero saber mais
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link href="/contato">Solicitar informacoes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Para quem e */}
      <section className="bg-[#f7f3ed] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="label-caps mb-3">Publico-alvo</p>
          <h2 className="font-serif text-3xl text-[#0a1628] mb-4">
            Para quem e esta imersao
          </h2>
          <p className="text-gray-600 mb-10">
            Para quem nao pode simplesmente parar tudo, mas sabe que precisa.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              "Empresarios e executivos que lidam com decisoes de alto impacto financeiro e humano.",
              "Influenciadores e artistas sob exposicao publica constante, contratos, haters e cobranca por relevancia.",
              "Pessoas envolvidas em processos judiciais que sentem o peso emocional do litigio.",
              "Lideres sob alta responsabilidade que sabem que um erro impacta equipes, contratos e reputacoes.",
            ].map((item, i) => (
              <div key={i} className="border border-amber-200 bg-white rounded-sm p-6">
                <span className="text-amber-600 font-serif text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-gray-700 mt-2 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Dias */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="label-caps mb-3">Estrutura</p>
          <h2 className="font-serif text-3xl text-[#0a1628] mb-4">
            O que acontece em cada dia
          </h2>
          <p className="text-gray-500 mb-12">
            Processo estruturado com metodo e etica, baseado em TCC, Psicologia Juridica e Gestao de Pessoas.
          </p>
          <div className="flex flex-col gap-10">
            {dias.map((dia) => (
              <div key={dia.numero} className="grid grid-cols-[80px_1fr] gap-6">
                <span className="font-serif text-5xl text-amber-200 leading-none font-bold">
                  {dia.numero}
                </span>
                <div>
                  <h3 className="font-serif text-xl text-[#0a1628] mb-2">{dia.titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{dia.descricao}</p>
                  <ul className="flex flex-col gap-2">
                    {dia.topicos.map((t, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="text-amber-600">•</span>{t}
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
      <section className="bg-[#f7f3ed] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl text-[#0a1628] mb-6">Base metodologica</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { titulo: "TCC", descricao: "Terapia Cognitivo-Comportamental aplicada a contextos de alta pressao e decisoes complexas." },
              { titulo: "Psicologia Juridica", descricao: "Suporte emocional para quem enfrenta processos, litigios e responsabilidades legais." },
              { titulo: "Gestao de Pessoas", descricao: "Estrategias de lideranca, comunicacao e desenvolvimento humano em ambientes de alta responsabilidade." },
            ].map((m) => (
              <div key={m.titulo} className="border border-amber-200 bg-white rounded-sm p-6">
                <h3 className="font-serif text-lg text-[#0a1628] mb-2">{m.titulo}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{m.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formato */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl text-[#0a1628] mb-8">Formato e logistica</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {[
              { label: "Duracao", valor: "3 dias intensivos" },
              { label: "Local", valor: "Hotel de alto padrao (informado aos confirmados)" },
              { label: "Vagas", valor: "Grupo reduzido - acesso mediante triagem" },
              { label: "Formato", valor: "Presencial, com dinamicas individuais e em grupo" },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-amber-400 pl-4">
                <p className="label-caps mb-1">{item.label}</p>
                <p className="text-gray-800 font-medium">{item.valor}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-sm p-6 text-sm text-gray-600 leading-relaxed">
            <strong className="text-[#0a1628]">Importante:</strong> Esta
            imersao nao substitui psicoterapia individual. E uma experiencia
            intensiva de autoconhecimento e planejamento pessoal, baseada em
            referenciais da Psicologia, sempre em conformidade com as normas do
            Conselho Federal de Psicologia e com o Codigo de Etica Profissional
            do Psicologo.
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#0a1628] py-20 px-6 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <p className="label-caps mb-4">Vagas limitadas</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Pronto para redesenhar sua rota?
          </h2>
          <p className="text-gray-300 mb-8">
            Entre em contato para saber sobre datas, valores e disponibilidade.
            O acesso e mediante triagem - nao via compra direta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-white border-0">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar pelo WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
              <Link href="/contato">Enviar mensagem</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
