// Loading Bar In Home Page.

let introSound = new Audio('assets/media/sounds/intro.mp3')


function LoadingTranssion() {
    let loadingbar = document.getElementsByClassName("loading-bar")[0];
    let width = 1;
    LoadinInterval = setInterval(function () {
        if (width >= 100) {
            clearInterval(LoadinInterval);
        }
        loadingbar.style.width = width + "%";
        width += 1;
    }, 30);
}

setTimeout(function () {
    LoadingTranssion();
    setTimeout(function () {
        let loadingbar = document.getElementsByClassName("loading-bar")[0];
        loadingbar.style.display = "none";
    }, 4000);
}, 1000);

setTimeout(function () {
    let LoadingDiv = document.getElementById("loading");
    let layover = document.getElementById("layover");
    let int = document.getElementById("int");
    let controls = document.getElementById("controls");
    LoadingDiv.style.display = "none";
    layover.style.display = "none";
    int.style.display = "none";
    controls.style.display = "block";
    controls.classList.add("fadein");
    introSound.play()
    introSound.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
}, 5000);


// Loading Bar In Home Page.