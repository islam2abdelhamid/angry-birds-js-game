let
    g = .15, //Gravity
    wind_resistance = .0001,
    tryAgainBtn = document.getElementById("tryAgain"),
    nextLevelBtn = document.getElementById("nextLevel"),
    tryAgainWindow = document.getElementsByClassName("try-again-window")[0],
    winWindow = document.getElementsByClassName("win-window")[0],
    currentLevel = parseInt(location.search.substring(1)) ? parseInt(location.search.substring(1)) : 1,
    canvas = document.getElementById("GameArea"),
    gameArea = canvas.getContext('2d'),
    back = document.getElementsByClassName("back")[0],
    birds_obj = {
        "bird1": new Bird(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/birds/red.png"),
        "bird2": new Bird(gameArea, 58, 485, 50, 50, "assets/media/imgs/objects/birds/red.png"),
        "bird3": new Bird(gameArea, 112, 485, 50, 50, "assets/media/imgs/objects/birds/red.png"),
        "bird4": new Bird(gameArea, 160, 485, 50, 55, "assets/media/imgs/objects/birds/yellow.png"),
        "bird5": new Bird(gameArea, 215, 485, 50, 65, "assets/media/imgs/objects/birds/stell.png"),

    },
    pigs_obj = {
        "pig1": new Pig(gameArea, 200, 300, 60, 60, "assets/media/imgs/objects/pigs/pig_female.png"),
        "pig2": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
        "pig3": new Pig(gameArea, 200, 300, 50, 50, "assets/media/imgs/objects/pigs/pig.png"),
        "pig4": new Pig(gameArea, 200, 300, 60, 60, "assets/media/imgs/objects/pigs/pig_female.png"),
        "pig5": new Pig(gameArea, 200, 300, 60, 60, "assets/media/imgs/objects/pigs/pig_king.png"),
    },
    obstacles_obj = {
        "obstcale1": new Obstacle(gameArea, 800, 200, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
        "obstcale2": new Obstacle(gameArea, 1200, 250, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
        "obstcale3": new Obstacle(gameArea, 600, 300, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
        "obstcale4": new Obstacle(gameArea, 500, 400, 50, 80, "assets/media/imgs/obstacles/brick_1.png"),
        "obstcale5": new Obstacle(gameArea, 600, 100, 50, 80, "assets/media/imgs/obstacles/brick_1.png")
    },
    sounds = {
        startSound: new Audio('assets/media/sounds/start.mp3'),
        failedSound: new Audio('assets/media/sounds/failed.mp3'),
        winSound: new Audio('assets/media/sounds/win.mp3'),
    }

document.getElementsByTagName("title")[0].innerText = "Angry Birds - Level " + currentLevel