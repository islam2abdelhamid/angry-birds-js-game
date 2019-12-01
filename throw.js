function Throw(x,y) {
        this.x=x;
        this.y=y;    
        ctx=myGameArea.context;
        ctx.moveTo(75, 380);
        ctx.lineTo(100, 450);
        ctx.stroke();
    this.update = function() {
        ctx.moveTo(75, 380);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        console.log(this.x,this.y)
    }
    this.newPos=function (x,y) {
        this.x=x;
        this.y=y;
    }
}
  
   
  
  
  