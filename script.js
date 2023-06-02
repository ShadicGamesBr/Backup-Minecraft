var fotos = document.querySelectorAll("img");
var info = document.getElementById("info");
var desc = document.getElementById("teste")
for(i =0; i<fotos.length; i++){
    fotos[i].addEventListener("mouseenter", entrar)
    fotos[i].addEventListener("mouseleave", sair)
    fotos[i].addEventListener("mousemove", mover)
}
function entrar(){
    info.style.display = "block"
}
function sair(){
    info.style.display = "none"
}
function mover(event){
    var posX = event.clientX;
    var posY = event.clientY;
    info.style.top = `${posY+25}px`
    info.style.left = `${posX+20}px`
    info.innerHTML = `<span style='color:white'>${desc.dataset.nome}</span>`
}