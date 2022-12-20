export function Ground() {
    var self = this
    this.ground = document.getElementById("ground")
    this.posx = 0
    this.posy = 0
    this.speed = 20
    this.timer = setInterval(move, 40, self)

}


function move(suelo) {
    if (suelo.posx <= -1400) {
        suelo.posx = 0
    } else {
        suelo.posx -= suelo.speed
    }
    suelo.ground.style.left = suelo.posx + "px"
}