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
        isGrabbed = false,
        ended = false

    this.createBird = function (parent, imgPath) {
        createdBird = document.createElement("div")
        createdBird.style.backgroundImage = "url(" + imgPath + ")"
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
        createdBird.style.left = mouseEvent.clientX - (createdBird.clientWidth / 1.5) + "px";
        createdBird.style.top = mouseEvent.clientY - (createdBird.clientHeight / 1.5) + "px";
    }

    this.checkBirdSpeedLimit = function (mouseEvent, minX, maxX, minY, maxY) {
        if (mouseEvent.clientX > minX && mouseEvent.clientX < maxX && mouseEvent.clientY > minY && mouseEvent.clientY < maxY)
            return true
        return false
    }

    this.setBirdSpeed = function (mouseEvent) {

        if (isGrabbed && this.checkBirdSpeedLimit(mouseEvent, 100, 300, 320, 550)) {
            createdBird.style.left = mouseEvent.clientX - (createdBird.clientWidth) / 1.5 + "px";
            createdBird.style.top = mouseEvent.clientY - (createdBird.clientHeight / 1.5) + "px";
            birdX = mouseEvent.clientX - (createdBird.clientWidth / 2);
            birdY = mouseEvent.clientY - (createdBird.clientHeight / 2);
        }
    }


    this.goThroughEnemies = function (arrOfPigs) {

        for (let i = 0; i < arrOfPigs.length; i++)
            this.checkBirdPigXY(arrOfPigs[i])

    }

    this.checkBirdPigXY = function (pig) {

        if (createdBird.offsetLeft + createdBird.clientWidth > pig.offsetLeft && createdBird.offsetLeft + createdBird.clientWidth < pig.offsetLeft + pig.clientWidth)
            if (createdBird.offsetTop + createdBird.clientHeight > pig.offsetTop && createdBird.offsetTop + createdBird.clientHeight < pig.offsetTop + pig.clientHeight * 2)
                pig.style.backgroundColor = "blue"

    }

    this.fireBird = function (body, windResistance, g, arrOfPigs) {
        isGrabbed = false
        isFired = true
        velX = (startX - birdX) / 10
        velY = (startY - birdY) / 10

        isFlying = velX >= 0;
        let self = this
        let checkLoop = setInterval(function () {

            if (!isGrabbed && isFired) {

                birdX += velX;

                if (birdX < 0)
                    birdX = 0

                if (birdX > body.clientWidth - createdBird.clientWidth)
                    birdX = body.clientWidth - createdBird.clientWidth

                birdY += velY

                if (birdY > body.clientHeight - createdBird.clientHeight) {
                    birdY = body.clientHeight - createdBird.clientHeight
                    velX -= .1 * (!isFlying ? -1 : 1)
                }

                velX -= windResistance * (!isFlying ? -1 : 1)

                if (isFlying) {

                    if (velX < 0) {

                        velX = 0;
                    }

                } else
                if (velX > 0)
                    velX = 0

                velY += g;
            }
            if (velX == 0) {
                ended = true
                createdBird.remove()
                clearInterval(checkLoop)

            }
            self.goThroughEnemies(arrOfPigs)
            createdBird.style.left = birdX + "px"
            createdBird.style.top = birdY + "px"
        }, 15);

    }



}