
const action = document.getElementById("action")
var bot = document.getElementsByTagName("p");

action.addEventListener("click", clicar)
function clicar(){
}

for(i = 0; i < bot.length ; i++){
    bot[i].addEventListener("click", function(){
        const audio1 = new Audio("sons/click.mp3");
        audio1.play()
    })
}