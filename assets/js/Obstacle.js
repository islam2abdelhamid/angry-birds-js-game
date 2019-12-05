//obstcale class 
var Obstacle = function (gameArea, x, y, height, width, src) {
    Component.call(this, gameArea, x, y, height, width, src)
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
}



Obstacle.prototype = Object.create(Component.prototype);
Obstacle.prototype.constructor = Pig;

