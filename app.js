function importJsFile(path) {
    let imported = document.createElement('script');
    imported.src = path;
    document.getElementById("scripts").appendChild(imported);
}

importJsFile("assets/js/Level.js")
importJsFile("assets/js/Component.js")
importJsFile("assets/js/Bird.js")
importJsFile("assets/js/Pig.js")
importJsFile("assets/js/Obstacle.js")


let g = .15, //Gravity
    wind_resistance = .0001
var sounds = {
    startSound: new Audio('assets/media/sounds/start.mp3'),
    clickSound: new Audio('assets/media/sounds/select.mp3'),
    firedSound: new Audio('assets/media/sounds/fire.mp3'),
    failedSound: new Audio('assets/media/sounds/failed.mp3'),
    winSound: new Audio('assets/media/sounds/win.mp3'),

}

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        let canvas = document.getElementById("GameArea")
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight - 93
        sounds.startSound.play()
        let tryAgainBtn = document.getElementById("tryAgain")
        let nextLevelBtn = document.getElementById("nextLevel")
        let tryAgainWindow = document.getElementsByClassName("try-again-window")[0]
        let winWindow = document.getElementsByClassName("win-window")[0]
        let currentLevel = parseInt(location.search.substring(1)) ? parseInt(location.search.substring(1)) : 1;

        tryAgainBtn.onclick = function () {
            location.replace("level-1.html?" + currentLevel)
        }
        nextLevelBtn.onclick = function () {
            if (currentLevel != 3)
                location.replace("level-1.html?" + ++currentLevel)
            else {

            }
        }



        let gameArea = canvas.getContext('2d')

        let birds_obj = {
            "bird1": new Bird(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/birds/red.png"),
            "bird2": new Bird(gameArea, 120, 490, 50, 50, "assets/media/imgs/objects/birds/red.png"),
            "bird3": new Bird(gameArea, 50, 490, 50, 50, "assets/media/imgs/objects/birds/red.png"),
            "bird4": new Bird(gameArea, 90, 490, 50, 50, "assets/media/imgs/objects/birds/red.png"),
            "bird5": new Bird(gameArea, 90, 450, 50, 50, "assets/media/imgs/objects/birds/red.png"),
            "bird6": new Bird(gameArea, 100, 460, 50, 50, "assets/media/imgs/objects/birds/red.png"),
            "bird7": new Bird(gameArea, 90, 470, 50, 50, "assets/media/imgs/objects/birds/red.png"),
            "bird8": new Bird(gameArea, 90, 480, 50, 50, "assets/media/imgs/objects/birds/red.png"),
        }
        let pigs_obj = {
            "pig1": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
            "pig2": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
            "pig3": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
            "pig4": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
            "pig5": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
            "pig6": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
            "pig7": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
            "pig8": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
        }

        let obstacles_obj = {
            "obstcale1": new Obstacle(gameArea, 800, 200, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
            "obstcale2": new Obstacle(gameArea, 1200, 250, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
            "obstcale3": new Obstacle(gameArea, 600, 300, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
            "obstcale4": new Obstacle(gameArea, 500, 400, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
            "obstcale5": new Obstacle(gameArea, 600, 100, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
            "obstcale6": new Obstacle(gameArea, 850, 350, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
            "obstcale7": new Obstacle(gameArea, 600, 300, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
            "obstcale8": new Obstacle(gameArea, 600, 300, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
        }



        updateGameArea()


        canvas.addEventListener("mousedown", function (event) {
            sounds.clickSound.play()
            myLevel.getActiveBird().grabBird(event)
        })

        canvas.addEventListener("mousemove", function (event) {
            myLevel.getActiveBird().setBirdSpeed(event)
        })

        canvas.addEventListener("mouseup", function () {
            sounds.firedSound.play()
            myLevel.getActiveBird().fire(canvas, wind_resistance, g, myLevel.pigs, myLevel.obstacles)
        })


        var myLevel = new Level(currentLevel, birds_obj, pigs_obj, obstacles_obj)


        function updateGameArea() {
            let clearIfEnded = setInterval(function () {
                gameArea.clearRect(0, 0, innerWidth, innerHeight)
                myLevel.drawLevelComponents()
                // console.log("top", myLevel.birds.length);

                if (myLevel.isEnded()) {
                    if (myLevel.checkIfWin()) {
                        winWindow.style.display = "block"
                        sounds.winSound.play()
                    } else {
                        tryAgainWindow.style.display = "block"
                        sounds.failedSound.play()
                    }
                }

            }, 13)
        }




    }
};