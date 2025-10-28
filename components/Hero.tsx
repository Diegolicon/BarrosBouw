// components/Hero.tsx

/* * Documentação do Componente Hero
 * * Objetivo: Esta é a seção principal de "boas-vindas" (Hero) do site.
 * Ela deve ter um fundo (imagem ou cor) e um texto centralizado
 * com um "Chamado à Ação" (Call to Action - CTA).
 *
 * MODIFICAÇÃO: Adicionado 'data-aos' aos elementos internos para animação de carregamento.
*/
export default function Hero() {
    return (
        <section className="relative bg-gray-900 text-white">
            {/* Container para o conteúdo.
        - 'h-screen' faz a seção ocupar a tela inteira.
        - 'flex flex-col' e 'justify-center items-center' centralizam o conteúdo.
        - 'text-center' alinha o texto.
      */}
            <div className="container mx-auto px-6 z-10 h-150 flex flex-col justify-center items-center text-center">

                {/* Título Principal - Aparece primeiro, descendo */}
                <h1 
                    className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
                    data-aos="fade-down"
                    data-aos-duration="600"
                >
                    Construa seus próprios sonhos
                </h1>

                {/* Subtítulo / Slogan - Aparece logo depois do título */}
                <p 
                    className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-duration="600"
                >
                    Na Barros Bouw, nos dedicamos a transformar sua visão em realidade.
                    Oferecemos soluções customizadas que combinam qualidade, durabilidade e design.
                </p>

                {/* Botão de Call to Action (CTA) - Aparece por último */}
                <a
                    href="/contato"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="600"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg"
                >
                    Orçamento Grátis <span className="ml-2 bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full text-sm font-extrabold">30% OFF</span>
                </a>
            </div>
        </section>
    );
}
