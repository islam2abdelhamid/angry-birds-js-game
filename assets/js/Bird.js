function Bird(gameArea, x, y, height, width, src) {
    Component.call(this, gameArea, x, y, height, width, src)
    this.velX = 0
    this.velY = 0
    this.isFlying = false
    this.isFired = false
    this.isGrabbed = false
    this.ended = false
    this.defX = x
    this.defY = y
    this.activeBird = false
    this.hunt = false
}

Bird.prototype = Object.create(Component.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.grabBird = function (mouseEvent) {
    if (this.isIntersect(mouseEvent) && !this.isFired && this.activeBird) {
        this.isGrabbed = true
        this.x = mouseEvent.clientX - (this.width / 1.5)
        this.y = mouseEvent.clientY - (this.height / 1.5)
    }
}

Bird.prototype.checkBirdSpeedLimit = function (mouseEvent, minX, maxX, minY, maxY) {
    if (mouseEvent.clientX > minX && mouseEvent.clientX < maxX && mouseEvent.clientY > minY && mouseEvent.clientY < maxY)
        return true
    return false
}

Bird.prototype.setBirdSpeed = function (mouseEvent) {
    if (this.isGrabbed && this.checkBirdSpeedLimit(mouseEvent, 100, 300, 320, 500)) {
        this.x = mouseEvent.clientX - (this.width) / 1.5
        this.y = mouseEvent.clientY - (this.height / 1.5)
    }
}

Bird.prototype.isIntersect = function (mouseEvent) {
    return Math.sqrt((mouseEvent.x - this.x) ** 2 + (mouseEvent.y - this.y) ** 2) < this.width;
}

Bird.prototype.fire = function (canvas, windResistance, g, pigs, obstacles) {

    if (this.isGrabbed) {
        this.isGrabbed = false
        this.isFired = true

        if (this.isFired && !this.isGrabbed) {
            this.velX = (this.defX - this.x) / 10
            this.velY = (this.defY - this.y) / 10
            this.isFlying = this.velX >= 0
            setInterval(() => {
                this.x += this.velX;
                if (this.x < 0)
                    this.x = 0

                if (this.x > canvas.width - this.width)
                    this.x = canvas.width - this.width
                this.y += this.velY

                if (this.y > canvas.height - this.height) {
                    this.y = canvas.height - this.height
                    this.velX -= .1 * (!this.isFlying ? -1 : 1)
                }

                this.velX -= windResistance * (!this.isFlying ? -1 : 1)

                if (this.isFlying) {
                    if (this.velX < 0)
                        this.velX = 0
                } else
                if (this.velX > 0)
                    this.velX = 0

                this.velY += g

                this.goThroughEnemies(pigs, obstacles)
            }, 12)
        }
    }

}

Bird.prototype.goThroughEnemies = function (pigs, obstacles) {
    for (let i = 0; i < obstacles.length; i++) {
        if (this.checkIfTouched(pigs[i])) {
            if (pigs[i].dead == false) {
                pigs[i].die()
            }

        } else if (this.checkIfTouched(obstacles[i]))
            this.velX = 0

    }
}

Bird.prototype.checkIfTouched = function (enemy) {
    return Math.sqrt((enemy.x - this.x) ** 2 + (enemy.y - this.y) ** 2) < this.width
}

Bird.prototype.checkIfEnded = function (canvas) {

    if (this.isFired && this.velX == 0 && this.y >= canvas.height - this.height)
        return true
    return false
}