function Component(x,y,height,width,color,type){
    this.width=width;
    this.height=height;
    this.x=x;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
      }
    this.y=y;
    this.color=color;
    ctx=myGameArea.context;
    ctx.fillStyle=color;
    ctx.fillRect(this.x,this.y,this.width,this.height);
    
    this.update = function() {
        if (type == "image") {
            ctx.drawImage(this.image,
              this.x,
              this.y,
              this.width, this.height);
          } else {
        ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      
    }
}
    this.clear=function () {
        console.log(this.x,this.y)
        ctx.clearRect(this.x, this.y, this.width, this.height);
    }
}