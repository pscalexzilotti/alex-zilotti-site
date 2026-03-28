import Link from "next/link";

const links = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/imersao", label: "Imersão" },
  { href: "/conteudos", label: "Conteúdos" },
  { href: "/contato", label: "Contato" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-[#f7f3ed] border-t border-amber-200 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-base font-bold text-[#0a1628] mb-1">
            ALEX CRISTOFFER ZILOTTI
          </p>
          <p className="text-sm text-gray-600">Psicólogo | CRP 08/48529</p>
          <p className="text-sm text-gray-600">
            São José dos Pinhais - PR, Brasil
          </p>
        </div>

        <div>
          <p className="label-caps mb-4">Páginas</p>
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-amber-700 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-caps mb-4">Aviso Legal</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Este site tem caráter informativo. Não substitui avaliação
            psicológica individual. Atendimento em conformidade com o Código
            de Ética Profissional do Psicólogo e as Resoluções do CFP.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-amber-200 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Alex Cristoffer Zilotti. CRP 08/48529.
        </p>
        <p className="text-xs text-gray-400">
          Psicólogo Jurídico e Alta Performance - São José dos Pinhais, PR
        </p>
      </div>
    </footer>
  );
}
