export function Player (){
    this.player = document.getElementById("messi")
    this.posx = 40
    this.posy = 25
    this.speed = 100  //jump speed
    this.jumping = false
    
    this.jump = function (){
    if (this.jumping === true && this.speed >= 0.1){
        this.posy += this.speed
        this.speed -=  this.speed * 0.5
        this.player.style.bottom = this.posy + "px"
    } 
    else if (this.onFloor() === false) {
        this.posy -= 20
        this.player.style.bottom = this.posy + "px"
    } 
    else {
        this.speed = 100 
        this.jumping = false
    }

    this.onFloor = function(){  
        if (this.posy > 25){
            return false
        } 
        else {
            return true
        }
    }}
}

