// document.querySelector('button').addEventListener("click",handleClick);

// function handleClick() {
//     alert("i got clicked");
// }

// detecting button press! ----------------------------------------------------------------
for(let i = 0; i < document.querySelectorAll(".drum").length; i++){
    // anonymus function
    document.querySelectorAll('.drum')[i].addEventListener("click", function() {
        //console.log(this.innerHTML);
        //this.style.color = "white";

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    });
}
// detecting keyboard press! ---------------------------------------------------------------
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

// keypressListner() proto -----------------------------------------------------------------
//var keysPressed = [];
// document.addEventListener("keypress", function(event) {
//     console.log(event);
//     keysPressed.push(event.key)
//     console.log(keysPressed)
// });


function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
                audio.play();       
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
                audio.play();       
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
                audio.play();       
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
                audio.play();       
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
                audio.play();       
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
                audio.play();       
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();       
            break;
        default:
            console.log("theese buttons are still not implemented...");
            break;
    }
}


function anotherAddEventListener(typeofEvent,callback){
    //detect event code
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2 //second       
    }
    if(eventThatHappened.eventType === typeofEvent){
        callback(eventThatHappened);
    }
}

anotherAddEventListener("keypress",function(event){
    console.log(event);
})

function buttonAnimation(currentKey){
    //var activeButton = document.querySelector("." + currentKey).classList.toggle('pressed');
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}