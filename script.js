function initAnimacaoPrincipal() {
    const principal = document.querySelectorAll('.js-scroll');

    function animaPrincipal() {
        
        principal.forEach((item) => {
            item.classList.add('ativo');
        })
    }

    window.addEventListener('load', animaPrincipal);
}

initAnimacaoPrincipal();

const elementos = document.querySelectorAll('.js-scroll-lateral');
const elementoMetade = window.innerHeight * 0.6;
function animaElementos(){
    elementos.forEach((item) => {
        const elementoTop = item.getBoundingClientRect().top - elementoMetade;
        if(elementoTop < 0){
            item.classList.add('ativo');
        } else {
            item.classList.remove('ativo');
        }
    })
}

window.addEventListener('scroll', animaElementos);