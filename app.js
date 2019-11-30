function importJsFile(path) {
    let imported = document.createElement('script');
    imported.src = path;
    document.head.appendChild(imported);
}
importJsFile("assets/js/Bird.js")

document.addEventListener('DOMContentLoaded', () => {

    let gameContainer = document.getElementById("app"),
        body = document.getElementsByTagName("body")[0],
        g = .15, //Gravity
        wind_resistance = .0001,
        bird1 = new Bird() // new object
        
    bird1.createBird(gameContainer,"assets/media/imgs/objects/birds/red.png")
    bird1.getBird().onmousedown = function (e) {
        bird1.grabBird(e)
    }

    body.onmousemove = function (e) {
        bird1.setBirdSpeed(e)
    }

    body.onmouseup = function () {
        bird1.fireBird(body, wind_resistance, g)
    }

    
})