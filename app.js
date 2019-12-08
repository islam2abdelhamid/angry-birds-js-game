let myLevel = new Level(currentLevel, birds_obj, pigs_obj, obstacles_obj)

document.getElementsByTagName("title")[0].innerText = "Angry Birds - Level " + currentLevel



canvas.width = window.innerWidth
canvas.height = window.innerHeight - 93
sounds.startSound.play()

tryAgainBtn.onclick = function () {
    location.replace("game.html?" + currentLevel)
}

nextLevelBtn.onclick = function () {
    if (currentLevel != 3)
        location.replace("game.html?" + ++currentLevel)
    else {
        location.replace("select_level.html")
    }
}


back.addEventListener('click', function () {
    location.replace("select_level.html")
});

updateGameArea()

canvas.addEventListener("mousedown", function (event) {
    myLevel.getActiveBird().grabBird(event)
})

canvas.addEventListener("mousemove", function (event) {
    myLevel.getActiveBird().setBirdSpeed(event)
})

canvas.addEventListener("mouseup", function () {
    myLevel.getActiveBird().fire(canvas, wind_resistance, g, myLevel.pigs, myLevel.obstacles)
})



function updateGameArea() {
    let clearIfEnded = setInterval(function () {
        gameArea.clearRect(0, 0, innerWidth, innerHeight)
        myLevel.drawLevelComponents()

        if (myLevel.isEnded()) {
            clearInterval(clearIfEnded)
            if (myLevel.checkIfWin()) {
                winWindow.style.display = "block"
                sounds.winSound.play()
            } else {
                tryAgainWindow.style.display = "block"
                sounds.failedSound.play()
            }
        }

    }, 13)
}