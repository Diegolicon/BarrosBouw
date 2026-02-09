"use client";

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    servico: 'Não selecionado',
    detalhes: ''
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "31687111175";
    const text = `*Nova Solicitação de Orçamento*%0A` +
                 `*Nome:* ${formData.nome}%0A` +
                 `*E-mail:* ${formData.email}%0A` +
                 `*WhatsApp:* ${formData.whatsapp}%0A` +
                 `*Serviço:* ${formData.servico}%0A` +
                 `*Detalhes:* ${formData.detalhes}`;

    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="bg-[#0f0f0f] py-24 px-6 relative overflow-hidden" id="contato">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a47e]/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div data-aos="fade-up" className="mb-20 text-center">
          <p className="text-[#c5a47e] text-[11px] uppercase tracking-[0.5em] font-bold mb-4">Contato</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            Solicite seu <span className="text-[#c5a47e]">Orçamento</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#c5a47e] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          <div className="lg:col-span-5 flex flex-col gap-8" data-aos="fade-right">
            <div className="bg-white/5 backdrop-blur-sm p-10 rounded-sm border border-white/10 flex-grow flex flex-col justify-center relative overflow-hidden">
              <div className="absolute left-0 top-10 bottom-10 w-[2px] bg-[#c5a47e]"></div>
              
              <div className="mb-10">
                <h3 className="text-sm font-bold mb-8 uppercase tracking-[0.3em] text-[#c5a47e] ml-4">
                  Canais de Atendimento
                </h3>
                
                <div className="space-y-6 ml-4">
                  <ContactInfo 
                    icon={<WhatsAppIcon />} 
                    label="WhatsApp" 
                    value="+31 687111175" 
                    href="https://wa.me/31687111175" 
                  />
                  <ContactInfo 
                    icon={<MailIcon />} 
                    label="E-mail" 
                    value="barrosbouw@gmail.com" 
                    href="mailto:barrosbouw@gmail.com" 
                  />
                  <ContactInfo 
                    icon={<MapIcon />} 
                    label="Localização" 
                    value="Amsterdam, Holanda" 
                  />
                </div>
              </div>

              <div className="bg-[#c5a47e] p-8 rounded-sm shadow-xl">
                <h4 className="font-black text-black mb-5 uppercase text-[11px] tracking-widest">
                  Compromisso Barros Bouw
                </h4>
                <ul className="grid grid-cols-2 gap-y-4 gap-x-2">
                  {['Orçamento em 24h', 'Garantia Técnica', 'Prazos Rigorosos', 'Mão de Obra Elite'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-black/90 text-[10px] font-bold uppercase tracking-tighter">
                      <div className="w-1.5 h-1.5 bg-black rounded-full shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white/[0.02] p-10 rounded-sm border border-white/5 shadow-2xl" data-aos="fade-left">
            <form onSubmit={handleSendWhatsApp} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputField label="Nome Completo *" name="nome" type="text" placeholder="Ex: Jan van Dijk" required onChange={handleChange} />
                <InputField label="E-mail *" name="email" type="email" placeholder="contato@empresa.com" required onChange={handleChange} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputField label="WhatsApp *" name="whatsapp" type="text" placeholder="+31 00 000 0000" required onChange={handleChange} />
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#c5a47e] mb-3">Serviço *</label>
                  <select 
                    name="servico"
                    onChange={handleChange}
                    className="w-full p-4 bg-white/5 border border-white/10 focus:border-[#c5a47e] text-white outline-none text-sm transition-all rounded-sm appearance-none cursor-pointer"
                  >
                    <option className="bg-[#1a1a1a]" value="">Selecione o serviço</option>
                    <option className="bg-[#1a1a1a]" value="Reforma Residencial">Reforma Residencial</option>
                    <option className="bg-[#1a1a1a]" value="Construção Comercial">Construção Comercial</option>
                    <option className="bg-[#1a1a1a]" value="Manutenção Estrutural">Manutenção Estrutural</option>
                    <option className="bg-[#1a1a1a]" value="Outros">Outros</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#c5a47e] mb-3">Detalhes do Projeto *</label>
                <textarea 
                  name="detalhes"
                  onChange={handleChange}
                  placeholder="Descreva brevemente sua necessidade..." 
                  className="w-full p-4 bg-white/5 border border-white/10 focus:border-[#c5a47e] text-white outline-none text-sm transition-all rounded-sm resize-none min-h-[150px]"
                />
              </div>

              <button type="submit" className="group relative w-full overflow-hidden bg-[#c5a47e] text-black font-black py-6 transition-all uppercase tracking-[0.3em] text-xs">
                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:gap-5 transition-all">
                  Enviar Solicitação <ArrowRightIcon />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value, href }: any) {
  const content = (
    <div className="flex items-center gap-6 group cursor-pointer">
      <div className="p-4 rounded-sm transition-all duration-500 border border-[#c5a47e]/20 text-[#c5a47e] group-hover:bg-[#c5a47e] group-hover:text-black">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#c5a47e] font-bold mb-1">{label}</p>
        <p className="text-white font-bold text-lg tracking-tight group-hover:text-[#c5a47e] transition-colors">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : content;
}

function InputField({ label, ...props }: any) {
  return (
    <div className="flex flex-col">
      <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#c5a47e] mb-3">{label}</label>
      <input 
        {...props} 
        className="w-full p-4 bg-white/5 border border-white/10 focus:border-[#c5a47e] text-white outline-none text-sm transition-all rounded-sm placeholder:text-gray-600"
      />
    </div>
  );
}

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const MapIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
);