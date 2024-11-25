
// 1 way to write a code

// document.querySelector("button").addEventListener("click", handleClick)

// function handleClick(){
//   alert("hello")
 
// }

// 2 way to write code and also you can click any btn in parent class it  will work

// document.querySelector(".set").addEventListener("click", function(){
//   alert("you got clicled");
// });

// 3 way 

var numberOfDrmButtons = document.querySelectorAll(".drum").length;

for (var i =0; i<numberOfDrmButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var buttonInnerHTML = this.innerHTML;

      switch (buttonInnerHTML) {
        case "w":
          var tom1 = new Audio("sounds/kick-bass.mp3");
              tom1.play();
          break;
        case "a":
          var tom1 = new Audio("sounds/snare.mp3");
              tom1.play();
          break;
        case "s":
          var tom1 = new Audio("sounds/tom-1.mp3");
              tom1.play();
          break;
        case "d":
          var tom1 = new Audio("sounds/tom-2.mp3");
              tom1.play();
          break;
        case "j":
          var tom1 = new Audio("sounds/tom-3.mp3");
              tom1.play();
          break;
        case "k":
          var tom1 = new Audio("sounds/tom-4.mp3");
              tom1.play();
          break;
        case "l":
          var tom1 = new Audio("sounds/crash.mp3");
              tom1.play();
          break;
      
        default:
          break;
      }
  })
}

