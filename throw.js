function Throw(x,y) {
        this.x=x;
        this.y=y;  
        r = 10; // draw radius
        var c = document.getElementsByTagName("canvas")[0];
        var ctx = c.getContext("2d");
        this.draw = false;
        this.lineStart = true;
        this.lastX;
        this.lastY;
        // ctx.moveTo(75, 380);
        // ctx.lineTo(100, 450);
        // ctx.stroke();
    // this.update = function() {
    //     ctx.moveTo(75, 380);
    //     ctx.lineTo(this.x, this.y);
    //     ctx.stroke();
    // }
    // this.newPos=function (x,y) {
    //     this.x=x;
    //     this.y=y;
    // }
    this.yesDraw=function(){ 
        draw = true; 
        lineStart = true;
    }
    this.noDraw=function(){
         draw = false;
    }
    this.drawing=function(x,y) {
        ctx.lineWidth = 5 * 2;
       // ctx.lineCap = "round";
        ctx.fillStyle = "black";
        if(lineStart){
            this.lastX = x;
            this.lastY = y;
            lineStart = false;
          }   
      //  ctx.beginPath();
     //    ctx.fillRect(this.x, this.y, this.lastX-x,this.lastY-y);
     ctx.globalCompositeOperation = "source-over";

         context.beginPath();
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        lastX = x;
        lastY = y;
  
}
}