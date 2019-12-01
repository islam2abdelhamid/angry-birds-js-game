    let bird_grabbed = false,
    flung = false,
    right_fling = false,
    g = .15,
    wind_resistance = .0001,
    cage_y = cage.y - cage.height / 2;
    cage_x = cage.x - cage.radius / 2;
    cat_x = bird.x,
    cat_y = bird.y,
    vel_x = 0,
    vel_y = 0

    var canvas=document.getElementsByTagName("canvas")[0];
    canvas.addEventListener('click', function() { }, false);
    var elem = document.getElementsByTagName('Canvas')[0],
    elemLeft = elem.offsetLeft,
    elemTop = elem.offsetTop,
    context = elem.getContext('2d');

    elem.addEventListener('click', function(event) {
        var x = event.pageX - elemLeft,
            y = event.pageY - elemTop;
            if (y > bird.y-bird.height-2 && y < bird.y + bird.height-2
                && x > bird.x-bird.width-2 && x < bird.x + bird.width-2) {
                    bird_grabbed = true;              
                    bird.x = x - (bird.width)/2
                    bird.y = y - (bird.height)/2
            }
        
    }, false);

    elem.addEventListener('mousemove', function(event) {
        var x = event.pageX - elemLeft,
            y = event.pageY - elemTop;
            if (bird_grabbed && x < cage.x+cage.radius && y <cage.y+cage.radius&&y>cage.y-80) {
                         bird.x = x - (bird.radius)
                         bird.y = y - (bird.radius)
                         slingshot.newPos(bird.x,bird.y)
                         slingshot.update()
                         updateGameArea();
                    }                
    }, false);
    elem.addEventListener('mouseup', function(event) {
      
            if (bird_grabbed) {
                vel_x = (cat_x - bird.x) / 10;
                vel_y = (cat_y - bird.y) / 10;
                flung = true,
                right_fling = vel_x >= 0
               
            }
            bird_grabbed = false             
    }, false);
    
slingInterval=setInterval(function () {

    if (!bird_grabbed && flung) {
     
        bird.x += vel_x;
     
        if (bird.x < 0)
            bird.x = 0;

        if (bird.x> canvas.width - bird.radius*2)
            bird.x = canvas.width - bird.radius*2;

        bird.y += vel_y;

        if (bird.y > canvas.height - bird.radius*2) {
            bird.y = canvas.height - bird.radius*2;
            vel_x -= .1 * (!right_fling ? -1 : 1);
        }

        vel_x -= wind_resistance * (!right_fling ? -1 : 1);

        if (right_fling) {

            if (vel_x < 0) {

                vel_x = 0;
            }

        } else {

            if (vel_x > 0) {

                vel_x = 0;
            }
        }
        vel_y += g;
        updateGameArea()
    }

    if (bird.x > enemy.x && bird.x < enemy.x+ cage.raduis*2 && bird.y > cage.y && bird.y < cage.y+ cage.radius) {
        vel_x = -vel_x*2
        vel_y = -vel_y/2
    }
    
    
}, 15);
