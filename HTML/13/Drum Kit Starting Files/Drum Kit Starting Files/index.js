// document.querySelector("button").addEventListener('click',function(){alert('you have got clicked')});

var numberOfDrums = document.querySelectorAll(".drum").length;
// var audio = new Audio("sounds/crash.mp3");

for (var i = 0; i < numberOfDrums; i++) {

  document.querySelectorAll("button")[i].addEventListener('click', function() {
 var buttonInnerHTML= this.innerHTML;

    makeSound(buttonInnerHTML);
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}
