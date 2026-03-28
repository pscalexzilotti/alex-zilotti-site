import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-serif text-base mb-1">ALEX CRISTOFFER ZILOTTI</p>
          <div className="w-12 h-0.5 bg-accent mb-3" />
          <p className="text-sm text-primary-foreground/70">Psicologo | CRP 08/48529</p>
          <p className="text-sm text-primary-foreground/70">Sao Jose dos Pinhais - PR, Brasil</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest text-accent mb-2">Paginas</p>
          {[["/sobre","Sobre"],["/servicos","Servicos"],["/imersao","Imersao"],["/conteudos","Conteudos"],["/contato","Contato"]].map(([href, label]) => (
            <Link key={href} href={href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{label}</Link>
          ))}
        </div>
        <div className="max-w-xs">
          <p className="text-xs text-primary-foreground/50 leading-relaxed">
            Este site tem carater informativo. Nao substitui avaliacao psicologica individual.
            Atendimento em conformidade com o Codigo de Etica Profissional do Psicologo e as Resolucoes do CFP.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-primary-foreground/10">
        <p className="text-xs text-primary-foreground/40">
          {new Date().getFullYear()} Alex Cristoffer Zilotti. CRP 08/48529.
        </p>
      </div>
    </footer>
  );
}
