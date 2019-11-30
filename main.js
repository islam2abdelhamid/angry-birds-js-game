let ground;
let height=470;
let width=680;
let box;
var bird;
let enemy;
let cage;

function startGame() {
    myGameArea.start();
    ground=new Component(0,height-20,20,width,"red");
    box=new Component(350,150,20,80,"black");
    enemy=new Component(370,100,50,20,"red")
    bird=new Bird(75,350,30)
    cage=new Bird(80,350,120)
  }
  function updateGameArea(x,y,r) {
    myGameArea.clear(x,y);
    bird.newPos(x,y,r);
    bird.update(x,y,r);
}
 
  
  var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 680;
      this.canvas.height = 470;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  }

  
  startGame()