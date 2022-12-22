export function Flags(player, counter) {
    var flagArray = ["poland", "australia", "saudi-arabia", "netherlands", "france", "croatia", "mexico"];
    var random = Math.floor(Math.random() * flagArray.length);
    var self = this
    this.flag = document.createElement("div")
    this.flag.setAttribute("class", flagArray[random])
    this.posx = 1336
    this.posy = 25
    this.speed = 20 + counter
    this.flag.style.left = this.posx + "px"
    this.flag.style.bottom = this.posy + "px"
    this.parent = document.getElementById("backgroundGame")
    this.parent.appendChild(this.flag)
    this.timer = setInterval(move, 40, self)
    this.player = player
    this.timeoutTimer;
    this.flagDuration = (20 * 3000) / this.speed; //rule of 3 to decrease flagDuration time
    
    this.collision = function () {

        if (this.player.posx + 62 >= this.posx && this.player.posy <= this.posy + 64 && this.player.posx <= this.posx + 64) {
            this.player.checkDead = true 

            clearInterval(this.timer)
        }
    }


}

function move(bandera) {
    if (bandera.player.checkDead === false){
        bandera.posx -= bandera.speed
        bandera.flag.style.left = bandera.posx + "px"
        if (bandera.posx + 64 <= 0) {
            bandera.parent.removeChild(bandera.flag)
            clearInterval(bandera.timer)
        }
        bandera.collision()
    }
    else {
        clearInterval(bandera.timer)
    }
}


