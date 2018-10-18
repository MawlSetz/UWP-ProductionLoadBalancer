
// var seconds = 0;
// var el = document.getElementById('seconds-counter');

// function incrementSeconds() {
//     seconds += 1;
//     el.innerText = "You have been here for " + seconds + " seconds.";
// }

// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//     var d = new Date();
//     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }


window.onload = function () {
    document.getElementById("mod-one-number-button").onclick = function (evt) {
        //create balls on screen, qty recieved from getCount()
        function createBalls(ballcount) {
            console.log("line97 " + ballcount);
            for (var i = 0; i < ballcount; i++) {
                var myimage = new Image(15, 15);
                myimage.src = 'images/orangeball.png';
                myimage.id = 'ball' + i;
                document.getElementById("ball-container").appendChild(myimage);
            }
        }
        createBalls();
        //get input from "ballCount" field, pass value off to createBalls
        function getCount() {
            var ballCount = window.document.getElementById("ballCount").value;
            createBalls(ballCount);
        }
        getCount();

        function getSeconds() {
            var milleseconds = window.document.getElementById("secondsInput").value;
            var seconds = milleseconds * 1000;
            createTimer(seconds);
        }
        getSeconds();

        function createTimer(seconds) {
            //get timer length, apply this length to module 1 class/object/whatever
        }
    }
}

function sayHello() {
    var messageDialog = new Windows.UI.Popups.MessageDialog("Hello World!", "Alert");
    messageDialog.showAsync();
}

//document.getElementById("seconds-button").onclick = function (evt) {
//    function createTimer(seconds) {
//        var seconds = secondsInput * 1000;
//        //create timer
//    }
//    function getSeconds() {
//        var secondsInput = window.document.getElementById("secondsInput").value;
//        var seconds = secondsInput * 1000;
//        createTimer(seconds);
//    }
//    getSeconds();
//}


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
