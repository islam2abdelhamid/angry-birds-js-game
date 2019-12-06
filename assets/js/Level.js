let Level = function (level_num, birds, pigs, obstacles) {
    this.level_num = level_num;
    this.activeBird
    this.started = false
    switch (level_num) {
        case 1:
            this.num_of_pigs = 1;
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

    this.initLevelComponents(birds, pigs, obstacles)

}

Level.prototype.initLevelComponents = function (birds, pigs, obstacles) {

    for (let i = 0; i < this.num_of_birds; i++) {
        this.birds.push(birds[Object.keys(birds)[i]])
    }

    for (let i = 0; i < this.num_of_pigs; i++) {
        this.pigs.push(pigs[Object.keys(pigs)[i]])
        this.obstacles.push(obstacles[Object.keys(obstacles)[i]])
    }

    this.started = true
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
    for (let i = 0; i < this.pigs.length; i++)
        if (!this.pigs[i].dead)
            count_pigs++

    return count_pigs
}

Level.prototype.getActiveBird = function () {
    return this.activeBird
}

Level.prototype.isEnded = function () {
    if (this.started && (this.birds.length == 0 || !this.countPigs()))
        return true
    return false
}

Level.prototype.checkIfWin = function () {
    if (!this.birds.length && this.countPigs()) {
        return false
    } else
        return true
}

Level.prototype.restart = function (birds, pigs, obstacles) {
    this.birds = []
    this.pigs = []
    this.obstacles = []
    this.started = false
    this.initLevelComponents(birds, pigs, obstacles)

}

Level.prototype.tryAgain = function (birds, pigs, obstacles) {

    this.initLevelComponents(birds, pigs, obstacles)
    this.drawLevelComponents()
}