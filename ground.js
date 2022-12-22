let groundCounter = 0;
export function Ground(player) {
    var self = this
    var groundDuration = 3000
    this.ground = document.getElementById("ground")
    this.posx = 0
    this.posy = 0
    this.speed = 20 + groundCounter
    this.timer = setInterval(move, 40, self)
    this.player = player

    groundDuration = (20 * 3000) / this.speed; //rule of 3 to decrease groundDuration time
    setTimeout(() => {
        groundCounter += 1;
        console.log(groundCounter);
    }, groundDuration);
    
}


function move(suelo) {
    if (suelo.player.checkDead === false){
        if (suelo.posx <= -1400) {
            suelo.posx = 0
        } else {
            suelo.posx -= suelo.speed
        }
        suelo.ground.style.left = suelo.posx + "px"
    }
    else {
        clearInterval(suelo.timer)
    }
}

