// components/Hero.tsx

export default function Hero() {
    return (
        <section className="relative h-[80vh] flex items-center overflow-hidden bg-gray-900">
            {/* 1. Imagem de Fundo */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/images/imageFirst.png" 
                    alt="Background" 
                    className="w-full h-full object-cover"
                />

                {/* --- OPÇÕES DE DEGRADÊ PARA MOSTRAR AO CONTRATANTE --- */}

                {/* OPÇÃO A: ESTILO BRITO RENOVATION (Degradê Lateral Focado no Texto) 
                    Fica muito evidente: o lado esquerdo é escuro e o direito é nítido. */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10"></div>

                {/* OPÇÃO B: OVERLAY SUAVE (Escurece a imagem por igual)
                    Se quiser testar esta, comente a linha acima e descomente a de baixo:*/
                    // <div className="absolute inset-0 bg-black/40 z-10"></div> 
                }

                {/* ------------------------------------------------------- */}
            </div>

            <div className="container mx-auto px-6 z-20"> {/* z-20 para ficar acima do degradê */}
                <div className="max-w-3xl">
                    
                    <h1 
                        className="text-4xl md:text-7xl font-bold leading-tight mb-6 text-white"
                        data-aos="fade-right"
                        data-aos-duration="800"
                    >
                        Construa seus <br /> 
                        <span className="text-green-500">próprios sonhos</span>
                    </h1>

                    <p 
                        className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed border-l-4 border-green-600 pl-4"
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
                        <a
                            href="/contato"
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-md text-lg transition duration-300 shadow-xl flex items-center"
                        >
                            Orçamento Grátis
                            <span className="ml-3 bg-yellow-400 text-gray-900 px-2 py-0.5 rounded text-xs font-black uppercase">
                                30% OFF
                            </span>
                        </a>
                        
                        <a
                            href="#projetos"
                            className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-10 rounded-md text-lg transition duration-300"
                        >
                            Ver Projetos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}