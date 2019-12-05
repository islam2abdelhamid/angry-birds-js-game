function Component(gameArea, x, y, height, width, src) {
    this.gameArea = gameArea
    this.width = width
    this.height = height
    this.radius = height
    this.x = x
    this.y = y
    this.src = src
    this.image = new Image()
    this.image.src = this.src
}

Component.prototype.draw = function () {
    this.gameArea.drawImage(this.image, this.x, this.y, this.width, this.height);
}

Component.prototype.clear = function () {

    this.gameArea.clearRect(this.x, this.y, this.width, this.height);
}