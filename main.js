let ground,bird, enemy, height=670, width=880, box,cage, hit=0;;

  function startGame() {
      myGameArea.start();
      ground=new Component(0,height-20,20,width,"red");
      box=new Component(350,300,20,80,"black");
      enemy=new Component(370,250,50,70,"pig.jpg","image");
      boxTwo=new Component(500,300,30,80,"black");
      enemyTwo=new Component(520,250,50,70,"pig.jpg","image");
      bird=new Bird(75,380,40,80,"red.png","image");
      cage=new Bird(80,380,150);
      slingshot=new Throw(75,380);
    } 
  function updateGameArea() {
    if (bird.crashWith(box)) {
        myGameArea.stop();
      }
    else if(bird.crashWith(enemy)){
      enemy.clear()
      hit=1;
      myGameArea.stop()
    }
    else {
      myGameArea.clear();
      box.update();
      ground.update();
      if(hit==0){
        enemy.update();
        enemyTwo.update();
      }
      enemyTwo.update()
      boxTwo.update()
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
        // bird.vel_x = -bird.vel_x*2
        // bird.vel_y = -bird.vel_y/2
      },
    }
    startGame()
    var elem = myGameArea.canvas,
    elemLeft = elem.offsetLeft,
    elemTop = elem.offsetTop,
    context = elem.getContext('2d');
    var canvas=document.getElementsByTagName("canvas")[0];
    canvas.addEventListener('click', function() { }, false);

    elem.addEventListener('click', function(event){
      bird.grabbed(event);
    }, false);

    elem.addEventListener('mousemove', function(event) {
      if (bird.bird_grabbed)
      bird.move(event,cage);
    }, false);

    elem.addEventListener('mouseup', function(event) {
      bird.released(event)
      var slingInterval=setInterval(function () {
        clear(slingInterval)      
        if (!bird.bird_grabbed && bird.flung) {
            bird.fired()  
        }
    }, 15);
    }, false);

    var clear = function (slingInterval) {
      if(bird.y==590){
        clearInterval(slingInterval);
      }
  };

 