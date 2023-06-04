var fotos = document.querySelectorAll("img");
var info = document.getElementById("info");

for(i =0; i<fotos.length; i++){
    fotos[i].addEventListener("mouseenter", entrar)
    fotos[i].addEventListener("mouseleave", sair)
    fotos[i].addEventListener("mousemove", function(event){
        var posX = event.pageX;
        var posY = event.pageY;
        info.style.top = `${posY+25}px`
        info.style.left = `${posX+20}px`
        var nome = event.target;
        var elemento = nome.dataset.nome;
        info.innerHTML = elemento
        
    })
}
function entrar(){
    info.style.display = "block"
}
function sair(){
    info.style.display = "none"
}
function clicar(){
    window.alert("teste")
}



/*function mover(event){
    



    /*if(desc.dataset.raridade === "comum"){

        info.innerHTML = `<span style='color:white'>${desc.dataset.nome}`


    }else if(desc.dataset.raridade === "incomum"){

        info.innerHTML = `<span style='color:#EBEA64'>${desc.dataset.nome}`


    }else if(desc.dataset.raridade === "raro"){

        info.innerHTML = `<span style='color:#62EFEF'>${desc.dataset.nome}`


    }else if(desc.dataset.raridade === "epico"){

        info.innerHTML = `<span style='color:#F95CF7'>${desc.dataset.nome}`


    }else if(desc.dataset.raridade === "sinistro"){

        info.innerHTML = `<span style='color:#E99E27'>${desc.dataset.nome}`


    }else if(desc.dataset.atriruim === "sim"){
        info.innerHTML = `<span style='color:#ff0000'>${desc.dataset.linha1}`
    }else if(desc.dataset.atribom === "sim"){
        info.innerHTML += `<span style='color:#00ff00'>${desc.dataset.linha1}`
    }
}
 */   
