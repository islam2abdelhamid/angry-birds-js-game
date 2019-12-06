
var playBtn=document.getElementById('play');
playBtn.addEventListener('click',play);
function play() {
  console.log("play")
  // mySound = new sound("Havana _ Live Love Party.mp3");
  // mySound.play();
}
// function sound(src) {
//     this.sound = document.createElement("audio");
//     this.sound.src = src;
//     this.sound.setAttribute("preload", "auto");
//     this.sound.setAttribute("controls", "none");
//     this.sound.style.display = "none";
//     document.body.appendChild(this.sound);
//     this.play = function(){
//         this.sound.play();
//     }
//     this.stop = function(){
//         this.sound.pause();
//     }
// }

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
