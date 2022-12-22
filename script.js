import { Player } from "./messi.js"
import { Flags } from "./flag.js"
import { Ground } from "./ground.js"

var counter = 0
var button = document.getElementById("button")
var button2 = document.getElementById("gameOver")
var messi = document.getElementById("messi")
var score = document.getElementById("divCounter")
var title = document.getElementById("title")

messi.style.display = "none"
score.style.display = "none"
button.addEventListener("click", game, { once: true })

var randomNumber = 500;
var flagtimer = null;
var player = new Player()

function game() {
    messi.style.display = "block"
    score.style.display = "block"
    new Ground(player)
    button.style.display = "none";

    window.addEventListener("keydown", function (e) {
        if (e.key === " ") {
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

        if (player.checkDead === true) {
            button2.style.display = "block"
            title.style.display = "none"
            clearInterval(flagtimer)
            flagtimer = null;
            clearInterval(timer)

        }
    }, 22)

}

button2.addEventListener("click", function () {
    var groundParent = document.getElementById("backgroundGame")
    var flags = document.querySelectorAll(".poland, .australia, .saudi-arabia, .croatia, .france, .mexico, .netherlands")
    for (let i = 0; i < flags.length; i++) {
        groundParent.removeChild(flags[i])
    }
    player.checkDead = false
    button2.style.display = "none"
    counter = 0
    document.getElementById('score').innerHTML = counter

    game()
})

function randomFlag() {
    var flag = new Flags(player, counter)
    flag.timeoutTimer = setTimeout(() => {
       
        if (player.checkDead === false){
            counter += 1;
            document.getElementById('score').innerHTML = counter
            console.log(counter)
        }
        clearTimeout(flag.timeoutTimer)
    }, flag.flagDuration)

    randomNumber = Math.floor(Math.random() * (2000 - 475 + 1)) + 475
    clearInterval(flagtimer)
    flagtimer = null;
    
}






