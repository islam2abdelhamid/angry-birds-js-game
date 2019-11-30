let ground;
let height=670;
let width=880;
let box;
var bird;
let enemy;
let cage;
let hit=0;
function startGame() {
  myGameArea.start();
    ground=new Component(0,height-20,20,width,"red");
    box=new Component(350,300,20,80,"black");
    enemy=new Component(370,220,80,20,"red")
    bird=new Bird(75,380,30)
    cage=new Bird(80,380,120)
  
  }
  function updateGameArea() {
    if (bird.crashWith(box)) {
      myGameArea.stop();
  }else if(bird.crashWith(enemy)){
    enemy.color="black"
    //enemy.update()
    enemy.clear()
    hit=1;
    myGameArea.stop()
  }
   else {
    myGameArea.clear();
    box.update();
    ground.update();
    if(hit==0)
    enemy.update();
    bird.newPos();    
    bird.update();
  }
   
}
 
  
  var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 880;
      this.canvas.height = 670;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea, 20);

      
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
   stop : function() {
    clearInterval(this.interval);
    vel_x = -vel_x*2
    vel_y = -vel_y/2
}
  
  }

  
  startGame()