import { useState } from "react";

type FilterKey = "Todos" | "Residencial" | "Comercial" | "Pós-Obra";

const filters: FilterKey[] = ["Todos", "Residencial", "Comercial", "Pós-Obra"];

const projetos = [
  {
    titulo: "Mansão Beira-Mar",
    local: "Manaíra, João Pessoa",
    tipo: "Residencial" as FilterKey,
    servico: "Vistoria Pré-Compra",
    ano: "2024",
    img: "https://readdy.ai/api/search-image?query=luxury%20beachfront%20mansion%20exterior%20in%20Joao%20Pessoa%20Paraiba%20Brazil%2C%20modern%20architecture%20white%20facade%2C%20tropical%20garden%2C%20ocean%20view%2C%20professional%20architectural%20photography%2C%20clear%20blue%20sky%2C%20warm%20sunlight%2C%20real%20estate%20inspection&width=700&height=500&seq=portfolio-veritas-01&orientation=landscape",
  },
  {
    titulo: "Edifício Residencial Torre Sul",
    local: "Altiplano, João Pessoa",
    tipo: "Residencial" as FilterKey,
    servico: "Laudo Pericial",
    ano: "2024",
    img: "https://readdy.ai/api/search-image?query=modern%20residential%20apartment%20tower%20building%20exterior%20in%20Joao%20Pessoa%20Paraiba%20Brazil%2C%20contemporary%20architecture%2C%20clean%20facades%2C%20blue%20sky%20background%2C%20professional%20architectural%20photography%2C%20urban%20landscape&width=500&height=400&seq=portfolio-veritas-02&orientation=landscape",
  },
  {
    titulo: "Centro Comercial Tambaú",
    local: "Tambaú, João Pessoa",
    tipo: "Comercial" as FilterKey,
    servico: "Inspeção Pós-Obra",
    ano: "2023",
    img: "https://readdy.ai/api/search-image?query=modern%20commercial%20shopping%20center%20building%20exterior%20in%20Joao%20Pessoa%20Paraiba%20Brazil%2C%20glass%20facade%20retail%20space%2C%20contemporary%20architecture%2C%20professional%20architectural%20photography%2C%20clear%20sky%2C%20daylight&width=500&height=400&seq=portfolio-veritas-03&orientation=landscape",
  },
  {
    titulo: "Residência Cabo Branco",
    local: "Cabo Branco, João Pessoa",
    tipo: "Residencial" as FilterKey,
    servico: "Vistoria Cautelar",
    ano: "2024",
    img: "https://readdy.ai/api/search-image?query=elegant%20residential%20house%20in%20Cabo%20Branco%20Joao%20Pessoa%20Brazil%2C%20modern%20coastal%20architecture%2C%20white%20walls%2C%20tropical%20landscaping%2C%20professional%20real%20estate%20photography%2C%20golden%20hour%20lighting&width=700&height=450&seq=portfolio-veritas-04&orientation=landscape",
  },
  {
    titulo: "Galpão Industrial Bayeux",
    local: "Bayeux, Paraíba",
    tipo: "Comercial" as FilterKey,
    servico: "Vistoria Técnica",
    ano: "2023",
    img: "https://readdy.ai/api/search-image?query=industrial%20warehouse%20building%20exterior%20in%20Paraiba%20Brazil%2C%20modern%20industrial%20architecture%2C%20concrete%20and%20steel%20structure%2C%20professional%20architectural%20photography%2C%20clear%20sky%2C%20daytime&width=500&height=380&seq=portfolio-veritas-05&orientation=landscape",
  },
  {
    titulo: "Condomínio Jardins do Mar",
    local: "Bessa, João Pessoa",
    tipo: "Pós-Obra" as FilterKey,
    servico: "Entrega de Chaves",
    ano: "2024",
    img: "https://readdy.ai/api/search-image?query=new%20residential%20condominium%20complex%20in%20Joao%20Pessoa%20Paraiba%20Brazil%2C%20modern%20apartment%20buildings%2C%20tropical%20landscape%2C%20swimming%20pool%20area%2C%20professional%20real%20estate%20photography%2C%20bright%20daylight&width=700&height=480&seq=portfolio-veritas-06&orientation=landscape",
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState<FilterKey>("Todos");

  const filtered = active === "Todos" ? projetos : projetos.filter((p) => p.tipo === active);

  return (
    <section id="portfolio" className="py-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-[#C9963A]/15 text-[#C9963A] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            500+ Vistorias
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A2E] mb-5">Projetos Concluídos</h2>
          <p className="text-[#6B6B6B] text-lg leading-relaxed">
            Uma seleção dos nossos trabalhos realizados em João Pessoa e litoral paraibano.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                active === f
                  ? "bg-[#1B3A2E] text-white"
                  : "bg-white text-[#6B6B6B] hover:bg-[#1B3A2E]/10 hover:text-[#1B3A2E]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.titulo}
              className="group relative overflow-hidden rounded-2xl bg-white cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.titulo}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A2E]/80 via-[#1B3A2E]/20 to-transparent" />
                {/* Badge */}
                <span className="absolute top-4 right-4 bg-[#C9963A] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {p.tipo}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[#C9963A] text-xs font-semibold mb-1">{p.servico} · {p.ano}</p>
                <h3 className="text-white font-bold text-lg leading-tight">{p.titulo}</h3>
                <p className="text-stone-300 text-sm flex items-center gap-1.5 mt-1">
                  <i className="ri-map-pin-line text-xs" />
                  {p.local}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
