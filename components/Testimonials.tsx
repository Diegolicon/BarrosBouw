// components/Testimonials.tsx

import Link from "next/link";

/* * Documentação do Componente Testimonials
 * * Objetivo: Exibir depoimentos de clientes para construir prova social.
 * * Estrutura:
 * - Título e subtítulo da seção.
 * - Uma grade (grid) de cards de depoimentos.
 * - Cada card contém uma classificação (estrelas), o texto e o nome do cliente.
*/

// --- ÍCONE DE ESTRELA (Componente interno) ---
// Um SVG simples para a classificação de 5 estrelas.
const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.09l6.572-.955L10 0l2.939 6.135 6.572.955-4.756 4.455 1.123 6.545z" />
    </svg>
);

// --- DADOS DOS DEPOIMENTOS ---
// Quando tiver depoimentos reais, basta editar este array.
const testimonialsData = [
    {
        id: 1,
        name: "Ana S.",
        review: "Tive uma excelente experiência com a FC Flooring! O piso ficou perfeito e a instalação foi eficiente, tudo de primeira qualidade. A equipe foi profissional, detalhista e deixou a casa impecável."
    },
    {
        id: 2,
        name: "Carlos M.",
        review: "Trabalho incrível da FC Flooring. O novo piso parece fantástico. Mal posso esperar para usá-los novamente em nosso próximo projeto. Altamente recomendado!"
    }
    // Você pode adicionar mais depoimentos aqui...
];


// --- COMPONENTE PRINCIPAL ---
export default function Testimonials() {
    return (
        // Seção principal (um tom mais escuro para variar da seção anterior)
        <section className="bg-gray-900 text-white py-20">

            {/* Container para centralizar o conteúdo */}
            <div className="container mx-auto px-6 text-center">
                <div className="text-center md:text-center mx-auto max-w-md">
                
                    <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
                        BARROS BOUW
                    </Link>
                    <p className="text-sm">
                        Na FC Flooring, nos dedicamos a transformar sua visão em realidade.
                        Oferecemos soluções customizadas que combinam qualidade, durabilidade e design.
                    </p>
                    
                    {/* Título da Seção */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Depoimentos de Clientes
                    </h2>

                    {/* Parágrafo de Introdução */}
                    <p className="text-lg text-gray-300 mb-12 max-w-xl mx-auto">
                        Veja o que nossos clientes dizem sobre a qualidade do nosso serviço.
                    </p>
                </div>
                {/* Grid dos Cards de Depoimento
          - 'grid-cols-1': 1 coluna (celular)
          - 'md:grid-cols-2': 2 colunas (desktop/tablet)
          - 'gap-8': Espaçamento entre os cards
        */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* Mapeamento dos dados (cria um card para cada depoimento) */}
                    {testimonialsData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-800 p-8 rounded-lg shadow-lg text-left"
                            // text-left faz o texto do depoimento alinhar à esquerda
                        >
                            {/* Classificação (Estrelas) */}
                            <div className="flex mb-4">
                                {/* Cria um array de 5 posições e renderiza um ícone para cada */}
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} />
                                ))}
                            </div>

                            {/* Texto do Depoimento */}
                            <p className="text-gray-300 mb-6 italic">
                                "{item.review}"
                            </p>

                            {/* Nome do Cliente */}
                            <p className="text-white font-semibold text-right">
                                - {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}