const diferenciais = [
  {
    icon: "ri-shield-check-line",
    titulo: "Conformidade com as Normas ABNT",
    descricao:
      "Todos os nossos laudos e vistorias seguem rigorosamente as normas técnicas ABNT vigentes, garantindo documentos com plena validade jurídica e técnica.",
    destaque: "NBR 16747 / NBR 15575",
  },
  {
    icon: "ri-time-line",
    titulo: "Atendimento Ágil e no Prazo",
    descricao:
      "Agendamento em até 24 horas e entrega do laudo em até 72 horas após a vistoria. Respeitamos o seu tempo porque sabemos que negócios imobiliários não esperam.",
    destaque: "Laudo em até 72h",
  },
  {
    icon: "ri-map-pin-2-line",
    titulo: "Cobertura Total do Litoral Paraibano",
    descricao:
      "Atendemos João Pessoa, Cabedelo, Conde, Pitimbu, Lucena e toda a faixa litorânea da Paraíba, com profissionais locais que conhecem cada bairro e tipologia construtiva da região.",
    destaque: "João Pessoa e região",
  },
  {
    icon: "ri-file-text-line",
    titulo: "Laudos Técnicos Detalhados",
    descricao:
      "Relatórios completos com registro fotográfico profissional, plantas anotadas, análise de patologias e recomendações técnicas claras — sem burocracia, sem enrolação.",
    destaque: "Relatório + Fotos HD",
  },
  {
    icon: "ri-user-star-line",
    titulo: "Equipe com Registro CREA e CAU",
    descricao:
      "Nossa equipe é formada exclusivamente por engenheiros e arquitetos com registro ativo no CREA-PB e CAU, assegurando responsabilidade técnica em cada avaliação.",
    destaque: "CREA-PB / CAU",
  },
  {
    icon: "ri-eye-line",
    titulo: "Transparência em todo o Processo",
    descricao:
      "Você acompanha cada etapa da vistoria, tem acesso ao rascunho do laudo antes da versão final e pode tirar dúvidas diretamente com o responsável técnico.",
    destaque: "Sem letra miúda",
  },
];

export default function DiferenciaisSection() {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#C9963A] text-sm font-semibold tracking-widest uppercase mb-3">
            Nossos Diferenciais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A2E] leading-tight">
            Por que escolher a <span className="text-[#C9963A]">Veritas</span>?
          </h2>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-base leading-relaxed">
            Somos a referência em vistoria imobiliária no litoral paraibano. Conheça os pilares
            que colocam a Veritas acima do padrão do mercado.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-16 bg-[#C9963A]/40" />
            <div className="w-2 h-2 rounded-full bg-[#C9963A]" />
            <div className="h-px w-16 bg-[#C9963A]/40" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((item) => (
            <div
              key={item.titulo}
              className="group bg-white rounded-2xl p-7 border border-stone-100 hover:border-[#C9963A]/40 hover:bg-[#1B3A2E] transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-[#C9963A]/10 rounded-xl mb-5 group-hover:bg-[#C9963A]/20 transition-colors">
                <i className={`${item.icon} text-[#C9963A] text-2xl`} />
              </div>

              {/* Title */}
              <h3 className="text-[#1B3A2E] group-hover:text-white font-semibold text-base mb-2 transition-colors leading-snug">
                {item.titulo}
              </h3>

              {/* Description */}
              <p className="text-stone-500 group-hover:text-stone-300 text-sm leading-relaxed transition-colors">
                {item.descricao}
              </p>

              {/* Badge */}
              <div className="mt-5">
                <span className="inline-flex items-center gap-1.5 bg-[#C9963A]/10 group-hover:bg-[#C9963A]/20 text-[#C9963A] text-xs font-semibold px-3 py-1 rounded-full transition-colors whitespace-nowrap">
                  <i className="ri-check-line text-xs" />
                  {item.destaque}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 bg-[#1B3A2E] rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-semibold text-lg">
              Pronto para garantir segurança na sua negociação imobiliária?
            </p>
            <p className="text-stone-400 text-sm mt-1">
              Solicite um orçamento sem compromisso — retornamos em até 2 horas.
            </p>
          </div>
          <a
            href="#orcamento"
            className="flex-shrink-0 bg-[#C9963A] hover:bg-[#b8852f] text-white font-semibold text-sm px-8 py-3 rounded-full transition-colors whitespace-nowrap"
          >
            Solicitar Orçamento
          </a>
        </div>

      </div>
    </section>
  );
}
