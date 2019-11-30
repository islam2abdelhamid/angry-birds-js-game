function Bird() {
    let birdX,
        birdY,
        startX = 200,
        startY = 400,
        width = 50,
        height = 50,
        createdBird,
        velX = 0,
        velY = 0,
        isFlying = false,
        isFired = false,
        isGrabbed = false
    this.createBird = function (parent, imgPath) {
        createdBird = document.createElement("div")
        createdBird.style.backgroundImage = "url(" + imgPath+")"
        createdBird.style.position = "absolute"
        createdBird.style.backgroundSize = "contain"
        createdBird.style.top = startY + "px"
        createdBird.style.left = startX + "px"
        createdBird.style.width = width + "px"
        createdBird.style.height = height + "px"
        parent.appendChild(createdBird)


    }

    this.getBird = function () {
        return createdBird
    }


    this.grabBird = function (mouseEvent) {
        isGrabbed = true
    }


    this.setBirdSpeed = function (mouseEvent) {
        // && mouseEvent.clientX < 200 && e.clientY < 199
        if (isGrabbed) {
            createdBird.style.left = mouseEvent.clientX - (createdBird.clientWidth / 2) + "px";
            createdBird.style.top = mouseEvent.clientY - (createdBird.clientHeight / 2) + "px";
            birdX = mouseEvent.clientX - (createdBird.clientWidth / 2);
            birdY = mouseEvent.clientY - (createdBird.clientHeight / 2);
        }
    }

    this.fireBird = function (body, windResistance, g) {
        isGrabbed = false
        isFired = true
        velX = (startX - birdX) / 10
        velY = (startY - birdY) / 10

        isFlying = velX >= 0;

        setInterval(function () {
            console.log(velY);

            if (!isGrabbed && isFired) {

                birdX += velX;

                if (birdX < 0)
                    birdX = 0;

                if (birdX > body.clientWidth - createdBird.clientWidth)
                    birdX = body.clientWidth - createdBird.clientWidth;

                birdY += velY;

                if (birdY > body.clientHeight - createdBird.clientHeight) {
                    birdY = body.clientHeight - createdBird.clientHeight;
                    velX -= .1 * (!isFlying ? -1 : 1);
                }

                velX -= windResistance * (!isFlying ? -1 : 1);

                if (isFlying) {

                    if (velX < 0) {

                        velX = 0;
                    }

                } else {

                    if (velX > 0) {

                        velX = 0;
                    }
                }

                velY += g;
            }

            createdBird.style.left = birdX + "px";
            createdBird.style.top = birdY + "px";

        }, 15);

    }



}