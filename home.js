// Loading Bar In Home Page.

function LoadingTranssion(){
    let loadingbar = document.getElementsByClassName("loading-bar")[0];
    let width = 1;
    LoadinInterval = setInterval( function(){
        if(width >= 100){
            clearInterval(LoadinInterval);
        }
        loadingbar.style.width = width + "%";
        width += 1;
    }, 30);
}

setTimeout( function(){
    LoadingTranssion();
    setTimeout(function(){
        let loadingbar = document.getElementsByClassName("loading-bar")[0];
        loadingbar.style.display = "none";
    }, 4000);
}, 1000 );

setTimeout(function(){
    let controls = document.getElementById("controls");
    controls.style.display = "block";
    controls.classList.add("fadein");
}, 5000);


// Loading Bar In Home Page.