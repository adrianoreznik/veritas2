const servicosLinks = [
  "Vistoria Pré-Compra",
  "Vistoria Cautelar",
  "Inspeção Pós-Obra",
  "Entrega de Chaves",
  "Despachante Imobiliário",
  "Administração Condominial",
];

const empresaLinks = [
  { label: "Sobre Nós", href: "#home" },
  { label: "Nossa Equipe", href: "#equipe" },
  { label: "Orçamento", href: "#orcamento" },
  { label: "Contato", href: "#contato" },
];

const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) target.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-[#1B3A2E] mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://static.readdy.ai/image/8e384c9bc7f8801e8dfb8b46c454c1a0/1867dd80eecc0cafa46e14c62f860184.png"
              alt="Veritas Logo"
              className="h-14 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-stone-400 text-sm leading-relaxed">
              Vistoria imobiliária com excelência técnica em João Pessoa e toda a região litorânea da Paraíba. Laudos confiáveis, profissionais certificados.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: "ri-instagram-line", href: "#" },
                { icon: "ri-facebook-fill", href: "#" },
                { icon: "ri-linkedin-box-fill", href: "#" },
                { icon: "ri-whatsapp-line", href: "#" },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  rel="nofollow"
                  className="w-9 h-9 flex items-center justify-center bg-white/10 hover:bg-[#C9963A] text-stone-300 hover:text-white rounded-full transition-all duration-200 cursor-pointer"
                >
                  <i className={`${s.icon} text-base`} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">
              <a href="#servicos" onClick={(e) => handleNav(e, "#servicos")}>Serviços</a>
            </h4>
            <ul className="flex flex-col gap-3">
              {servicosLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    onClick={(e) => handleNav(e, "#servicos")}
                    className="text-stone-400 text-sm hover:text-[#C9963A] transition-colors cursor-pointer"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Empresa</h4>
            <ul className="flex flex-col gap-3">
              {empresaLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => handleNav(e, l.href)}
                    className="text-stone-400 text-sm hover:text-[#C9963A] transition-colors cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">Contato</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <i className="ri-phone-line text-[#C9963A] mt-0.5 text-base flex-shrink-0" />
                <a href="tel:+5583998765432" className="text-stone-400 text-sm hover:text-[#C9963A] transition-colors cursor-pointer">(83) 9 9876-5432</a>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-mail-line text-[#C9963A] mt-0.5 text-base flex-shrink-0" />
                <a href="mailto:contato@veritasvistoria.com.br" className="text-stone-400 text-sm hover:text-[#C9963A] transition-colors cursor-pointer">contato@veritasvistoria.com.br</a>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-2-line text-[#C9963A] mt-0.5 text-base flex-shrink-0" />
                <span className="text-stone-400 text-sm">Av. Epitácio Pessoa, 3700 - Tambaú, João Pessoa/PB</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-time-line text-[#C9963A] mt-0.5 text-base flex-shrink-0" />
                <span className="text-stone-400 text-sm">Seg–Sex: 8h às 18h<br />Sáb: 8h às 12h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm">
            © 2025 Veritas Vistoria Imobiliária. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" rel="nofollow" className="text-stone-500 text-sm hover:text-[#C9963A] transition-colors cursor-pointer">Política de Privacidade</a>
            <span className="text-stone-700">|</span>
            <a href="#" rel="nofollow" className="text-stone-500 text-sm hover:text-[#C9963A] transition-colors cursor-pointer">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
