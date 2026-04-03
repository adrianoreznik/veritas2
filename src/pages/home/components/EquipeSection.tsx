const equipe = [
  {
    nome: "Luiza Nogas",
    cargo: "Engenheiro Civil & Diretor Técnico",
    crea: "CREA-PB 12.345-D",
    especialidade: "Estruturas e Patologias Construtivas",
    foto: "https://static.readdy.ai/image/8e384c9bc7f8801e8dfb8b46c454c1a0/e8195a5224deb386a251e3a280953d5b.jpeg",
    social: [
      { icon: "ri-linkedin-box-fill", href: "https://br.linkedin.com/in/luizanogas" },
      { icon: "ri-mail-line", href: "mailto:grupoveritasjp@gmail.com" },
    ],
  },
  {
    nome: "Lucia Souza",
    cargo: "Advogada",
    crea: "CAU-PB A-98765",
    especialidade: "Assessoria Jurídica",
    foto: "https://static.readdy.ai/image/8e384c9bc7f8801e8dfb8b46c454c1a0/240da27da9014158d985a65d91e5a6a8.jpeg",
    social: [
      { icon: "ri-linkedin-box-fill", href: "https://linkedin.com/in/luciasouza" },
      { icon: "ri-mail-line", href: "mailto:grupoveritasjp@gmail.com" },
    ],
  },
  {
    nome: "Eng. Marcos Souza",
    cargo: "Engenheiro de Materiais",
    crea: "CREA-PB 54.321-D",
    especialidade: "Laudos Periciais e Patologias",
    foto: "https://readdy.ai/api/search-image?query=professional%20Brazilian%20male%20engineer%20in%20his%2035s%2C%20business%20casual%20attire%2C%20friendly%20professional%20smile%2C%20clean%20white%20studio%20background%2C%20headshot%20portrait%20photography%2C%20sharp%20focus%2C%20professional%20corporate%20photo&width=400&height=400&seq=team-veritas-03&orientation=squarish",
    social: [
      { icon: "ri-linkedin-box-fill", href: null as string | null },
      { icon: "ri-mail-line", href: null as string | null },
    ],
  },
  {
    nome: "Arq. Juliana Neves",
    cargo: "Arquiteta & Consultora Técnica",
    crea: "CAU-PB A-11234",
    especialidade: "Vistoria Cautelar e Locação",
    foto: "https://readdy.ai/api/search-image?query=professional%20Brazilian%20female%20architect%20in%20her%20late%2020s%2C%20professional%20business%20attire%2C%20confident%20warm%20smile%2C%20clean%20white%20studio%20background%2C%20headshot%20portrait%20photography%2C%20sharp%20focus%2C%20professional%20corporate%20photo&width=400&height=400&seq=team-veritas-04&orientation=squarish",
    social: [
      { icon: "ri-linkedin-box-fill", href: null as string | null },
      { icon: "ri-mail-line", href: null as string | null },
    ],
  },
];

export default function EquipeSection() {
  return (
    <section id="equipe" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-[#C9963A] text-xs font-bold uppercase tracking-widest">Profissionais</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A2E] mt-3">Nossa Equipe</h2>
          </div>
          <p className="text-[#6B6B6B] text-base md:text-lg leading-relaxed max-w-md md:text-right">
            Profissionais certificados pelo CREA, ABECIP e OAB com vasta experiência imobiliárias no litoral paraibano.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipe.map((m) => (
            <div
              key={m.nome}
              className="group bg-[#F7F5F0] rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={m.foto}
                  alt={m.nome}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A2E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-base font-bold text-[#1B3A2E] leading-tight">{m.nome}</h3>
                <p className="text-[#C9963A] text-xs font-semibold mt-1">{m.cargo}</p>
                <p className="text-[#6B6B6B] text-xs mt-1">{m.especialidade}</p>
                <span className="inline-block mt-3 bg-[#1B3A2E]/8 text-[#1B3A2E] text-xs font-medium px-3 py-1 rounded-full">
                  {m.crea}
                </span>
                {/* Socials */}
                <div className="flex gap-3 mt-4">
                  {m.social.map((s) =>
                    s.href ? (
                      <a
                        key={s.icon}
                        href={s.href}
                        rel="nofollow"
                        target="_blank"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1B3A2E]/10 hover:bg-[#C9963A] hover:text-white text-[#1B3A2E] transition-all duration-200 cursor-pointer"
                      >
                        <i className={`${s.icon} text-base`} />
                      </a>
                    ) : (
                      <button
                        key={s.icon}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1B3A2E]/10 hover:bg-[#C9963A] hover:text-white text-[#1B3A2E] transition-all duration-200 cursor-pointer"
                      >
                        <i className={`${s.icon} text-base`} />
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
