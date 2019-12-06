function importJsFile(path) {
    let imported = document.createElement('script');
    imported.src = path;
    document.getElementById("app").appendChild(imported);
}

importJsFile("assets/js/Component.js")
importJsFile("assets/js/Bird.js")
importJsFile("assets/js/Pig.js")
importJsFile("assets/js/Obstacle.js")


let g = .15, //Gravity
    wind_resistance = .0001
////////////////
var sounds={
    onClickSound:new Audio('assets/media/sounds/Sound Effects - bird 01 flying.mp3'),
    collisionSound:new Audio('asstes/media/sounds/Sound Effects - bird 01 collision a2_low.mp3'),
    flyingSound:new Audio('asstes/media/sounds/Sound Effects - bird 01 flying.mp3'),
    lostSound:new Audio('assets/media/sounds/Sound Effects - level failed piglets a2.mp3')

//////////////
}
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        let canvas = document.getElementById("GameArea")
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight - 93

        let gameArea = canvas.getContext('2d')

        let bird1 = new Bird(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/birds/red.png")
        let bird2 = new Bird(gameArea, 120, canvas.height - 50, 50, 50, "assets/media/imgs/objects/birds/yellow.png")
        let bird3 = new Bird(gameArea, 50, canvas.height - 50, 50, 50, "assets/media/imgs/objects/birds/red.png")
        bird2.draw()

        let birds = [bird1, bird2, bird3]

        let pig1 = new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png")
        let pig2 = new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png")
        let pig3 = new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png")

        let pigs = [pig1, pig2, pig3]

        let currentBird = 0
        birds[currentBird].activeBird = true
        let obstacle1 = new Obstacle(gameArea, 800, 200, 50, 80, "assets/media/imgs/obstacles/brick_1.png")
        let obstacle2 = new Obstacle(gameArea, 1200, 250, 50, 80, "assets/media/imgs/obstacles/brick_1.png")
        let obstacle3 = new Obstacle(gameArea, 600, 300, 50, 80, "assets/media/imgs/obstacles/brick_1.png")

        let obstacles = [obstacle1, obstacle2, obstacle3]


        function drawBirds() {
            for (let i = 0; i < birds.length; i++) {
                birds[i].draw()
            }

        }

        function drawEnemies() {
            for (let i = 0; i < obstacles.length; i++) {
                pigs[i].x = obstacles[i].x + pigs[i].width / 4 + pigs[i].newX
                pigs[i].y = obstacles[i].y - pigs[i].height + 2 + pigs[i].newY
                obstacles[i].draw()
                pigs[i].draw()
            }
        }


        drawBirds()
        drawEnemies()


        canvas.addEventListener("mousedown", function (event) {
            birds[currentBird].grabBird(event)
            // animate()
        })
        canvas.addEventListener("mousemove", function (event) {
            birds[currentBird].setBirdSpeed(event)
            // animate()

        })
        canvas.addEventListener("mouseup", function () {
            birds[currentBird].fire(canvas, wind_resistance, g, pigs, obstacles)

        })



        function countPigs(pigs) {
            let count_pigs = 0
            for (let i = 0; i < pigs.length; i++) {
                if (!pigs[i].dead)
                    count_pigs++
            }

            return count_pigs
        }



        let anim = true


        let checkWin =setInterval(() => {
            gameArea.clearRect(0, 0, innerWidth, innerHeight)
            drawBirds()
            drawEnemies()

            if (countPigs(pigs) && !birds.length) {
                alert("you lose")
                clearInterval(checkWin)

            }
            if (birds[currentBird].ended && birds.length) {
                birds.splice(currentBird, 1)
                if (birds.length) {
                    birds[currentBird].x = birds[currentBird].defX = 200
                    birds[currentBird].y = birds[currentBird].defY = 300
                    birds[currentBird].activeBird = true
                }
            }

        }, 13)

        function animate() {
            requestAnimationFrame(animate)
            gameArea.clearRect(0, 0, innerWidth, innerHeight)
            drawBirds()
            drawEnemies()


            if (anim != false) {

                if (countPigs(pigs) && !birds.length) {
                    anim = false
                    clearInterval(checkWin)
                }
                if (birds[currentBird].ended) {
                    birds.splice(currentBird, 1)
                    if (birds.length) {
                        birds[currentBird].x = birds[currentBird].defX = 200
                        birds[currentBird].y = birds[currentBird].defY = 300
                        birds[currentBird].activeBird = true
                    }
                }
            }
        }
    }
};
