
    let body = document.getElementsByTagName("body")[0],
    bird_grabbed = false,
    flung = false,
    right_fling = false,
    g = .15,
    wind_resistance = .0001,
    bird_x = bird.x;
    bird_y = bird.y;
    cage_y = cage.y - cage.height / 2;
    cage_x = cage.x - cage.width / 2;
    cat_x = bird_x,
    cat_y = bird_y,
    vel_x = 0,
    vel_y = 0
    var canvas=document.getElementsByTagName("canvas")[0];
    canvas.addEventListener('click', function() { }, false);
    var elem = document.getElementsByTagName('Canvas')[0],
    elemLeft = elem.offsetLeft,
    elemTop = elem.offsetTop,
    context = elem.getContext('2d'),
    elements = [bird];
    elem.addEventListener('click', function(event) {
        var x = event.pageX - elemLeft,
            y = event.pageY - elemTop;
        
        // Collision detection between clicked offset and element.
        elements.forEach(function(element) {
            console.log(bird_x)
            if (y > bird_y-element.radius && y < bird_y + element.radius 
                && x > bird_x-element.radius && x < bird_x + element.radius) {
                    bird_grabbed = true;
                    
                 //   cage.classList.remove("shake");
                 //   cage.style.display = "block";
                
                    bird.x = x - (bird.radius)
                    bird.y = y - (bird.radius)
                
                    
            }
        });
    
    }, false);
    
    elem.addEventListener('mousemove', function(event) {
        var x = event.pageX - elemLeft,
            y = event.pageY - elemTop;
        // Collision detection between clicked offset and element.
        elements.forEach(function(element) {
            if (bird_grabbed && x < cage.x+cage.radius && y <cage.y+cage.radius&&y>cage.y-80) {
                         bird.x = x - (bird.radius)
                         bird.y = y - (bird.radius) 
                         bird_x = bird.x
                         bird_y =bird.y
                         updateGameArea();
                    }            
        });
    
    }, false);

    elem.addEventListener('mouseup', function(event) {
        var x = event.pageX - elemLeft,
            y = event.pageY - elemTop;
        // Collision detection between clicked offset and element.
        elements.forEach(function(element) {
            if (bird_grabbed) {
                vel_x = (cat_x - parseInt(bird_x)) / 10;
                vel_y = (cat_y - parseInt(bird_y)) / 10;
                flung = true,
                right_fling = vel_x >= 0
               
            }
            bird_grabbed = false         
        });
    
    }, false);
    

// // getBoundingClientRect()
// bird.onmousedown = function (e) {
//     bird_grabbed = true;
//     console.log("hiiii")
//     cage.classList.remove("shake");
//     cage.style.display = "block";

//     bird.style.left = e.clientX - (bird.clientWidth / 2) + "px"
//     bird.style.top = e.clientY - (bird.clientHeight / 2) + "px"
// }

// body.onmousemove = function (e) {

//     if (bird_grabbed && e.clientX < 199 && e.clientY < 199) {

//         bird.style.left = e.clientX - (bird.clientWidth / 2) + "px"
//         bird.style.top = e.clientY - (bird.clientHeight / 2) + "px"
//         bird_x = parseInt(e.clientX - (bird.clientWidth / 2) + "px")
//         bird_y = parseInt(e.clientY - (bird.clientHeight / 2) + "px")

//     }

// }

// body.onmouseup = function (e) {

//     if (bird_grabbed) {


//         vel_x = (cat_x - parseInt(bird_x)) / 10;
//         vel_y = (cat_y - parseInt(bird_y)) / 10;
//         flung = true,
//             right_fling = vel_x >= 0

//     }
//     bird_grabbed = false

// }



setInterval(function () {

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
        console.log(bird)
        updateGameArea()
    }

    if (bird.x > cage_x && bird.x < cage_x + cage.raduis*2 && bird.y > cage.y && bird.y < cage.y+ cage.radius) {
        cage.style.backgroundColor = "tomato"
        vel_x = -vel_x*2
        vel_y = -vel_y/2
      
    //  // cage.classList.add("shake");
    //   setTimeout( function(){cage.style.display = "none";}, 800);
    }
    
    
}, 15);

