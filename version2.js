
var playBtn=document.getElementById('play');
playBtn.addEventListener('click',play);
function play() {
  console.log("play")
  
}

var helpBtn=document.getElementById('help');
helpBtn.addEventListener('click',help);
function help() {
  console.log("help")
  document.getElementById('help').innerHTML="<p>Help</p>use mouse tp scroll the bird and let it so that it can fly and kill the enemy"
  var paragraph=document.getElementById('help');
  paragraph.style.backgroundColor='black';
  paragraph.style.color='white';
  paragraph.style.height="150px";
  console.log(  document.getElementById('help').innerHTML)
}
