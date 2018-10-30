//function pageInit() {
//   var eventListenerHandler = function (evt) {
//        //  this.addEventListener("click", startButtonClick, false);
//    }
//}

//window.addEventListener('click', eventListenerHandler, false);

var ballArray = [];

// document.getElementById("mod-one-number-button").onclick = function (evt) {
window.onload = function () {
    //var countButton = document.getElementById("mod-one-number-button");
    //countButton.addEventListener('click', createBalls, false);

//    window.addEventListener('scroll', onScrollHandler, false);

    document.getElementById("mod-one-number-button").onclick = function (evt) {
        //create balls on screen, qty recieved from getCount()
        function createBalls(ballcount) {
            for (var i = 0; i < ballcount; i++) {
                var myimage = new Image(15, 15);
                myimage.src = 'images/orangeball.png';
                myimage.id = 'ball' + i;
                myimage.className = 'resting ballz';
                myimage.style.marginLeft = ((Math.random() * 2) * i) + "px";
                myimage.style.marginTop = ((Math.random() * 2) * i) + "px";
                //also push to ballArray?
                ballArray.push(myimage.id);
                document.getElementById("ball-container").appendChild(myimage);
                onButtonPush();
            }
        }
        //get input from "ballCount" field, pass value off to createBalls
        function getCount() {
            var ballCount = window.document.getElementById("ballCount").value;
      
            createBalls(ballCount);
        }
        getCount();

        // call getSeconds only on button push 
        function onButtonPush() {
            var buttonClick = window.document.getElementById("mod-one-seconds-button");
            buttonClick.addEventListener("click", getSeconds(), false);
            console.log("made it to line 40");
        }

        function getSeconds() {
            var milleseconds = window.document.getElementById("secondsInput").value;
            var seconds = milleseconds * 1000;
            console.log(seconds);
            // createTimer(seconds);
            
        }
        //start animations once start button is pressed
        function startAnimation() {
            console.log(this);
            var startButtonClick = window.document.getElementById("start");
            startButtonClick.addEventListener("click", handleStart());
            console.log("made it to line 55");
        }
        startAnimation();

        function handleStart() {
            console.log("made it into handleStart");
        }
        //***************************currently not doing anything******************************
        //function transModOne() {
        //    //get qty of balls, loop through each to give class of tube-animation 
        //    for (var i; i < ballArray.length; i++) {
        //        var ballNumber = document.getElementById("ball" + i);
        //        ballNumber.classList.remove("mod-one-mill");
        //        ballNumber.classList.add("tube-animation");
        //    }
        //}

        function transStart(seconds) {
            console.log("made it to line 59");

                for (var i = 0; i < ballArray.length; i++) {
                    var ballNumber = document.getElementById("ball" + i);
                    if (ballNumber) {
                        ballNumber.classList.remove("resting");
                        ballNumber.classList.add("mod-one-mill");
                        console.log(ballNumber);
                        modTimer(seconds);
                        console.log("Made it to line 70");
                    }
                
            }
        }

        function modTimer(seconds) {
            for (var i = 0; i < ballArray.length; i++) {
                //setTimeout(move2, 20);
                console.log("made it to line 76!");
            }
        }

 //       function move2() {
 ////         var moveTimer = window.setTimeout()
 //           for (var i = 0; i < ballArray.length; i++) {
 //               //if next module is accepting?
 //               var ballNumber = document.getElementById("ball" + i);
 //               if (ballNumber) {
 //                   ballNumber.classList.remove("mod-one-mill");
 //                   ballNumber.classList.add("tube-animation");
 //               }
 //           }
 //       }

        function thisModule() {
            this.location = location;
            this.timer = timer;
            this.isAccepting = false;
        }
        // when they should move to next section change this attribute - thisModule.isAccepting = true;


        function createTimer(seconds) {
            //get timer length, apply this length to module 1 class/object/whatever
        }

    }
}




