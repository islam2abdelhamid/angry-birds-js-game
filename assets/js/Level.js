
let Level = function (level_num) {
    this.level_num = level_num;
    this.activeBird
    switch (level_num) {
        case 1:
            this.num_of_pigs = 3;
            this.num_of_birds = 3;
            break;
        case 2:
            this.num_of_pigs = 4;
            this.num_of_birds = 4;
            break;
        case 3:
            this.num_of_pigs = 5;
            this.num_of_birds = 5;
            break;
        default:
            this.num_of_pigs = 3;
            this.num_of_birds = 3;
            break;
    }

    this.pigs = []
    this.birds = []
    this.obstacles = []

}

Level.prototype.initLevelComponents = function (birds, pigs, obstacles) {


    for (let i = 0; i < this.num_of_birds; i++) {
        this.birds.push(birds[Object.keys(birds)[i]])
    }


    for (let i = 0; i < this.num_of_pigs; i++) {
        this.pigs.push(pigs[Object.keys(pigs)[i]])
        this.obstacles.push(obstacles[Object.keys(obstacles)[i]])
    }


}

Level.prototype.drawLevelComponents = function () {
    this.drawBirds()
    this.drawEnemies()

}

Level.prototype.drawBirds = function () {

    if (this.birds.length) {
        this.birds[0].activeBird = true
        this.activeBird = this.birds[0]

        if (this.birds[0].ended && this.birds.length) {
            this.birds.splice(0, 1)
            if (this.birds.length) {
                this.birds[0].x = this.birds[0].defX = 200
                this.birds[0].y = this.birds[0].defY = 300
                this.birds[0].activeBird = true
            }
        }

        for (let i = 0; i < this.birds.length; i++)
            this.birds[i].draw()
    }
}

Level.prototype.drawEnemies = function () {
    for (let i = 0; i < this.num_of_pigs; i++) {
        this.pigs[i].x = this.obstacles[i].x + this.pigs[i].width / 4 + this.pigs[i].newX
        this.pigs[i].y = this.obstacles[i].y - this.pigs[i].height + 2 + this.pigs[i].newY
        this.obstacles[i].draw()
        this.pigs[i].draw()
    }
}

Level.prototype.countPigs = function (pigs) {
    let count_pigs = 0
    for (let i = 0; i < this.num_of_birds; i++)
        if (!this.pigs[i].dead)
            count_pigs++

    return count_pigs
}

Level.prototype.getActiveBird = function () {
    return this.activeBird
}

Level.prototype.checkIfWin = function () {
    if(!this.birds.length && this.countPigs()){
        console.log(this.countPigs())
        return false
    }
    else 
        return true
}




// level.prototype.check_win=function(currentBird,canvas){
//     let checkWin = setInterval(function () {
//         if (birds[currentBird].checkIfEnded(canvas) && currentBird < birds.length) {
//             birds.splice(currentBird, 1)
//             if (birds.length) {
//                 birds[currentBird].x = birds[currentBird].defX = 200
//                 birds[currentBird].y = birds[currentBird].defY = 300
//                 birds[currentBird].activeBird = true
//             }
//         }

//         if (l1.countPigs(pigs) && birds.length == 0) {
//             alert("you lose")
//             clearInterval(checkWin)
//         }
//     }, 500);
// }



// level.prototype.animate = function (gameArea,innerWidth,innerHeight) {
//     requestAnimationFrame(this.animate)
//     gameArea.clearRect(0, 0, innerWidth, innerHeight)
//     this.drawBirds()
//     this.drawEnemies()

// }


// level.prototype.play = function () {
//     document.onreadystatechange = () => {
//         if (document.readyState === 'complete') {
//             let canvas = document.getElementById("GameArea")
//             canvas.width = window.innerWidth
//             canvas.height = window.innerHeight - 93

//             let gameArea = canvas.getContext('2d')

//             let birds_obj = {
//                 "bird1": new Bird(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/birds/red.png"),
//                 "bird2": new Bird(gameArea, 120, 490, 50, 50, "assets/media/imgs/objects/birds/red.png"),
//                 "bird3": new Bird(gameArea, 50, 490, 50, 50, "assets/media/imgs/objects/birds/red.png"),
//                 "bird4": new Bird(gameArea, 90, 490, 50, 50, "assets/media/imgs/objects/birds/red.png"),
//                 "bird5": new Bird(gameArea, 90, 450, 50, 50, "assets/media/imgs/objects/birds/red.png"),
//                 "bird6": new Bird(gameArea, 100, 460, 50, 50, "assets/media/imgs/objects/birds/red.png"),
//                 "bird7": new Bird(gameArea, 90, 470, 50, 50, "assets/media/imgs/objects/birds/red.png"),
//                 "bird8": new Bird(gameArea, 90, 480, 50, 50, "assets/media/imgs/objects/birds/red.png"),
//             }
//             let pigs_obj = {
//                 "pig1": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
//                 "pig2": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
//                 "pig3": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
//                 "pig4": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
//                 "pig5": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
//                 "pig6": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
//                 "pig7": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
//                 "pig8": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
//             }

//             let obstacles_obj = {
//                 "obstcale1": new Obstacle(gameArea, 800, 200, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
//                 "obstcale2": new Obstacle(gameArea, 1200, 250, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
//                 "obstcale3": new Obstacle(gameArea, 600, 300, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
//                 "obstcale4": new Obstacle(gameArea, 500, 400, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
//                 "obstcale5": new Obstacle(gameArea, 600, 100, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
//                 "obstcale6": new Obstacle(gameArea, 850, 350, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
//                 "obstcale7": new Obstacle(gameArea, 600, 300, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
//                 "obstcale8": new Obstacle(gameArea, 600, 300, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
//             }

//             let bird_num = this.num_of_birds;
//             let pig_num = this.num_of_pigs;
//             this.push_game_components(birds_obj, this.num_of_birds, "bird");
//             this.push_game_components(pigs_obj, this.num_of_pigs, "pig");
//             this.push_game_components(obstacles_obj, this.num_of_pigs, "obstcale");

//             let currentBird = 0
//             birds[currentBird].activeBird = true





//             this.drawBirds();
//             this.drawEnemies();


//             canvas.addEventListener("mousedown", function (event) {
//                 birds[currentBird].grabBird(event)
//             })
//             canvas.addEventListener("mousemove", function (event) {
//                 birds[currentBird].setBirdSpeed(event)

//             })
//             canvas.addEventListener("mouseup", function () {
//                 birds[currentBird].fire(canvas, wind_resistance, g, pigs, obstacles)

//             })


//             checkWin = setInterval(() => {
//                 gameArea.clearRect(0, 0, innerWidth, innerHeight)
//                 this.drawBirds()
//                 this.drawEnemies()

//                 if (this.countPigs(pigs) && !birds.length) {
//                     sounds.lostSound.play();
//                     alert("you loose")
//                     clearInterval(checkWin)
//                 }
//                 if (birds[currentBird].ended && birds.length) {
//                     birds.splice(currentBird, 1)
//                     if (birds.length) {
//                         birds[currentBird].x = birds[currentBird].defX = 200
//                         birds[currentBird].y = birds[currentBird].defY = 300
//                         birds[currentBird].activeBird = true
//                     }
//                 }

//             }, 13)







// let an=function animate() {
//     requestAnimationFrame(an)
//     gameArea.clearRect(0, 0, innerWidth, innerHeight)
//     l1.drawBirds()
//     l1.drawEnemies()

// }
//this.animate(gameArea,innerWidth,innerHeight);

//         }
//     };

// }

////////////////////////////////////////////////////////////////////////////

// creating a new level of the game 

// let l1 = new level(2, 3); //two birds and six pigs

// l1.play()