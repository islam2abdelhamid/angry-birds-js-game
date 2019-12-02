function Component(x,y,height,width,color,type){
    this.width=width;
    this.height=height;
    this.x=x;
    this.y=y;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.color=color;
    ctx=myGameArea.context;
    ctx.fillStyle=color;
    ctx.fillRect(this.x,this.y,this.width,this.height);

    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
              this.x,
              this.y,
              this.width, this.height);
          }
        else {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
    this.clear=function () {
        ctx.clearRect(this.x, this.y, this.width, this.height);
    }
}