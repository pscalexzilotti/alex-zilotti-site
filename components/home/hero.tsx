import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DOCTORALIA_URL, WHATSAPP_URL } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 md:pb-28 md:pt-28 lg:pb-32 lg:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_15%_20%,rgba(140,122,91,0.12),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(255,255,255,0.04),transparent_22%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1.02fr_0.98fr] lg:gap-12">
        <div className="max-w-[44rem]">
          <div className="mb-6 flex items-center gap-4">
            <span className="label-caps">Psicologia Clínica e Jurídica</span>
            <span className="editorial-rule" />
          </div>

          <h1 className="max-w-[12ch] text-ivory">
            Psicologia Cognitivo-Comportamental para alta performance com
            discrição, método e densidade técnica.
          </h1>

          <p className="mt-6 max-w-[40rem] text-base leading-8 text-quiet md:text-[1.05rem]">
            Atendimento psicológico premium para empresários, executivos,
            artistas e pessoas sob alta pressão emocional, exposição pública e
            decisões de grande impacto.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="primary"
              className="min-w-[210px]"
            >
              <a
                href={DOCTORALIA_URL}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Agendar sessão
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-w-[210px]"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <p className="mt-7 max-w-[42rem] text-sm leading-7 text-taupe">
            Psicólogo graduado, pós-graduando em Psicologia Forense e Jurídica e
            em TCC de Alta Performance, MBA em Gestão de Pessoas e CRP 08/48529.
          </p>
        </div>

        <div className="hidden md:flex md:justify-center lg:justify-end">
          <div className="surface-panel relative w-full max-w-[470px] overflow-hidden rounded-[1.35rem] p-3 lg:max-w-[500px]">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <Image
              src="/images/Design%20sem%20nome%20(2).png"
              alt="Alex Zilotti Psicólogo"
              width={500}
              height={660}
              className="w-full rounded-[1.05rem] object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
