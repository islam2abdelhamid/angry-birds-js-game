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

let birds=[];
let pigs=[];
let obstacles=[];



let level=function(num_of_birds,num_of_pigs){
    this.num_of_pigs=num_of_pigs;
    this.num_of_birds=num_of_birds;
}

level.prototype.push_game_components= function (obj,num,Component_type){
    let keys= Object.keys(obj);
    for (let i =0;i<num;i++){
        if(Component_type=="bird")
             birds.push(obj[keys[i]]);
        if(Component_type=="pig")
             pigs.push(obj[keys[i]]);
        if(Component_type=="obstcale")
             obstacles.push(obj[keys[i]]);
        //alert("pushed...");
    }
}

level.prototype.drawBirds=function() {
    for (let i = 0; i < birds.length; i++) {
        birds[i].draw()
    }

}

level.prototype.countPigs= function (pigs) {
    let count_pigs = 0
    for (let i = 0; i < pigs.length; i++) {
        if (!pigs[i].dead)
            count_pigs++
    }

    return count_pigs
}


level.prototype.drawEnemies=function() {
    for (let i = 0; i < obstacles.length; i++) {
        pigs[i].x = obstacles[i].x + pigs[i].width / 4 + pigs[i].newX
        pigs[i].y = obstacles[i].y - pigs[i].height + 2 + pigs[i].newY
        obstacles[i].draw()
        pigs[i].draw()
    }
}

level.prototype.check_win=function(currentBird,canvas){
    let checkWin = setInterval(function () {
        if (birds[currentBird].checkIfEnded(canvas) && currentBird < birds.length) {
            birds.splice(currentBird, 1)
            if (birds.length) {
                birds[currentBird].x = birds[currentBird].defX = 200
                birds[currentBird].y = birds[currentBird].defY = 300
                birds[currentBird].activeBird = true
            }
        }

        if (l1.countPigs(pigs) && birds.length == 0) {
            alert("you lose")
            clearInterval(checkWin)
        }
    }, 500);
}



level.prototype.animate = function (gameArea,innerWidth,innerHeight) {
    requestAnimationFrame(this.animate)
    gameArea.clearRect(0, 0, innerWidth, innerHeight)
    this.drawBirds()
    this.drawEnemies()

}


level.prototype.play=function(){
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            let canvas = document.getElementById("GameArea")
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight - 93
    
            let gameArea = canvas.getContext('2d')
            
            let birds_obj={
                "bird1":new Bird(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/birds/red.png"),
                "bird2":new Bird(gameArea, 120, 490, 50, 50, "assets/media/imgs/objects/birds/red.png"),
                "bird3":new Bird(gameArea, 50, 490, 50, 50, "assets/media/imgs/objects/birds/red.png"),
                "bird4":new Bird(gameArea, 90, 490, 50, 50, "assets/media/imgs/objects/birds/red.png"),
                "bird5":new Bird(gameArea, 90, 450, 50, 50, "assets/media/imgs/objects/birds/red.png"),
                "bird6":new Bird(gameArea, 100, 460, 50, 50, "assets/media/imgs/objects/birds/red.png"),
                "bird7":new Bird(gameArea, 90, 470, 50, 50, "assets/media/imgs/objects/birds/red.png"),
                "bird8":new Bird(gameArea, 90, 480, 50, 50, "assets/media/imgs/objects/birds/red.png"),
            }
            let pigs_obj={
                "pig1":new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
                "pig2":new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
                "pig3":new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
                "pig4":new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
                "pig5":new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
                "pig6":new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
                "pig7":new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
                "pig8":new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
            }        
    
            let obstacles_obj={
                "obstcale1":new Obstacle(gameArea, 800, 200, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
                "obstcale2":new Obstacle(gameArea, 1200, 250, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
                "obstcale3":new Obstacle(gameArea, 600, 300, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
                "obstcale4":new Obstacle(gameArea, 500, 400, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
                "obstcale5":new Obstacle(gameArea, 600, 100, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
                "obstcale6":new Obstacle(gameArea, 850, 350, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
                "obstcale7":new Obstacle(gameArea, 600, 300, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
                "obstcale8":new Obstacle(gameArea, 600, 300, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
            }
            
            let bird_num=this.num_of_birds;
            let pig_num=this.num_of_pigs;
            this.push_game_components(birds_obj,this.num_of_birds,"bird");
            this.push_game_components(pigs_obj,this.num_of_pigs,"pig");
            this.push_game_components(obstacles_obj,this.num_of_pigs,"obstcale");
            
            let currentBird = 0
            birds[currentBird].activeBird = true
    
            
            
    
    
            this.drawBirds();
            this.drawEnemies();
    
    
            canvas.addEventListener("mousedown", function (event) {
                birds[currentBird].grabBird(event)
                //animate()
                an()
            })
            canvas.addEventListener("mousemove", function (event) {
                birds[currentBird].setBirdSpeed(event)
                //animate()
                an()
            })
            canvas.addEventListener("mouseup", function () {
                birds[currentBird].fire(canvas, wind_resistance, g, pigs, obstacles)
    
            })
    
    
            this.check_win(currentBird,canvas);
           
            let an=function animate() {
                requestAnimationFrame(an)
                gameArea.clearRect(0, 0, innerWidth, innerHeight)
                l1.drawBirds()
                l1.drawEnemies()
            
            }
            //this.animate(gameArea,innerWidth,innerHeight);
    
        }
    };

}

////////////////////////////////////////////////////////////////////////////

// creating a new level of the game 

let l1=new level(2,6);//two birds and six pigs

l1.play()
