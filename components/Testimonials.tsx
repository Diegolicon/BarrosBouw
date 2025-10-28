// components/Testimonials.tsx

import Link from "next/link";

/* * Documentação do Componente Testimonials
 * * Objetivo: Exibir depoimentos de clientes para construir prova social.
 *
 * MODIFICAÇÃO: Adicionado 'data-aos' à seção e aos cards.
*/

// --- ÍCONE DE ESTRELA (Componente interno) ---
const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.09l6.572-.955L10 0l2.939 6.135 6.572.955-4.756 4.455 1.123 6.545z" />
    </svg>
);

// --- DADOS DOS DEPOIMENTOS ---
const testimonialsData = [
    {
        id: 1,
        name: "Ana S.",
        review: "Tive uma excelente experiência com a Barros Bouw! O piso ficou perfeito e a instalação foi eficiente, tudo de primeira qualidade. A equipe foi profissional, detalhista e deixou a casa impecável."
    },
    {
        id: 2,
        name: "Carlos M.",
        review: "Trabalho incrível da Barros Bouw. O novo piso parece fantástico. Mal posso esperar para usá-los novamente em nosso próximo projeto. Altamente recomendado!"
    }
];

// --- COMPONENTE PRINCIPAL ---
export default function Testimonials() {
    return (
        // Seção inteira surge de baixo
        <section 
            className="bg-gray-900 text-white py-20"
            data-aos="fade-up"
        >
            <div className="container mx-auto px-6 text-center">

                {/* Título da Seção */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Depoimentos de Clientes
                </h2>

                {/* Subtítulo */}
                <p className="text-lg text-gray-300 mb-12 max-w-xl mx-auto">
                    Veja o que nossos clientes dizem sobre a qualidade do nosso serviço.
                </p>

                {/* Grid dos Depoimentos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

                    {/* Mapeamento dos dados */}
                    {testimonialsData.map((item, index) => (
                        <div
                            key={item.id}
                            // Animação e efeito cascata nos cards de depoimento
                            data-aos="fade-right"
                            data-aos-delay={index * 200}
                            className="bg-gray-800 p-8 rounded-lg shadow-lg text-left"
                        >
                            {/* Classificação (Estrelas) */}
                            <div className="flex mb-4">
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
