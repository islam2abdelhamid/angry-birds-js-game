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
 

}