import { useState, FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function OrcamentoSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [chars, setChars] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Validate textarea length
    const msg = data.get("mensagem") as string;
    if (msg && msg.length > 500) return;

    setStatus("loading");
    try {
      const body = new URLSearchParams();
      data.forEach((val, key) => {
        body.append(key, val.toString());
      });
      const res = await fetch("https://readdy.ai/api/form/d761ke3q7u9ee9hce81g", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
        setChars(0);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="orcamento" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#C9963A] text-xs font-bold uppercase tracking-widest">Fale Conosco</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B3A2E] mt-3 mb-5">Solicite seu Orçamento</h2>
          <p className="text-[#6B6B6B] text-lg">
            Responderemos em até <strong className="text-[#1B3A2E]">24 horas</strong>. Atendemos em João Pessoa e toda a região litorânea da Paraíba.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#F7F5F0] rounded-3xl p-8 md:p-12">
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 flex items-center justify-center bg-[#1B3A2E] rounded-full mx-auto mb-6">
                <i className="ri-check-line text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1B3A2E] mb-3">Solicitação Enviada!</h3>
              <p className="text-[#6B6B6B]">Obrigado pelo contato. Nossa equipe retornará em breve com seu orçamento personalizado.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 bg-[#C9963A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#b8832e] transition-colors cursor-pointer whitespace-nowrap"
              >
                Nova Solicitação
              </button>
            </div>
          ) : (
            <form
              id="orcamento-form"
              data-readdy-form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {/* Nome */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#1B3A2E] text-sm font-semibold">Nome Completo *</label>
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Seu nome completo"
                  className="bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm text-[#2C2C2C] placeholder-stone-400 focus:outline-none focus:border-[#1B3A2E] focus:ring-1 focus:ring-[#1B3A2E] transition-all"
                />
              </div>

              {/* Telefone */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#1B3A2E] text-sm font-semibold">Telefone / WhatsApp *</label>
                <input
                  type="tel"
                  name="telefone"
                  required
                  placeholder="(83) 9 0000-0000"
                  className="bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm text-[#2C2C2C] placeholder-stone-400 focus:outline-none focus:border-[#1B3A2E] focus:ring-1 focus:ring-[#1B3A2E] transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#1B3A2E] text-sm font-semibold">E-mail *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="seu@email.com"
                  className="bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm text-[#2C2C2C] placeholder-stone-400 focus:outline-none focus:border-[#1B3A2E] focus:ring-1 focus:ring-[#1B3A2E] transition-all"
                />
              </div>

              {/* Tipo de Imóvel */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[#1B3A2E] text-sm font-semibold">Tipo de Imóvel *</label>
                <select
                  name="tipo_imovel"
                  required
                  className="bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#1B3A2E] focus:ring-1 focus:ring-[#1B3A2E] transition-all cursor-pointer appearance-none"
                >
                  <option value="">Selecione...</option>
                  <option value="Casa Residencial">Casa Residencial</option>
                  <option value="Apartamento">Apartamento</option>
                  <option value="Sala Comercial">Sala Comercial</option>
                  <option value="Galpão Industrial">Galpão Industrial</option>
                  <option value="Terreno">Terreno</option>
                  <option value="Condomínio">Condomínio</option>
                </select>
              </div>

              {/* Endereço */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[#1B3A2E] text-sm font-semibold">Endereço do Imóvel *</label>
                <input
                  type="text"
                  name="endereco"
                  required
                  placeholder="Rua, número, bairro, João Pessoa/PB"
                  className="bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm text-[#2C2C2C] placeholder-stone-400 focus:outline-none focus:border-[#1B3A2E] focus:ring-1 focus:ring-[#1B3A2E] transition-all"
                />
              </div>

              {/* Serviço */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[#1B3A2E] text-sm font-semibold">Serviço *</label>
                <select
                  name="servico"
                  required
                  className="bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#1B3A2E] focus:ring-1 focus:ring-[#1B3A2E] transition-all cursor-pointer appearance-none"
                >
                  <option value="">Selecione o serviço...</option>
                  <option value="Vistoria Pré-Compra">Vistoria Pré-Compra</option>
                  <option value="Vistoria Cautelar">Vistoria Cautelar</option>
                  <option value="Inspeção Pós-Obra">Inspeção Pós-Obra</option>
                  <option value="Vistoria de Entrega de Chaves">Vistoria de Entrega de Chaves</option>
                  <option value="Despachante Imobiliário">Despachante Imobiliário</option>
                  <option value="Administração Condominial">Administração Condominial</option>
                </select>
              </div>

              {/* Mensagem */}
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[#1B3A2E] text-sm font-semibold">
                  Mensagem Adicional
                  <span className={`ml-2 text-xs font-normal ${chars > 450 ? "text-red-500" : "text-stone-400"}`}>
                    {chars}/500
                  </span>
                </label>
                <textarea
                  name="mensagem"
                  rows={4}
                  maxLength={500}
                  placeholder="Detalhes adicionais sobre o imóvel ou tipo de serviço desejado..."
                  onChange={(e) => setChars(e.target.value.length)}
                  className="bg-white border border-stone-200 rounded-lg px-4 py-3 text-sm text-[#2C2C2C] placeholder-stone-400 focus:outline-none focus:border-[#1B3A2E] focus:ring-1 focus:ring-[#1B3A2E] transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                {status === "error" && (
                  <p className="text-red-500 text-sm mb-3 text-center">Ocorreu um erro. Tente novamente.</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#1B3A2E] text-white font-semibold text-base py-4 rounded-xl hover:bg-[#2a5444] transition-colors duration-200 cursor-pointer disabled:opacity-60 whitespace-nowrap"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <i className="ri-loader-4-line animate-spin" /> Enviando...
                    </span>
                  ) : (
                    "Enviar Solicitação de Orçamento"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
