export default function ContactSection() {
  return (
    <section className="bg-white py-16 px-6" id="contato">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold text-[#003358] mb-2">
          Solicite Seu <span className="text-[#56a3a6]">Orçamento</span>
        </h2>
        <p className="text-gray-600 mb-12">Preencha o formulário e receba um orçamento gratuito em até 24 horas</p>

        {/* items-stretch faz as colunas terem a mesma altura */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Coluna Esquerda */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#002b4d] text-white p-10 rounded-2xl text-left shadow-xl flex-grow flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8 italic text-white/90 uppercase tracking-wide">Entre em Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#56a3a6]/20 p-3 rounded-lg"><PhoneIcon /></div>
                  <div><p className="text-xs opacity-70">Telefone</p><p className="font-bold">+31 12 345 6789</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#25D366]/20 p-3 rounded-lg"><WhatsAppIcon /></div>
                  <div><p className="text-xs opacity-70">WhatsApp</p><p className="font-bold">+31 12 345 6789</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#56a3a6]/20 p-3 rounded-lg"><MailIcon /></div>
                  <div><p className="text-xs opacity-70">E-mail</p><p className="font-bold">contato@barrosbouw.nl</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#56a3a6]/20 p-3 rounded-lg"><MapIcon /></div>
                  <div><p className="text-xs opacity-70">Endereço</p><p className="font-bold">Amsterdam, Holanda</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#56a3a6]/20 p-3 rounded-lg"><ClockIcon /></div>
                  <div><p className="text-xs opacity-70">Horário</p><p className="font-bold">Seg - Sex: 8h às 18h / Sáb: 9h às 13h</p></div>
                </div>
              </div>
            </div>

            <div className="bg-[#f0f7f7] p-8 rounded-2xl text-left border border-[#56a3a6]/10 shadow-sm">
              <h4 className="font-bold text-[#003358] mb-4">Por que escolher a Barros Bouw?</h4>
              <ul className="space-y-2">
                {['Orçamento gratuito em 24h', 'Garantia de qualidade', 'Prazos cumpridos', 'Equipe profissional'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                    <div className="w-1.5 h-1.5 bg-[#56a3a6] rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coluna Direita - Formulário Full Height */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 flex flex-col">
            <form className="flex flex-col h-full space-y-5 text-left text-sm">
              <div className="space-y-5">
                <div>
                  <label className="block font-bold text-[#003358] mb-1">Nome Completo *</label>
                  <input type="text" placeholder="Seu nome" className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#56a3a6] outline-none" />
                </div>
                <div>
                  <label className="block font-bold text-[#003358] mb-1">E-mail *</label>
                  <input type="email" placeholder="seu@email.com" className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#56a3a6] outline-none" />
                </div>
                <div>
                  <label className="block font-bold text-[#003358] mb-1">Telefone/WhatsApp *</label>
                  <input type="text" placeholder="+31 12 345 6789" className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#56a3a6] outline-none" />
                </div>
                <div>
                  <label className="block font-bold text-[#003358] mb-1">Serviço Desejado *</label>
                  <select className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#56a3a6] outline-none bg-white">
                    <option>Selecione um serviço</option>
                    <option>Reforma Geral</option>
                    <option>Banheiro</option>
                    <option>Cozinha</option>
                    <option>Piso</option>
                  </select>
                </div>
              </div>

              {/* Flex-grow no container da mensagem estica o campo para preencher a div */}
              <div className="flex-grow flex flex-col">
                <label className="block font-bold text-[#003358] mb-1">Mensagem *</label>
                <textarea 
                  placeholder="Descreva seu projeto..." 
                  className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#56a3a6] outline-none resize-none flex-grow"
                />
              </div>

              <button className="w-full bg-[#56a3a6] hover:bg-[#458b8e] text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 uppercase tracking-wider">
                Enviar Solicitação <ArrowRightIcon />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- DECLARAÇÃO DOS ÍCONES --- */

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MapIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);