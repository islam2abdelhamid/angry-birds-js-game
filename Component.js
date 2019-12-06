function Component(x,y,height,width,src,type){
    this.width=width;
    this.height=height;
    this.radius=height;
    this.x=x;
    this.y=y;
    this.color=src;
    this.type=type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = src;
    }
}

Component.prototype.draw=function(){
    ctx = myGameArea.context;
    if (this.type == "image") {
        ctx.drawImage(this.image,
          this.x,
          this.y,
          this.width, this.height);
      }
    else if(this.type=="circle"){

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    else {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
        }   
}
Component.prototype.clear=function(){
    ctx.clearRect(this.x, this.y, this.width, this.height);
}
