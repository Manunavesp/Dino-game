let counter = 0;
export function Ground() {
    var self = this
    var groundDuration = 3000
    this.ground = document.getElementById("ground")
    this.posx = 0
    this.posy = 0
    this.speed = 20 + counter
    this.timer = setInterval(move, 40, self)

    groundDuration = (20 * 3000) / this.speed; //rule of 3 to decrease groundDuration time
    setTimeout(() => {
        counter += 1;
        document.getElementById('score').innerHTML = counter;
        console.log(counter);
    }, groundDuration);
    
}


function move(suelo) {
    if (suelo.posx <= -1400) {
        suelo.posx = 0
    } else {
        suelo.posx -= suelo.speed
    }
    suelo.ground.style.left = suelo.posx + "px"
}

