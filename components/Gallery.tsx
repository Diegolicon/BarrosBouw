// components/Gallery.tsx

import Link from 'next/link';

// --- DADOS DAS IMAGENS ---
const galleryData = [
    { id: 1, text: "Projeto Residencial" },
    { id: 2, text: "Escritório Moderno" },
    { id: 3, text: "Design de Interiores" },
    { id: 4, text: "Reforma Estrutural" },
    { id: 5, text: "Marcenaria Fina" },
    { id: 6, text: "Fachada Comercial" }
];

export default function Gallery() {
    return (
        <section 
            className="bg-[#0a0a0a] text-white py-24" // Fundo mais escuro para contraste
            data-aos="fade-up"
        >
            <div className="container mx-auto px-6 text-center">

                {/* Título com destaque dourado */}
                <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">
                    Galeria de <span className="text-[#c5a47e]">Projetos</span>
                </h2>

                <p className="text-lg text-gray-400 mb-16 max-w-xl mx-auto">
                    A excelência da engenharia holandesa aplicada em cada detalhe.
                </p>

                {/* Grid dos Cards - Removi arredondamento excessivo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {galleryData.map((item, index) => (
                        <div
                            key={item.id}
                            data-aos="zoom-in" 
                            data-aos-delay={index * 100}
                            className="relative overflow-hidden group aspect-[4/3] bg-[#161616] border border-white/5"
                        >
                            {/* Overlay de Hover (Efeito de Galeria Premium) */}
                            <div className="absolute inset-0 bg-[#c5a47e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                            
                            {/* Placeholder/Imagem */}
                            <div className="w-full h-full flex items-center justify-center transition duration-700 group-hover:scale-110">
                                <span className="text-gray-500 group-hover:text-[#c5a47e] font-medium tracking-widest uppercase text-sm transition-colors">
                                    {item.text}
                                </span>
                            </div>

                            {/* Detalhe de canto que aparece no hover */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#c5a47e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20"></div>
                        </div>
                    ))}
                </div>

                {/* Botão "Ver Todos" - Estilo Minimalista */}
                <div 
                    className="mt-16"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <Link
                        href="/galeria"
                        className="inline-block border border-[#c5a47e] text-[#c5a47e] hover:bg-[#c5a47e] hover:text-black font-bold py-4 px-12 rounded-sm text-sm uppercase tracking-[0.2em] transition duration-500"
                    >
                        Explorar Portfólio
                    </Link>
                </div>

            </div>
        </section>
    );
}