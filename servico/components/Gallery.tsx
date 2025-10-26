// components/Gallery.tsx

// 1. NÃO precisamos mais do <Image> do Next.js por enquanto
//import Image from 'next/image';
import Link from 'next/link';

/* * Documentação do Componente Gallery (Versão 2 - Placeholders Locais)
 * * Objetivo: Exibir uma prévia da galeria de projetos em uma grade responsiva.
 * * Estrutura:
 * - Título e subtítulo.
 * - Grade (grid) de 'divs' estilizadas que servem como placeholders.
 * - Botão "Veja todos os projetos".
 * * Dados: Usamos um array 'galleryData' apenas para o texto.
*/

// --- DADOS DAS IMAGENS (PLACEHOLDERS) ---
// Agora, este array é mais simples. Ele só controla *quantos*
// placeholders vamos mostrar e o texto deles.
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
        <section className="bg-gray-800 text-white py-20">
            <div className="container mx-auto px-6 text-center">

                {/* Título da Seção */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Galeria de Projetos
                </h2>

                {/* Parágrafo de Introdução */}
                <p className="text-lg text-gray-300 mb-12 max-w-xl mx-auto">
                    Veja a elegância e a durabilidade em cada projeto que completamos.
                </p>

                {/* Grid das Fotos (Placeholders) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Mapeamento dos dados */}
                    {galleryData.map((item) => (

                        // Container do Placeholder (com o efeito de hover)
                        <div
                            key={item.id}
                            className="overflow-hidden rounded-lg shadow-lg
                         transform transition duration-300 hover:scale-105"
                        >
                            {/* ESTA É A MUDANÇA:
                Em vez de <Image>, usamos uma <div> estilizada.
                - 'aspect-video': Garante a proporção 16:9 (ótimo para fotos).
                - 'w-full': Ocupa 100% da largura do card.
                - 'bg-gray-600': A cor de fundo do placeholder.
                - 'flex ...': Centraliza o texto.
              */}
                            <div className="aspect-video w-full bg-gray-600
                              flex items-center justify-center
                              text-gray-400 font-semibold text-lg"
                            >
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botão "Ver Todos" */}
                <div className="mt-16">
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