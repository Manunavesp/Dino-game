import {Player} from "./messi.js"
import {Flags} from "./flag.js"


var player = new Player()    //messi creado//


function game(){
    window.addEventListener("keydown", function (e){
        if ( e.key === "ArrowUp"){
           if (player.jumping === false){
            player.jumping = true
           }
        }
      })

      var timer = setInterval(function (){
        player.jump()
      },22)
      
      var flagtimer = setInterval(function(){
         new Flags()
      },1000) 
}

game()