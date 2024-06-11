const sliderContainer = document.getElementById("slider__container");

const card = document.getElementsByClassName("card");
const cardLink = document.querySelectorAll(".card > a");
const botaoDireita = document.getElementsByClassName("seta-direita");
const botaoEsquerda = document.getElementsByClassName("seta-esquerda");

const cardArray = Array.from(card);
const botaoDireitaArray = Array.from(botaoDireita);
const botaoEsquerdaArray = Array.from(botaoEsquerda);

const cores = [
    "purple",
    "#fbffd1",
    "#b15204",
    "#FFF"
];


let currentTranslateX = 0;

cardArray.forEach((element, index) => {
    const corIndex = index % cores.length;
    element.style.color = cores[corIndex];
});

cardLink.forEach((element,index) => {
    const corIndex = index % cores.length;
    element.style.color = cores[corIndex];
});


botaoDireitaArray.forEach((element, index) => {
    element.addEventListener("click", moverDireita);
});

botaoEsquerdaArray.forEach(element => {
    element.addEventListener("click", moverEsquerda);
});



function moverDireita() {
    if(currentTranslateX == -300) {
        currentTranslateX = 100;
    }
    currentTranslateX -= 100; 
    sliderContainer.style.transform = `translateX(${currentTranslateX}vw)`;

}
function moverEsquerda() {
    if(currentTranslateX == 0) {
        currentTranslateX = -400;
    }
    currentTranslateX += 100; 
    sliderContainer.style.transform = `translateX(${currentTranslateX}vw)`;
}
