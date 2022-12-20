export function Flags () {
    var flagArray = ["poland", "australia", "saudi-arabia", "netherlands", "france", "croatia", "mexico"];
    var random = Math.floor(Math.random() * flagArray.length);
    var self = this
    this.flag = document.createElement("div")
    this.flag.setAttribute("class", flagArray[random])
    this.posx = 0
    this.posy = 25
    this.speed = 20
    this.flag.style.right = this.posx + "px"
    this.flag.style.bottom = this.posy + "px"
    this.parent = document.getElementById("backgroundGame")   
    this.parent.appendChild(this.flag)
    this.timer = setInterval(move, 40, self)    
}


function move (bandera){
    bandera.posx += bandera.speed 
    bandera.flag.style.right = bandera.posx + "px"
    if (bandera.posx >= 1400){
        bandera.parent.removeChild(bandera.flag)
        clearInterval(bandera.timer)
    }
}
  


    
