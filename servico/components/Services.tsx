// components/Services.tsx

/* * Documentação do Componente Services
 * * Objetivo: Mostrar os principais serviços oferecidos pela empresa
 * em um formato de 3 cards.
 * * Estrutura:
 * - Um título de seção ("Nossos Serviços")
 * - Um parágrafo de introdução
 * - Uma grade (grid) que contém 3 cards.
 * - Cada card tem um ícone, um título e uma descrição.
*/

// --- ÍCONE ---
// Um componente de ícone SVG simples para usar nos cards.
// No site original, eles usam ícones customizados.
// Usaremos um ícone genérico "sparkle" (brilho) do Heroicons.
const ServiceIcon = () => (
    <svg
        className="w-12 h-12 text-green-500 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);

// --- DADOS DOS CARDS ---
// Manter os dados em um array facilita a manutenção.
const servicesData = [
    {
        title: "Instalação de Pisos",
        description: "Instalação de pisos de madeira com precisão e estilo, garantindo durabilidade e acabamento perfeito."
    },
    {
        title: "Soluções Customizadas",
        description: "Soluções elegantes e customizadas para cada espaço, trazendo valor e sofisticação ao seu ambiente."
    },
    {
        title: "Qualidade e Detalhe",
        description: "Compromisso com a qualidade e atenção aos detalhes em cada projeto de instalação de piso."
    }
];


// --- COMPONENTE PRINCIPAL ---
export default function Services() {
    return (
        // Seção principal com fundo escuro e espaçamento (padding)
        <section className="bg-gray-800 text-white py-20">

            {/* Container para centralizar o conteúdo */}
            <div className="container mx-auto px-6 text-center">

                {/* Título da Seção */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Nossos Serviços
                </h2>

                {/* Parágrafo de Introdução */}
                <p className="text-lg text-gray-300 mb-12 max-w-xl mx-auto">
                    Descubra como podemos transformar sua casa com nossas soluções de alta qualidade e design sofisticado.
                </p>

                {/* Grid dos Cards de Serviço
          - 'grid': Ativa o layout de grade
          - 'grid-cols-1': 1 coluna em telas pequenas (mobile)
          - 'md:grid-cols-3': 3 colunas em telas médias ou maiores (desktop)
          - 'gap-8': Espaçamento entre os cards
        */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Mapeamento dos dados
            Isso cria um card para cada item no array 'servicesData'
          */}
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-700 p-8 rounded-lg shadow-lg
                         transform transition duration-300 hover:scale-105 hover:shadow-green-900"
                        >
                            {/* Ícone */}
                            <div className="flex justify-center">
                                <ServiceIcon />
                            </div>

                            {/* Título do Card */}
                            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>

                            {/* Descrição do Card */}
                            <p className="text-gray-300">{service.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}