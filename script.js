document.addEventListener("DOMContentLoaded", () => {

    // ANIMAÇÃO DE ENTRADA DAS SEÇÕES
    const secoes = document.querySelectorAll(".secao-tecnica");

    const opcoesObservador = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2
    };

    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
            }
        });
    }, opcoesObservador);

    secoes.forEach(secao => {
        observador.observe(secao);
    });

    // CONTROLE DO MODAL DE FEEDBACK
    const linkFeedback = document.querySelector("#link-feedback");
    const modalFundo = document.querySelector("#modal-feedback");
    const fecharModal = document.querySelector(".fechar-modal");

    linkFeedback.addEventListener("click", (evento) => {
        evento.preventDefault();
        modalFundo.classList.add("visivel");
    });

    fecharModal.addEventListener("click", () => {
        modalFundo.classList.remove("visivel");
    });

    modalFundo.addEventListener("click", (evento) => {
        if (evento.target === modalFundo) {
            modalFundo.classList.remove("visivel");
        }
    });

});