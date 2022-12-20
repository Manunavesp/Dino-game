import { Player } from "./messi.js"
import { Flags } from "./flag.js"
import { Ground } from "./ground.js"


var player = new Player()
var ground = new Ground()
var randomNumber = 500;
var flagtimer = null;


function game() {
    window.addEventListener("keydown", function(e) {
        if (e.key === "ArrowUp") {
            if (player.jumping === false) {
                player.jumping = true
            }
        }
    })

    var timer = setInterval(function () {
        player.jump()
        if (!flagtimer){
            flagtimer = setInterval(randomFlag, randomNumber)
            
        }
    }, 22)

}

function randomFlag() {
    new Flags()
    randomNumber = Math.floor(Math.random() * (5000 - 400 + 1)) + 400
    console.log(randomNumber)
    clearInterval(flagtimer)
    flagtimer = null;
}



game()



