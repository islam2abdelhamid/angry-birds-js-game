function Pig(gameArea, x, y, height, width, src) {
	Component.call(this, gameArea, x, y, height, width, src)
	this.dead = false
	this.newX = 0
	this.newY = 0
}

Pig.prototype = Object.create(Component.prototype);
Pig.prototype.constructor = Pig;


Pig.prototype.die = function () {
	this.image.src = "assets/media/imgs/objects/pigs/pig_dead.png"
	this.newY -= this.height
	let self = this
	this.dead = true
	setTimeout(function () {
		setInterval(function () {
			self.newY += self.height
		}, 50)
	}, 500)


}