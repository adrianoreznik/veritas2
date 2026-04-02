import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: "vistoria",
    image:
      "https://public.readdy.ai/ai/img_res/edited_b59e4e382ab9ba9f946bb165af4b5b56_214c2049.jpg",
    badge: "Vistoria Imobiliária",
    title: "Vistoria",
    highlight: "Imobiliária",
    subtitle: "com Precisão",
    desc: "Especialistas em inspeções técnicas residenciais e comerciais em João Pessoa e toda a região litorânea da Paraíba. Laudos completos, confiáveis e com apoio jurídico.",
    cta: "Agendar Vistoria",
  },
  {
    id: "despachante",
    image:
      "https://readdy.ai/api/search-image?query=professional%20real%20estate%20agent%20signing%20documents%20at%20modern%20office%20desk%20in%20Brazil%2C%20elegant%20interior%20with%20natural%20light%2C%20notary%20paperwork%2C%20property%20transfer%20documents%2C%20sophisticated%20business%20environment%2C%20warm%20tones%2C%20clean%20minimalist%20workspace%2C%20legal%20documents%20and%20keys%20on%20table&width=1600&height=900&seq=hero-veritas-02&orientation=landscape",
    badge: "Despachante Imobiliário",
    title: "Despachante",
    highlight: "Imobiliário",
    subtitle: "com Apoio Jurídico",
    desc: "Cuidamos de toda a burocracia imobiliária para você: transferências, registros, escrituras e regularizações com suporte jurídico especializado em João Pessoa e litoral paraibano.",
    cta: "Solicitar Serviço",
  },
  {
    id: "condominio",
    image:
      "https://readdy.ai/api/search-image?query=modern%20luxury%20condominium%20building%20exterior%20in%20tropical%20Brazil%20coastal%20city%2C%20palm%20trees%2C%20swimming%20pool%20area%2C%20well%20maintained%20gardens%2C%20professional%20property%20management%2C%20warm%20golden%20sunlight%2C%20contemporary%20architecture%2C%20residential%20complex%20with%20amenities%2C%20clean%20and%20elegant&width=1600&height=900&seq=hero-veritas-03&orientation=landscape",
    badge: "Administração Condominial",
    title: "Administração",
    highlight: "Condominial",
    subtitle: "com Apoio Jurídico",
    desc: "Gestão completa do seu condomínio com transparência, eficiência e suporte jurídico permanente. Assembleias, prestação de contas, manutenção e muito mais em João Pessoa.",
    cta: "Saiba Mais",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === current) return;
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating, current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  const slide = slides[current];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.badge}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3A2E]/90 via-[#1B3A2E]/65 to-[#1B3A2E]/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-24">
        <div
          className={`max-w-2xl transition-all duration-300 ${
            isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-[#C9963A]/20 border border-[#C9963A]/40 text-[#F0C97A] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#C9963A] rounded-full" />
            {slide.badge} · João Pessoa · Paraíba
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {slide.title}
            <br />
            <span className="text-[#C9963A]">{slide.highlight}</span>
            <br />
            <span className="text-4xl md:text-5xl font-semibold text-stone-200">{slide.subtitle}</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-200 leading-relaxed mb-10 max-w-xl">
            {slide.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll("#orcamento")}
              className="bg-[#C9963A] text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-[#b8832e] transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              {slide.cta}
            </button>
            <button
              onClick={() => handleScroll("#servicos")}
              className="bg-white/10 border border-white/40 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              Conheça Nossos Serviços
            </button>
          </div>


        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 cursor-pointer rounded-full ${
              i === current
                ? "w-8 h-3 bg-[#C9963A]"
                : "w-3 h-3 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Ir para slide ${i + 1}: ${s.badge}`}
          />
        ))}
      </div>

      {/* Arrow Controls */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/25 transition-all duration-200 cursor-pointer"
        aria-label="Slide anterior"
      >
        <i className="ri-arrow-left-s-line text-xl" />
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/25 transition-all duration-200 cursor-pointer"
        aria-label="Próximo slide"
      >
        <i className="ri-arrow-right-s-line text-xl" />
      </button>
    </section>
  );
}
