
const action = document.getElementById("action")
var bot = document.getElementsByTagName("p");
const audio1 = new Audio("sons/click.mp3");

action.addEventListener("click", clicar)
function clicar(){
}

for(i = 0; i < bot.length ; i++){
    bot[i].addEventListener("click", function(){
        
        audio1.play()
    })
}