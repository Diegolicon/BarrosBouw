// components/Services.tsx

const servicesData = [
  {
    title: "Reformas Completas",
    description: "Transformamos seu espaço completamente com planejamento e execução de alta qualidade.",
    popular: true,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Pintura Profissional",
    description: "Pintura interna e externa com acabamento profissional e materiais de primeira.",
    popular: false,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: "Marcenaria",
    description: "Móveis planejados e sob medida para otimizar seu espaço com estilo.",
    popular: true,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12h10m-10 4h10" />
      </svg>
    )
  },
  {
    title: "Hidráulica e Elétrica",
    description: "Instalações e reparos com segurança e garantia de qualidade.",
    popular: false,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
  title: "Gesso & Iluminação",
  description: "Acabamentos em drywall, sancas e projetos luminotécnicos que valorizam cada detalhe do ambiente.",
  popular: false,
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
},
{
    title: "Cozinhas & Banheiros",
    description: "Especialização em áreas molhadas com foco em funcionalidade, revestimentos e acabamento premium.",
    popular: true,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.285a2 2 0 01-1.96 0l-.314-.142h0a2 2 0 01-1.185-1.82V11.5a4.5 4.5 0 014.5-4.5h2.384l1.411-1.411a1 1 0 011.414 0l1.414 1.414a1 1 0 010 1.414l-1.411 1.411V11.5a2.5 2.5 0 002.5 2.5h1.118a1 1 0 01.994.89l.34 3.06a1 1 0 01-1.214 1.09l-3.577-.612z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 11v-1a2 2 0 114 0v1m-5 3h6m-6 3h6" />
      </svg>
    )
  },
  {
    title: "Construção",
    description: "Construímos seu projeto do zero com qualidade e prazo garantidos.",
    popular: true,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Consultoria",
    description: "Orientação profissional para planejar e executar seu projeto perfeitamente.",
    popular: false,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
];
export default function Services() {
  return (
    <section className="bg-[#0f0f0f] py-24 px-6 overflow-hidden" id="servicos">
      {/* Aumentei o max-w para 1400px para os 4 cards respirarem melhor */}
      <div className="container mx-auto max-w-[1400px] text-center">
        
        <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-tighter">
              Nossos <span className="text-[#c5a47e]">Serviços</span>
            </h2>

            <p className="text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
              Soluções completas em construção e reforma para seu projeto
            </p>
        </div>

        {/* Gap aumentado para 8 (32px) para separar bem os cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {servicesData.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in" 
              data-aos-delay={index * 100}
              // Padding aumentado para p-10 e altura mínima ajustada
              className="bg-[#161616] p-10 border border-white/5 relative group overflow-hidden flex flex-col justify-between min-h-[350px] transition-all duration-300 hover:border-[#c5a47e]/30"
            >
              <div className="absolute inset-0 bg-[#c5a47e]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

              <div className="relative z-10">
                {service.popular && (
                  <span className="absolute -top-6 -right-6 bg-[#c5a47e] text-black text-[10px] font-bold px-4 py-1 uppercase tracking-widest shadow-lg">
                    Destaque
                  </span>
                )}

                <div className="w-16 h-16 bg-white/5 border border-[#c5a47e]/20 flex items-center justify-center mb-8 text-[#c5a47e] group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#c5a47e] transition-colors uppercase tracking-tight leading-tight">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a47e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}