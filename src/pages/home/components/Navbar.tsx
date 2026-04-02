import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Por que a Veritas", href: "#diferenciais" },
  { label: "Serviços", href: "#servicos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNav(e, "#home")} className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://static.readdy.ai/image/8e384c9bc7f8801e8dfb8b46c454c1a0/1867dd80eecc0cafa46e14c62f860184.png"
            alt="Veritas Logo"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer whitespace-nowrap ${
                scrolled ? "text-[#2C2C2C] hover:text-[#C9963A]" : "text-white hover:text-[#C9963A]"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#orcamento"
            onClick={(e) => handleNav(e, "#orcamento")}
            className="ml-2 bg-[#C9963A] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#b8832e] transition-colors duration-200 whitespace-nowrap cursor-pointer"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? "bg-[#1B3A2E]" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? "bg-[#1B3A2E]" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 transition-all duration-300 ${scrolled ? "bg-[#1B3A2E]" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-[#2C2C2C] text-sm font-medium cursor-pointer hover:text-[#C9963A] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#orcamento"
            onClick={(e) => handleNav(e, "#orcamento")}
            className="bg-[#C9963A] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#b8832e] transition-colors text-center cursor-pointer whitespace-nowrap"
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </nav>
  );
}
