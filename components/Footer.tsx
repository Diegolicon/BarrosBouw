export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white py-16 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Logo e Identidade */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white">
                    BARROS <span className="text-[#c5a47e]">BOUW</span>
                </span>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#c5a47e] font-bold">Construction</p>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Elevando o padrão da construção civil na Holanda com precisão técnica e acabamento de luxo desde 2025.
            </p>

            {/* Redes Sociais */}
            <div className="flex gap-4">
              {[
                { icon: <FacebookIcon />, href: "https://www.facebook.com/share/183MdnKmaa/?mibextid=wwXIfr" },
                { icon: <InstagramIcon />, href: "https://www.instagram.com/barrosbouw" },
                { icon: <TikTokIcon />, href: "https://www.tiktok.com/@barros.bouw" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-[#c5a47e] hover:text-black transition-all duration-300 border border-white/10 text-gray-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-black text-[#c5a47e] mb-8">Navegação</h4>
            <ul className="space-y-4 text-gray-400 text-[13px] font-medium">
              {['Início', 'Serviços', 'Galeria', 'Depoimentos', 'Contato'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="h-[1px] w-0 bg-[#c5a47e] group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Especialidades */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-black text-[#c5a47e] mb-8">Especialidades</h4>
            <ul className="space-y-4 text-gray-400 text-[13px] font-medium">
              {['Reformas Completas', 'Construção Civil', 'Pintura Premium', 'Marcenaria Fina', 'Design de Interiores'].map((item) => (
                <li key={item} className="hover:text-white cursor-default transition-colors italic">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato Direto */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-black text-[#c5a47e] mb-8">Contato</h4>
            <ul className="space-y-6 text-gray-400 text-sm">
              <li className="flex items-start gap-4">
                <div className="mt-1"><PhoneIconSmall /></div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mb-2">Telefone & WhatsApp</p>
                  
                  <div className="flex items-center gap-2 mb-2 group cursor-pointer">
                    <WhatsAppIcon />
                    <p className="text-white font-bold text-base group-hover:text-[#c5a47e] transition-colors">
                      +31 687111175
                    </p>
                  </div>

              
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1"><MailIconSmall /></div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">E-mail</p>
                  <p className="text-white font-bold text-base hover:text-[#c5a47e] transition-colors cursor-pointer text-[13px]">barrosbouw@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1"><MapIconSmall /></div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Escritório</p>
                  <p className="text-white font-bold leading-tight">Amsterdam, Noord-Holland</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-widest text-gray-600">
          <p className="text-center md:text-left">© 2025 <span className="text-gray-400">Barros Bouw</span>. Built for Excellence.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#c5a47e] transition-colors tracking-widest">Privacidade</a>
            <a href="#" className="hover:text-[#c5a47e] transition-colors tracking-widest">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- ÍCONES (CORRIGIDOS) ---

const TikTokIcon = () => (
  <svg 
    className="w-5 h-5 fill-current" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth="1" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" fill="none" strokeWidth="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
);

const WhatsAppIcon = () => (
  <svg className="w-4 h-4 text-[#c5a47e] fill-current" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.41.002 12.047c0 2.12.554 4.189 1.608 6.01L0 24l6.117-1.605a11.803 11.803 0 005.925 1.586h.005c6.635 0 12.045-5.413 12.048-12.051a11.85 11.85 0 00-3.536-8.509z"/>
  </svg>
);

const PhoneIconSmall = () => (
  <svg className="w-5 h-5 text-[#c5a47e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);

const MailIconSmall = () => (
  <svg className="w-5 h-5 text-[#c5a47e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

const MapIconSmall = () => (
  <svg className="w-5 h-5 text-[#c5a47e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><circle cx="12" cy="11" r="3" strokeWidth="2"/></svg>
);