export default function SessionsHowItWorks() {
  const etapas = [
    {
      numero: "01",
      titulo: "Contato inicial",
      descricao:
        "Você entra em contato pelo WhatsApp. Respondemos com agilidade e sem julgamentos.",
    },
    {
      numero: "02",
      titulo: "Sessão de avaliação",
      descricao:
        "Na primeira sessão nos conhecemos. Você traz sua história e eu proponho um plano adequado.",
    },
    {
      numero: "03",
      titulo: "Processo terapêutico",
      descricao:
        "Com frequência e objetivos definidos, trabalhamos juntos com transparência, ética e sigilo absoluto.",
    },
  ];
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="label-caps mb-3">Atendimento</p>
        <h2 className="font-serif text-3xl text-[#0a1628] mb-12">
          Como funciona o atendimento
        </h2>
        <div className="flex flex-col gap-10">
          {etapas.map((etapa) => (
            <div
              key={etapa.numero}
              className="grid grid-cols-[64px_1fr] gap-6 items-start"
            >
              <span className="font-serif text-5xl text-amber-200 leading-none font-bold">
                {etapa.numero}
              </span>
              <div>
                <h3 className="font-serif text-xl text-[#0a1628] mb-2">
                  {etapa.titulo}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {etapa.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
