// Este evento garante que o script só será executado depois que todo o HTML for carregado.
document.addEventListener('DOMContentLoaded', () => {

    // SELECIONA TODOS OS ELEMENTOS QUE DEVEM SER ANIMADOS
    // Pega todas as seções que têm a classe "secao-tecnica".
    const secoes = document.querySelectorAll('.secao-tecnica');

    // CONFIGURA O "OBSERVADOR"
    // Estas são as regras que o observador usará para decidir se um elemento está visível.
    const opcoesObservador = {
        root: null, // "null" significa que a referência é a própria tela (viewport).
        rootMargin: '0px',
        threshold: 0.2 // A animação começa quando 20% do elemento estiver visível.
    };

    // CRIA A FUNÇÃO DO OBSERVADOR
    // Esta função será chamada toda vez que a visibilidade de um elemento observado mudar.
    const observador = new IntersectionObserver((entradas, observador) => {
        // Verifica cada "entrada" (cada seção que está sendo observada).
        entradas.forEach(entrada => {
            // Se a seção entrou na área visível...
            if (entrada.isIntersecting) {
                // ...adiciona a classe "visivel" ao elemento.
                entrada.target.classList.add('visivel');
            }
        });
    }, opcoesObservador);

    // APLICA O OBSERVADOR A CADA SEÇÃO
    // Pede ao observador para "assistir" a cada uma das seções que selecionamos.
    secoes.forEach(secao => {
        observador.observe(secao);
    });

});