// components/Hero.tsx

/* * Documentação do Componente Hero
 * * Objetivo: Esta é a seção principal de "boas-vindas" (Hero) do site.
 * Ela deve ter um fundo (imagem ou cor) e um texto centralizado
 * com um "Chamado à Ação" (Call to Action - CTA).
 *
 * O estilo usa Tailwind CSS para criar o layout.
*/
export default function Hero() {
    return (
        <section className="relative bg-gray-900 text-white">
            {/* Container para o conteúdo.
        - 'h-screen' faz a seção ocupar a tela inteira.
        - 'flex flex-col' e 'justify-center items-center' centralizam o conteúdo.
        - 'text-center' alinha o texto.
        - NOTA: O site original usa uma imagem de fundo.
          Aqui usamos uma cor sólida ('bg-gray-900').
          Para usar uma imagem, você adicionaria uma tag <Image> do Next.js
          com 'layout="fill"' e 'objectFit="cover"'.
      */}
            <div className="container mx-auto px-6 z-10 h-150 flex flex-col justify-center items-center text-center">

                {/* Título Principal */}
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                    Construa seus próprios sonhos
                </h1>

                {/* Subtítulo / Slogan */}
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                    Na FC Flooring, nos dedicamos a transformar sua visão em realidade.
                    Oferecemos soluções customizadas que combinam qualidade, durabilidade e design.
                </p>

                {/* Botão de Call to Action (CTA)
          Note o destaque "30% OFF" igual ao site original.
        */}
                <a
                    href="/contato"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg"
                >
                    Orçamento Grátis <span className="ml-2 bg-yellow-400 text-black text-sm font-bold p-1 rounded">30% OFF</span>
                </a>

            </div>
        </section>
    );
}