// components/Gallery.tsx

import Link from 'next/link';

/* * Documentação do Componente Gallery (Versão 2 - Placeholders Locais)
 * * Objetivo: Exibir uma prévia da galeria de projetos em uma grade responsiva.
 *
 * MODIFICAÇÃO: Adicionado 'data-aos' à seção e aos cards.
*/

// --- DADOS DAS IMAGENS (PLACEHOLDERS) ---
const galleryData = [
    { id: 1, text: "Projeto 1" },
    { id: 2, text: "Projeto 2" },
    { id: 3, text: "Projeto 3" },
    { id: 4, text: "Projeto 4" },
    { id: 5, text: "Projeto 5" },
    { id: 6, text: "Projeto 6" }
];

// --- COMPONENTE PRINCIPAL ---
export default function Gallery() {
    return (
        // Seção inteira surge de baixo
        <section 
            className="bg-gray-800 text-white py-20"
            data-aos="fade-up"
        >
            <div className="container mx-auto px-6 text-center">

                {/* Título da Seção - Sem animação, pois a seção inteira já anima */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Galeria de Projetos
                </h2>

                {/* Parágrafo de Introdução */}
                <p className="text-lg text-gray-300 mb-12 max-w-xl mx-auto">
                    Veja a elegância e a durabilidade em cada projeto que completamos.
                </p>

                {/* Grid dos Cards de Galeria */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                    {/* Mapeamento dos dados */}
                    {galleryData.map((item, index) => (
                        <div
                            key={item.id}
                            // Efeito cascata nos itens da galeria
                            data-aos="zoom-in" 
                            data-aos-delay={index * 100}
                            className="overflow-hidden rounded-lg shadow-lg
                         transform transition duration-300 hover:scale-105"
                        >
                            {/* Placeholder da Imagem */}
                            <div className="aspect-video w-full bg-gray-600
                              flex items-center justify-center
                              text-gray-400 font-semibold text-lg"
                            >
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botão "Ver Todos" - Surge de baixo com pequeno atraso */}
                <div 
                    className="mt-16"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <Link
                        href="/galeria"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-lg"
                    >
                        Veja todos os projetos
                    </Link>
                </div>

            </div>
        </section>
    );
}
