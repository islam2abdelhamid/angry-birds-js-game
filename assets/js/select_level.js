let level1_link=document.getElementById("link1");
let level2_link=document.getElementById("link2");
let level3_link=document.getElementById("link3");

function choose_level(){
    level1_link.onclick=function () {
        let levels=location.search.substring(1);
        
    }
    level2_link.onclick=function () {
        sessionStorage.setItem("level", 2);
    }
    level3_link.onclick=function () {
        sessionStorage.setItem("level", 3);
    }
}


//choose_level();