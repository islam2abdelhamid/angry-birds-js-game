function Bird(x,y,radius) {
    this.radius=radius;
    this.x=x;
    this.y=y;
    ctx=myGameArea.context;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
     ctx.stroke();
    this.update = function() {
        
        ctx=myGameArea.context;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();

    }
    this.newPos = function() {
        this.x =this.x
        this.y =this.y
    }
    this.crashWith = function(otherobj) {
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
 

}