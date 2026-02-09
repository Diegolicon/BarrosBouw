// components/Hero.tsx

export default function Hero() {
    return (
        <section className="relative h-[80vh] flex items-center overflow-hidden bg-[#0a0a0a]">
            {/* 1. Imagem de Fundo com Overlay mais denso */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/images/imageFirst.png" 
                    alt="Background" 
                    className="w-full h-full object-cover opacity-60" // Reduzi a opacidade para o texto brilhar
                />

                {/* Overlay Gradiente ajustado para um visual mais "Dark" */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10"></div>
            </div>

            <div className="container mx-auto px-6 z-20">
                <div className="max-w-3xl">
                    
                    <h1 
                        className="text-4xl md:text-7xl font-bold leading-tight mb-6 text-white"
                        data-aos="fade-right"
                        data-aos-duration="800"
                    >
                        Construa seus <br /> 
                        {/* Trocado de Green-500 para um Dourado/Sand (#c5a47e) */}
                        <span className="text-[#c5a47e]">próprios sonhos</span>
                    </h1>

                    <p 
                        // Trocado a borda verde pela borda dourada e texto levemente suavizado
                        className="text-lg md:text-2xl text-gray-300 mb-10 leading-relaxed border-l-4 border-[#c5a47e] pl-4"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="800"
                    >
                        Na Barros Bouw, transformamos sua visão em realidade com soluções 
                        customizadas que combinam precisão e design.
                    </p>

                    <div 
                        className="flex flex-wrap gap-4"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        
                     {/* Botão Principal: Orçamento Grátis com efeito Pulsante */}
                    <a
                    href="/contato"
                    className="relative bg-[#c5a47e] hover:bg-[#b3936a] text-black font-bold py-4 px-10 rounded-sm text-lg transition duration-300 shadow-xl flex items-center group"
                    >
                    {/* Camada de brilho reduzida: Agora escala apenas 20% (1.2) em vez de 100% (2.0) */}
                    <span 
                        className="absolute inset-0 rounded-sm bg-[#c5a47e] opacity-25 animate-ping pointer-events-none"
                        style={{ animationIterationCount: 'infinite', transform: 'scale(1.2)' }}
                    ></span>
                    
                    <span className="relative">Orçamento Grátis</span>
                    
                    <svg 
                        className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    </a>
                        {/* Botão Secundário: Ghost button com borda branca sutil */}
                        <a
                            href="#projetos"
                            className="border border-white/30 hover:border-white hover:bg-white/10 text-white font-medium py-4 px-10 rounded-sm text-lg transition duration-300"
                        >
                            Ver Projetos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}