const legalCards = [
  {
    n: "01",
    tag: "Para Pessoas e Fam\u00edlias",
    title: "Psicologia Jur\u00eddica & Suporte em Processos de Alta Complexidade",
    intro: "Atendo pessoas e fam\u00edlias envolvidas em disputas judiciais, avalia\u00e7\u00f5es periciais e conflitos que exp\u00f5em intimidade, reputa\u00e7\u00e3o e v\u00ednculos afetivos.",
    bullets: [
      "Acompanhamento psicol\u00f3gico em disputas familiares, guarda e aliena\u00e7\u00e3o parental.",
      "Prepara\u00e7\u00e3o emocional para per\u00edcias, audi\u00eancias e exposi\u00e7\u00e3o em ju\u00edzo.",
      "Trabalho articulado com advogados, quando o cliente autoriza.",
    ],
  },
  {
    n: "02",
    tag: "Para Advogados e Escrit\u00f3rios",
    title: "Suporte Psicol\u00f3gico T\u00e9cnico para Advogados e Escrit\u00f3rios",
    intro: "Atendo casos em que a estrat\u00e9gia jur\u00eddica depende de uma compreens\u00e3o fina de din\u00e2mica familiar, dano ps\u00edquico, credibilidade de relatos e avalia\u00e7\u00e3o de risco.",
    bullets: [
      "An\u00e1lise cr\u00edtica de laudos e pareceres psicol\u00f3gicos.",
      "Identifica\u00e7\u00e3o de falhas metodol\u00f3gicas, \u00e9ticas e lacunas argumentativas.",
      "Formula\u00e7\u00e3o de quesitos t\u00e9cnicos preliminares e complementares.",
      "Elabora\u00e7\u00e3o de pareceres psicol\u00f3gicos especializados.",
    ],
  },
];

export default function LegalSection() {
  return (
    <section
      style={{ background: "var(--ink)", padding: "128px 64px" }}
      className="legal-section"
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 20 }}>
          <span style={{ width: 22, height: 1, background: "var(--gdim)", display: "inline-block" }} />
          <p style={{ fontSize: "0.52rem", letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 400 }}>
            Para Advogados e Escrit\u00f3rios
          </p>
        </div>

        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)",
            fontWeight: 300,
            lineHeight: 1.14,
            color: "var(--warm)",
            letterSpacing: "-0.01em",
            marginBottom: 30,
          }}
        >
          Assistente Perito em{" "}
          <em style={{ fontStyle: "italic", color: "var(--glt)" }}>Psicologia Jur\u00eddica</em>
        </h2>

        {/* Intro */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 92,
            alignItems: "start",
            marginBottom: 88,
          }}
          className="j-intro-grid"
        >
          <div>
            <p style={{ fontSize: "0.9rem", color: "var(--stone)", lineHeight: 1.92, marginTop: 26 }}>
              Quando Direito e Psicologia se cruzam em um processo judicial, a qualidade do suporte t\u00e9cnico psicol\u00f3gico determina a robustez da estrat\u00e9gia. Um psic\u00f3logo jur\u00eddico atuando como assistente t\u00e9cnico fortalece o contr\u00e1dit\u00f3rio com base cient\u00edfica, metodol\u00f3gica e \u00e9tica.
            </p>
          </div>
          <div
            style={{
              borderLeft: "1px solid var(--gdim)",
              paddingLeft: 34,
              position: "relative",
            }}
          >
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(1.1rem, 1.7vw, 1.5rem)",
                fontWeight: 300,
                color: "var(--ivory)",
                lineHeight: 1.56,
                fontStyle: "italic",
              }}
            >
              Laudos periciais psicol\u00f3gicos cont\u00eam pressupostos metodol\u00f3gicos que exigem leitura especializada. O advogado que domina essa interface opera em um n\u00edvel que seus pares raramente alcan\u00e7am.
            </p>
            <cite
              style={{
                display: "block",
                fontFamily: "var(--sans)",
                fontSize: "0.56rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontStyle: "normal",
                marginTop: 20,
                fontWeight: 400,
              }}
            >
              Alex Cristoffer Zilotti \u00b7 Psic\u00f3logo Jur\u00eddico
            </cite>
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "rgba(154,128,96,0.07)",
          }}
          className="j-ben-grid"
        >
          {[
            { n: "01", title: "An\u00e1lise Cr\u00edtica de Laudos", body: "Leitura t\u00e9cnica de laudos periciais com identifica\u00e7\u00e3o de inconsist\u00eancias metodol\u00f3gicas, instrumentos inadequados e falhas no processo avaliativo." },
            { n: "02", title: "Formula\u00e7\u00e3o de Quesitos", body: "Elabora\u00e7\u00e3o de quesitos preliminares e complementares tecnicamente fundamentados que exploram as lacunas reais do laudo." },
            { n: "03", title: "Pareceres T\u00e9cnicos", body: "Produ\u00e7\u00e3o de pareceres psicol\u00f3gicos especializados para subsidiar peti\u00e7\u00f5es, impugna\u00e7\u00f5es e manifesta\u00e7\u00f5es processuais." },
            { n: "04", title: "Acompanhamento de Per\u00edcias", body: "Presen\u00e7a t\u00e9cnica durante a realiza\u00e7\u00e3o de per\u00edcias para monitoramento metodol\u00f3gico e identifica\u00e7\u00e3o de irregularidades." },
            { n: "05", title: "Estrat\u00e9gia Processual Psi", body: "Suporte consultivo para estruturar a estrat\u00e9gia em casos que envolvem dano ps\u00edquico, credibilidade de relatos e aliena\u00e7\u00e3o parental." },
            { n: "06", title: "Apoio em Audi\u00eancias", body: "Assessoria t\u00e9cnica para prepara\u00e7\u00e3o de argui\u00e7\u00f5es ao perito judicial e formula\u00e7\u00e3o de perguntas que evidenciem fragilidades metodol\u00f3gicas." },
          ].map((item) => (
            <div
              key={item.n}
              style={{
                background: "var(--deep)",
                padding: "44px 36px",
                transition: "background 0.4s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--charcoal)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--deep)")}
            >
              <p style={{ fontFamily: "var(--serif)", fontSize: "2.2rem", fontWeight: 300, color: "var(--gdim)", lineHeight: 1, marginBottom: 16 }}>
                {item.n}
              </p>
              <h4 style={{ fontFamily: "var(--serif)", fontSize: "1.08rem", fontWeight: 400, color: "var(--ivory)", marginBottom: 11 }}>
                {item.title}
              </h4>
              <p style={{ fontSize: "0.78rem", color: "var(--stone)", lineHeight: 1.85 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <a
            href="https://wa.me/554199176772"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              fontSize: "0.57rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--ink)",
              background: "var(--glt)",
              padding: "15px 38px",
              textDecoration: "none",
              fontWeight: 500,
              transition: "all 0.35s",
              fontFamily: "var(--sans)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--ivory)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--glt)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Falar com o Assistente Perito
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .legal-section { padding: 92px 32px !important; }
          .j-intro-grid { grid-template-columns: 1fr !important; gap: 50px !important; }
          .j-ben-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .legal-section { padding: 76px 24px !important; }
          .j-ben-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
