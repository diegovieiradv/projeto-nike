let body = document.querySelector("body")

let tenis = document.querySelector(".img-tenis")

function mudarVisual(cor, imagem){
    body.style.background = cor
    tenis.src = imagem
}