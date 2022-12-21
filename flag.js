var counter = 0;
export function Flags(player, score) {
    var flagArray = ["poland", "australia", "saudi-arabia", "netherlands", "france", "croatia", "mexico"];
    var random = Math.floor(Math.random() * flagArray.length);
    var self = this
    var flagDuration = 3000
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


    this.collision = function () {

        if (this.player.posx + 62 >= this.posx && this.player.posy <= this.posy + 64 && this.player.posx <= this.posx + 64) {
            alert("Game over")
        }
    }
    flagDuration = (20 * 3000) / this.speed; //rule of 3 to decrease flagDuration time
    setTimeout(() => {

        counter += 1;
        document.getElementById('score').innerHTML = counter

    }, flagDuration)

}

function move(bandera) {
    bandera.posx -= bandera.speed
    bandera.flag.style.left = bandera.posx + "px"
    if (bandera.posx <= 0) {
        bandera.parent.removeChild(bandera.flag)
        clearInterval(bandera.timer)
    }
    bandera.collision()
}


