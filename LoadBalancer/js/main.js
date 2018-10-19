//function pageInit() {
//   var eventListenerHandler = function (evt) {
//        //  this.addEventListener("click", startButtonClick, false);
//    }
//}

//window.addEventListener('click', eventListenerHandler, false);

window.onload = function () {
    document.getElementById("mod-one-number-button").onclick = function (evt) {
        //create balls on screen, qty recieved from getCount()
        function createBalls(ballcount) {
            for (var i = 0; i < ballcount; i++) {
                var myimage = new Image(15, 15);
                myimage.src = 'images/orangeball.png';
                myimage.id = 'ball' + i;
                document.getElementById("ball-container").appendChild(myimage);
                onButtonPush();
            }
        }
        createBalls();
        //get input from "ballCount" field, pass value off to createBalls
        function getCount() {
            var ballCount = window.document.getElementById("ballCount").value;
            createBalls(ballCount);
        }
        getCount();

        // call getSeconds only on button push 
        function onButtonPush() {
            var buttonClick = window.document.getElementById("mod-one-seconds-button");
            console.log(buttonClick);
           // buttonClick.addEventListener("click", getSeconds());
            console.log("made it to line 40");
        }
        onButtonPush();

        function getSeconds() {
            var milleseconds = window.document.getElementById("secondsInput").value;
            var seconds = milleseconds * 1000;
            console.log(seconds);
            // createTimer(seconds);
            transModOne();
        }

        function transModOne() {
            var ballNumber = document.getElementById("ball1");
            console.log(ballNumber);
            ballNumber.classList.remove("mod-one-mill");
            ballNumber.classList.add("tube");
        }
        function createTimer(seconds) {
            //get timer length, apply this length to module 1 class/object/whatever
        }

    }
}

function sayHello() {
    var messageDialog = new Windows.UI.Popups.MessageDialog("Hello World!", "Alert");
    messageDialog.showAsync();
}




//function timedText() {
//    setTimeout(myTimeout1, 2000)
//    setTimeout(myTimeout2, 4000)
//    setTimeout(myTimeout3, 6000)
//}
//function myTimeout1() {
//    document.getElementById("demo").innerHTML = "2 seconds";
//}
//function myTimeout2() {
//    document.getElementById("demo").innerHTML = "4 seconds";
//}
//function myTimeout3() {
//    document.getElementById("demo").innerHTML = "6 seconds";
//}

// class Module1 {
//     constructor(seconds, width) {
//       this.seconds = seconds;
//       this.width = width;
//     }
//     // Getter
//     get area() {
//       return this.postSeconds();
//     }
//     // Method
//     postSeconds() {
//       return this.seconds * this.width;
//     }
//   }

//   const square = new Rectangle(10, 10);

//   console.log(square.area); // 100

var ball1 = null;


//function timerOne() {
    //on click (in html)   
    //get timer length from input
    //var seconds = window.document.getElementById("secondsInput").value;
    // *** TO DO ***
    // validate input -- see checkInp() below
    // function checkInp()
    // {
    //   var x=document.forms["myForm"]["age"].value;
    //   if (isNaN(x)) 
    //   {
    //     alert("Must input numbers");
    //     return false;
    //   }
    // }
    //  console.log(seconds);
    //change input to milleseconds
    //var seconds = seconds * 1000;
    //pass seconds value to next function
    // function setSeconds(seconds)
    //timer starts
    // setTimeout(myTimeout1, x);

//}
//timerOne();


// function setSeconds(seconds) {
//with input from timerOne, set timer to move ball
// }

//needs to ONLY be called when user clicks submit
