
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {


  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    switch (this.innerHTML) {
          case "w":
            musicFile = "tom-1";
            break;
          case "a":
            musicFile = "tom-2";
            break;
          case "s":
            musicFile = "tom-3";
            break;
          case "d":
            musicFile = "tom-4";
            break;
          case "j":
            musicFile = "snare";
            break;
          case "k":
            musicFile = "crash";
            break;
          case "l":
            musicFile = "kick-bass";
            break;
          default:

        }
        var audio = new Audio("sounds/" + musicFile + ".mp3");
        audio.play();



    });

  }
