
var playBtn=document.getElementById('play');
playBtn.addEventListener('click',play);
function play() {
  console.log("play")

}
var authorBtn=document.getElementById('author');
authorBtn.addEventListener('click',author);
var authorsName=["basma","islam",'mahoumd','mohamed','adham'];
function author() {
  // console.log("author")
  document.getElementById('author').innerHTML=authorsName;
  var paragraph=document.getElementById('author');
  paragraph.style.backgroundColor='white';
  paragraph.style.color='black';

//   var name=document.getElementById('authorsName');
//   if(!authorsName.length) {
// 		name.innerHTML = '';
//     return false;
// 	}
//
// 	// the completed error message string
// 	var messageString = "";
//
// 	// Loop through each error to display it
// 	for(var i=0; i<authorsName.length; i++) {
// 		messageString += '<li class="list1">' + authorsName[i] + '</li>\n';
// 	}
//   if (messageString)
//   {
//       document.getElementById("authorsName").style.display = '';
//
//   }
//   else
//   {
//       document.getElementById("authorsName").style.display = 'none';
//   }
// // 	name.innerHTML = messageString;
// // var authornames=document.getElementsByClassName('list1');
// // for (var i = 0; i < authorsName.length; i++) {
// // var name=authornames[i].innerHTML
// // console.log(name);
// //
// // }
}
var helpBtn=document.getElementById('help');
helpBtn.addEventListener('click',help);
function help() {
  console.log("help")

  document.getElementById('help').innerHTML="use mouse tp scroll the bird and let it so that it can fly"
  var paragraph=document.getElementById('help');
  paragraph.style.backgroundColor='white';
  paragraph.style.color='black';

  console.log(  document.getElementById('help').innerHTML)


}
var exitBtn=document.getElementById('exit');
exitBtn.addEventListener('click',exit);
function exit() {
  console.log("exit")

}
