import { Player } from "./messi.js"
import { Flags } from "./flag.js"
import { Ground } from "./ground.js"


new Ground()
var player = new Player()
var randomNumber = 500;
var flagtimer = null;

function game() {
    window.addEventListener("keydown", function (e) {
        if (e.key === "ArrowUp") {
            if (player.jumping === false) {
                player.jumping = true
            }
        }
    })

    var timer = setInterval(function () {
        player.jump()
        if (!flagtimer) {
            flagtimer = setInterval(randomFlag, randomNumber)

        }
    }, 22)

}

function randomFlag() {
    new Flags(player)
    randomNumber = Math.floor(Math.random() * (2000 - 475 + 1)) + 475
    console.log(randomNumber)
    clearInterval(flagtimer)
    flagtimer = null;
}

game()



