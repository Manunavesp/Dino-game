const dino = document.getElementById("dino");


window.addEventListener("keydown", function(e){
    console.log(dino.classList.contains("jump"));
    if (e.key === "ArrowUp" && dino.classList.contains("jump") === false){
        dino.classList.add("jump");
        setTimeout(function(){
            dino.classList.remove("jump");
        },500)
        
    }

})

