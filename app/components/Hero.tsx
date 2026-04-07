export default function Hero() {
  return (
    <div className="min-h-screen flex items-center bg-[var(--color-bg)] pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-[var(--color-primary)] text-sm font-medium tracking-[0.12em] uppercase mb-8">
            Psicólogo CRP 08/48529
          </p>

          <h1
            className="font-[family-name:var(--font-display)] font-light text-[var(--color-text)] leading-[1.05] mb-8"
            style={{ fontSize: "var(--text-hero)" }}
          >
            Há decisões que não admitem erro.
          </h1>

          <p
            className="font-[family-name:var(--font-display)] italic text-[var(--color-text-muted)] leading-relaxed mb-6"
            style={{ fontSize: "var(--text-lg)" }}
          >
            Há processos que não toleram fragilidade. Há vidas que exigem
            clareza profunda — não consolo superficial.
          </p>

          <p className="text-[var(--color-text-muted)] leading-relaxed mb-12 max-w-2xl">
            Psicólogo jurídico e de alta performance, atuo com quem vive sob
            pressão constante: executivos, profissionais do direito e pessoas
            envolvidas em conflitos de alta complexidade. Meu trabalho é trazer
            critério, estrutura e lucidez emocional para decisões que realmente
            mudam destinos.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contato"
              className="bg-[var(--color-primary)] text-[var(--color-text-inverse)] px-8 py-3.5 rounded-[var(--radius-md)] font-medium text-sm hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] transition-colors tracking-wide"
            >
              Agendar conversa estratégica
            </a>
            <a
              href="#alta-performance"
              className="text-[var(--color-text)] border border-[var(--color-border)] px-8 py-3.5 rounded-[var(--radius-md)] font-medium text-sm hover:border-[var(--color-text-muted)] transition-colors tracking-wide"
            >
              Ver áreas de atuação
            </a>
          </div>
        </div>

        <div className="mt-24 h-px bg-[var(--color-divider)] w-24" aria-hidden="true" />
      </div>
    </div>
  );
}