"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from "next/image";

// Estilos do Swiper
import 'swiper/css';
import 'swiper/css/pagination';

const StarIcon = () => (
    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.09l6.572-.955L10 0l2.939 6.135 6.572.955-4.756 4.455 1.123 6.545z" />
    </svg>
);

const testimonialsData = [
    {
        id: 1,
        name: "Maria Silva",
        role: "Proprietária",
        location: "Amsterdam",
        avatar: "/perfil1.jpg", 
        projectImage: "/banheiro1.jpg", // Foto do serviço realizado
        review: "Excelente trabalho! A equipe reformou completamente meu banheiro. O resultado superou todas as expectativas. Profissionalismo do início ao fim!"
    },
    {
        id: 2,
        name: "Carlos Mendes",
        role: "Arquiteto",
        location: "Utrecht",
        avatar: "/perfil2.jpg",
        projectImage: "/piso1.jpg",
        review: "Trabalho incrível! O novo piso parece fantástico. Mal posso esperar para usá-los novamente em nosso próximo projeto. Altamente recomendado!"
    },
    {
        id: 3,
        name: "Ana Souza",
        role: "Designer",
        location: "Rotterdam",
        avatar: "/perfil3.jpg",
        projectImage: "/cozinha1.jpg",
        review: "Tive uma excelente experiência! Instalação eficiente e equipe muito detalhista. Deixaram a casa impecável e o acabamento é de primeira qualidade."
    },
    {
        id: 4,
        name: "João Pedro",
        role: "Empresário",
        location: "Haia",
        avatar: "/perfil4.jpg",
        projectImage: "/cozinha2.jpg",
        review: "Serviço extremamente profissional. Cumpriram todos os prazos e o atendimento foi personalizado. Com certeza a melhor escolha para reformas."
    }
];

export default function Testimonials() {
    return (
        <section className="bg-gray-900 text-white py-20" data-aos="fade-up">
            <div className="container mx-auto px-6">
                
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Depoimentos de Clientes
                    </h2>
                    <p className="text-lg text-gray-300 max-w-xl mx-auto">
                        Veja o que nossos clientes dizem sobre a qualidade do nosso serviço.
                    </p>
                </div>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }, // 3 por seção no desktop
                    }}
                    className="pb-16"
                >
                    {testimonialsData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="bg-gray-800 p-6 rounded-2xl shadow-xl h-full flex flex-col border border-gray-700">
                                
                                {/* Foto do Projeto (Banheiro, Cozinha, etc) */}
                                {item.projectImage && (
                                    <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden border border-gray-600">
                                        <Image 
                                            src={item.projectImage} 
                                            alt="Foto do projeto"
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                )}

                                {/* Estrelas */}
                                <div className="flex mb-4 gap-1">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                                </div>

                                {/* Texto do Depoimento */}
                                <p className="text-gray-300 leading-relaxed mb-6 italic flex-grow">
                                    "{item.review}"
                                </p>

                                {/* Rodapé: Perfil do Cliente */}
                                <div className="border-t border-gray-700 pt-6 flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-500">
                                        <Image 
                                            src={item.avatar} 
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-bold text-white text-sm">{item.name}</h4>
                                        <p className="text-xs text-gray-400">{item.role} - {item.location}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .swiper-pagination-bullet { background: #4b5563 !important; }
                .swiper-pagination-bullet-active { background: #eab308 !important; }
            `}</style>
        </section>
    );
}