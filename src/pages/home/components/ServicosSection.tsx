const servicos = [
  {
    icon: "ri-search-2-line",
    title: "Vistoria Pré-Compra",
    desc: "Avaliação técnica completa antes da aquisição do imóvel, identificando patologias construtivas, vícios ocultos e irregularidades que podem afetar o valor e segurança da propriedade.",
    tag: "Residencial & Comercial",
  },
  {
    icon: "ri-shield-check-line",
    title: "Vistoria Cautelar",
    desc: "Documentação fotográfica e técnica do estado do imóvel antes e após obras vizinhas, locação ou reformas, protegendo seu patrimônio com laudos juridicamente válidos.",
    tag: "Proteção Patrimonial",
  },
  {
    icon: "ri-building-2-line",
    title: "Inspeção Pós-Obra",
    desc: "Verificação de conformidade após conclusão de obras, identificando desvios de projeto, problemas de execução e garantindo que a construção atende às normas técnicas vigentes.",
    tag: "Novos Imóveis",
  },
  {
    icon: "ri-tools-line",
    title: "Vistoria de Entrega de Chaves",
    desc: "Acompanhamento técnico especializado na entrega de imóveis novos pelas construtoras, assegurando que o imóvel está em conformidade com o contrato e sem vícios aparentes.",
    tag: "Novos Contratos",
  },
  {
    icon: "ri-file-paper-2-line",
    title: "Despachante Imobiliário",
    desc: "Cuidamos de toda a burocracia imobiliária: Financiamentos, transferências, registros, escrituras e regularizações com apoio jurídico especializado, agilizando cada etapa do processo.",
    tag: "Apoio Jurídico",
  },
  {
    icon: "ri-community-line",
    title: "Administração Condominial",
    desc: "Gestão completa do seu condomínio com transparência e eficiência: assembleias, prestação de contas, manutenção preventiva e suporte jurídico permanente.",
    tag: "Apoio Jurídico",
  },
];

export default function ServicosSection() {
  return (
    <section id="servicos" className="py-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#C9963A] text-xs font-bold uppercase tracking-widest">O que fazemos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A2E] mt-3 mb-5">Nossos Serviços</h2>
          <p className="text-[#6B6B6B] text-lg leading-relaxed">
            Soluções completas para sua segurança e tranquilidade imobiliária em João Pessoa e região.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1B3A2E]/8 mb-6 group-hover:bg-[#C9963A] transition-colors duration-300">
                <i className={`${s.icon} text-2xl text-[#1B3A2E] group-hover:text-white transition-colors duration-300`} />
              </div>
              <span className="text-[#C9963A] text-xs font-bold uppercase tracking-wider">{s.tag}</span>
              <h3 className="text-xl font-bold text-[#1B3A2E] mt-2 mb-3">{s.title}</h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
