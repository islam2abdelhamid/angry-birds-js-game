function importJsFile(path) {
    let imported = document.createElement('script');
    imported.src = path;
    document.getElementById("app").appendChild(imported);
}
importJsFile("assets/js/Bird.js")

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        let gameContainer = document.getElementById("app"),
            body = document.getElementsByTagName("body")[0],
            g = .15, //Gravity
            wind_resistance = .0001,
            bird1 = new Bird() // new object

        bird1.createBird(gameContainer, "assets/media/imgs/objects/birds/red.png")
        bird1.getBird().onmousedown = function (e) {
            bird1.grabBird(e)
        }

        body.onmousemove = function (e) {
            bird1.setBirdSpeed(e)
        }


        let pig = document.createElement("div")
        pig.style.width = 50 + "px"
        pig.style.height = 50 + "px"
        pig.style.position = "absolute"
        pig.style.top = 300 + "px"
        pig.style.left = 700 + "px"
        pig.style.backgroundColor = "red"
        gameContainer.appendChild(pig)

        let pig2 = document.createElement("div")
        pig2.style.width = 50 + "px"
        pig2.style.height = 50 + "px"
        pig2.style.position = "absolute"
        pig2.style.top = 500 + "px"
        pig2.style.left = 500 + "px"
        pig2.style.backgroundColor = "red"
        gameContainer.appendChild(pig2)

        let arrOfPigs = []
        arrOfPigs.push(pig)
        arrOfPigs.push(pig2)
        body.onmouseup = function () {
            bird1.fireBird(body, wind_resistance, g, arrOfPigs)

        }


       

    }
};