'use client'; // Marca este componente para ser executado no lado do cliente

import { useEffect } from 'react';
import AOS from 'aos';
// Importamos o CSS diretamente. Você precisará garantir que o arquivo 'aos/dist/aos.css' 
// seja importado ou que você o inclua manualmente no seu CSS global/layout, se necessário.
// Na maioria das configurações Next.js, a importação direta abaixo funciona.
import 'aos/dist/aos.css'; 

/**
 * @description Componente de cliente para inicializar a biblioteca AOS (Animate On Scroll).
 * Este componente não renderiza nada visualmente, apenas configura o JavaScript.
 */
export default function AOSClient() {
  useEffect(() => {
    // Inicializa o AOS com as configurações desejadas
    AOS.init({
      // Offset (em px) de quando a animação deve começar
      offset: 150, 
      // Duração da animação (em ms). 1000ms = 1 segundo
      duration: 800, 
      // Uma vez: se a animação deve rodar apenas uma vez
      once: true, 
      // Se deve ser desativado em dispositivos móveis (muitas vezes é melhor manter ativo)
      disable: false, 
    });

    // Boa prática: se o layout mudar, o AOS deve ser atualizado.
    AOS.refresh(); 

    // Limpeza (opcional)
    return () => {
      AOS.refreshHard();
    };
  }, []); // O array vazio garante que rode apenas uma vez (ao montar)

  return null; // Não renderiza HTML
}
