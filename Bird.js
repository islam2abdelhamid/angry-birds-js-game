function Bird(x,y,radius) {
    this.radius=radius;
    this.x=x;
    this.y=y;
    ctx=myGameArea.context;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
    this.update = function(x,y) {
        
        //ctx.save();
        //ctx.translate(this.x, this.y);
        ctx.clearRect(x, y, radius, radius);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);       
        ctx.restore();    
        ctx.stroke ()

    }
    this.newPos = function(x,y) {
        this.x =x
        this.y =y
    } 

}