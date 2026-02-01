// components/Services.tsx

const servicesData = [
  {
    title: "Reformas Completas",
    description: "Transformamos seu espaço completamente com planejamento e execução de alta qualidade.",
    popular: true,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Pintura",
    description: "Pintura interna e externa com acabamento profissional e materiais de primeira.",
    popular: false,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: "Marcenaria",
    description: "Móveis planejados e sob medida para otimizar seu espaço com estilo.",
    popular: true,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12h10m-10 4h10" />
      </svg>
    )
  },
  {
    title: "Hidráulica e Elétrica",
    description: "Instalações e reparos com segurança e garantia de qualidade.",
    popular: false,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Construção",
    description: "Construímos seu projeto do zero com qualidade e prazo garantidos.",
    popular: true,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Consultoria",
    description: "Orientação profissional para planejar e executar seu projeto perfeitamente.",
    popular: false,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section className="bg-white py-20 px-6" id="servicos">
      <div className="container mx-auto max-w-6xl text-center">
        
        <h2 className="text-4xl font-bold text-[#003358] mb-4">
          Nossos <span className="text-[#56a3a6]">Serviços</span>
        </h2>

        <p className="text-gray-500 mb-16 max-w-2xl mx-auto">
          Soluções completas em construção e reforma para seu projeto
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-xl transition-all duration-300"
            >
              {service.popular && (
                <span className="absolute top-6 right-6 bg-[#56a3a6] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                  Popular
                </span>
              )}

              <div className="w-16 h-16 bg-[#f0f7f7] rounded-xl flex items-center justify-center mb-6 text-[#56a3a6] group-hover:bg-[#56a3a6] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-[#003358] mb-4">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}