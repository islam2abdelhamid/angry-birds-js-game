function Component(x,y,height,width,color){
    this.width=width;
    this.height=height;
    this.x=x;
    this.y=y;
    ctx=myGameArea.context;
    ctx.fillStyle=color;
    ctx.fillRect(this.x,this.y,this.width,this.height);
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}