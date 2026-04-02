import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DOCTORALIA_URL, WHATSAPP_URL } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-24 md:pb-32 md:pt-32 lg:pb-36 lg:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_15%_20%,rgba(140,122,91,0.12),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(255,255,255,0.04),transparent_22%)]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="label-caps">
              Psicologia Clínica e Jurídica
            </span>
            <span className="editorial-rule" />
          </div>
          <h1 className="max-w-4xl text-ivory">
            Psicologia Cognitivo-Comportamental para alta performance com
            discrição, método e densidade técnica.
          </h1>
          <p className="mt-7 max-w-prosewide text-base leading-8 text-quiet md:text-lg">
            Atendimento psicológico premium para empresários, executivos,
            artistas e pessoas sob alta pressão emocional, exposição pública
            e decisões de grande impacto.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" variant="primary" className="min-w-[210px]">
              <a
                href={DOCTORALIA_URL}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Agendar sessão
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-w-[210px]">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-taupe">
            Psicólogo graduado, pós-graduando em Psicologia Forense e
            Jurídica e em TCC de Alta Performance, MBA em Gestão de Pessoas
            e CRP 08/48529.
          </p>
        </div>

        <div className="hidden md:flex md:justify-end">
          <div className="surface-panel relative max-w-[420px] overflow-hidden rounded-[1.25rem] p-3">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <Image
              src="/images/Design%20sem%20nome%20(2).png"
              alt="Alex Zilotti Psicólogo"
              width={420}
              height={560}
              className="rounded-[1rem] object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
