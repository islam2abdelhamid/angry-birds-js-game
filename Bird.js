function Bird(x,y,height,width,color){
    this.bird_grabbed = false;
    this.flung = false;
    this.right_fling = false;
    this.g = .15;
    this.wind_resistance = .0001;
    this.vel_x = 0;
    this.vel_y = 0;
    this.image = new Image();
    this.image.src= color
    this.width=width;
    this.height=height;
    this.x=x;
    this.y=y;   
    this.cat_x = this.x;
    this.cat_y = this.y;
    this.radius=height;
}
Bird.prototype.update=function(){
    ctx = myGameArea.context;
    ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height);   
}
Bird.prototype.newPos = function(){
    this.x =this.x
    this.y =this.y
}
Bird.prototype.grabbed=function(event){
    var x = event.pageX - elemLeft,
    y = event.pageY - elemTop;
    if (y > this.y-this.height-2 && y < this.y + this.height-2
        && x > this.x-this.width-2 && x < this.x + this.width-2) {
            this.bird_grabbed = true;              
            this.x = x - (this.width)/2
            this.y = y - (this.height)/2
            slingshot.yesDraw()
    }
}
Bird.prototype.move=function (event,cage) {
    var x = event.pageX - elemLeft,
      y = event.pageY - elemTop;
     if (this.bird_grabbed && x < cage.x+cage.radius && y <cage.y+cage.radius&&y>cage.y-80) {
                 this.x = x - (this.width)
                 this.y = y - (this.height)
                 slingshot.drawing(this.x,this.y)
                 updateGameArea();
              }                
}
Bird.prototype.released=function (){
    
    if (this.bird_grabbed) {
        this.vel_x = (this.cat_x - this.x)/10 ;
        this.vel_y = (this.cat_y - this.y) /10;
        this.flung = true,
        this.right_fling = this.vel_x >= 0
        slingshot.noDraw()
    }
    this.bird_grabbed = false          
}

Bird.prototype.fired=function(){
        this.x += this.vel_x;
        if (this.x < 0)
            this.x = 0;

        if (this.x> canvas.width - this.radius*2)
            this.x = canvas.width - this.radius*2;

        this.y += this.vel_y;

        if (this.y > canvas.height - this.radius*2) {
            this.y = canvas.height - this.radius*2;
            this.vel_x -= .1 * (!this.right_fling ? -1 : 1);
        }

        this.vel_x -= this.wind_resistance * (!this.right_fling ? -1 : 1);

        if (this.right_fling) {
            if (this.vel_x < 0) {
                this.vel_x = 0;
            }
        } 
        else {
            if (this.vel_x > 0) {
                this.vel_x = 0;
            }
        }       
        this.vel_y += this.g;
        updateGameArea()
    

}
Bird.prototype.crashWith = function(otherobj){
    var myleft = this.x-(this.radius);
    var myright = this.x + (this.radius);
    var mytop = this.y-(this.radius);
    var mybottom = this.y + (this.radius);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash = true;
    if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
        crash = false;
    }
    return crash;

}