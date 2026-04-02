const contatos = [
  {
    icon: "ri-phone-line",
    label: "Telefone / WhatsApp",
    value: "(83) 9 9876-5432",
    href: "tel:+5583998765432",
  },
  {
    icon: "ri-mail-line",
    label: "E-mail",
    value: "grupoveritasjp@gmail.com",
    href: "mailto:grupoveritasjp@gmail.com",
  },
  {
    icon: "ri-map-pin-2-line",
    label: "Endereço",
    value: "Av. Epitácio Pessoa, 3700 - Tambaú, João Pessoa/PB",
    href: "https://maps.app.goo.gl/RDyXXN4CaAfb8ZBM7",
  },
  {
    icon: "ri-time-line",
    label: "Horário de Atendimento",
    value: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
    href: null,
  },
];

export default function ContatoSection() {
  return (
    <section id="contato" className="py-24 bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[#C9963A] text-xs font-bold uppercase tracking-widest">Localização</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A2E] mt-3 mb-5">Entre em Contato</h2>
          <p className="text-[#6B6B6B] text-lg">Estamos em João Pessoa, prontos para atender você e seu imóvel.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Info */}
          <div className="flex flex-col gap-6">
            {contatos.map((c) => (
              <div key={c.label} className="flex items-start gap-5 bg-white rounded-2xl p-6">
                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-[#1B3A2E]/8 rounded-xl">
                  <i className={`${c.icon} text-xl text-[#1B3A2E]`} />
                </div>
                <div>
                  <p className="text-[#6B6B6B] text-xs font-semibold uppercase tracking-wider mb-1">{c.label}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      rel="nofollow"
                      className="text-[#1B3A2E] text-base font-semibold hover:text-[#C9963A] transition-colors cursor-pointer"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-[#1B3A2E] text-base font-semibold">{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-[#1B3A2E] rounded-2xl p-6 flex items-center justify-between">
              <p className="text-white font-semibold text-sm">Siga-nos nas redes sociais</p>
              <div className="flex gap-3">
                {[
                  { icon: "ri-instagram-line", href: "https://www.instagram.com/veritasjp/" },
                  { icon: "ri-linkedin-box-fill", href: "https://www.linkedin.com/company/veritasjp" },
                  { icon: "ri-whatsapp-line", href: "https://wa.me/5583991653499" },
                ].map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    rel="nofollow"
                    className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#C9963A] text-white rounded-full transition-all duration-200 cursor-pointer"
                  >
                    <i className={`${s.icon} text-lg`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden min-h-[400px] lg:min-h-full">
            <iframe
              title="Veritas Vistoria Imobiliária - João Pessoa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9043454395344!2d-34.84778982474752!3d-7.117208992886879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace836a1a88681%3A0x7f578caa4f16b34a!2sAv.+Epit%C3%A1cio+Pessoa%2C+3700+-+Tamba%C3%BA%2C+Jo%C3%A3o+Pessoa+-+PB%2C+58039-000!5e0!3m2!1spt-BR!2sbr!4v1700000000001!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
