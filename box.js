function Component(x,y,height,width,color){
    this.width=width;
    this.height=height;
    this.x=x;
    this.y=y;
    this.color=color;
    ctx=myGameArea.context;
    ctx.fillStyle=color;
    ctx.fillRect(this.x,this.y,this.width,this.height);
    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      console.log("jooo")
    }
    this.clear=function () {
        console.log(this.x,this.y)
        ctx.clearRect(this.x, this.y, this.width+20, this.height+30);
    }
}