const stats = [
  { icon: "ri-award-line", value: "500+", label: "Vistorias Realizadas" },
  { icon: "ri-team-line", value: "3", label: "Especialistas Certificados" },
  { icon: "ri-calendar-check-line", value: "12+", label: "Anos de Experiência" },
  { icon: "ri-star-line", value: "98%", label: "Clientes Satisfeitos" },
  { icon: "ri-medal-line", value: "ABNT", label: "Normas Técnicas" },
];

export default function StatsStrip() {
  return (
    <section className="bg-[#1B3A2E] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-wrap justify-center gap-8 md:gap-0 md:justify-between items-center">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#C9963A]/20 rounded-xl flex-shrink-0">
                <i className={`${s.icon} text-[#C9963A] text-xl`} />
              </div>
              <div>
                <div className="text-white text-2xl font-bold leading-none">{s.value}</div>
                <div className="text-stone-400 text-xs mt-1">{s.label}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block h-10 w-px bg-white/10 ml-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
