function Pig(x, y, pigImg){
	this.X = x;
	this.Y = y;
	
	this.createPig = function(Pig){
		PigElem = document.createElement(div);
		PigElem.appendChild(pigImg);
	}
	
	this.createPigAbove(Obstacle){
		PigElem.style.bottom = Obstacle.style.top;
	}
}