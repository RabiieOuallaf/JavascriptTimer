// Getting started 

let InputS = document.getElementById("seconds"),

    InputM = document.getElementById("minutes"),

    InputH = document.getElementById("hours"),

    StartBtn = document.getElementById("start"),

    ResumeBtn = document.getElementById("resume"),

    PauseBtn = document.getElementById("pause"),

    RestBtn = document.getElementById("rest");

    Counter = 0;

var Interval = null;
// Handle unwanted cases 
// Seconds 
InputS.addEventListener("keyup" , () => {
    if(InputS.value > 60 || InputS.value < 0 || InputS.length > 3){
        InputS.value = "";
    }
});

// Minutes

InputM.addEventListener("keyup" , () => {
    if(InputM.value > 60 || InputS.value < 0 || InputS.length > 3){
        InputM.value = "";
    }
});

// Hours

InputH.addEventListener("keyup" , () => {
    if(InputH.value > 99 || InputS.value < 0 || InputS.length > 3){
        InputH.value = "";
    }
});


// StopWach Timmer set 

const StopWatch = () => {
    if(InputS.value == 0){

        InputS.value = 60;
        InputM.value--;


    }else {

        InputS.value--;


    }

    if(InputM.value < 0){
        InputM.value = 60;
        InputH.value--;
    }

    if(InputH.value < 0){
        InputH.value = 99;
        InputH.value--;
    }

    if(InputS.value == 0 && InputM.value == 0 && InputH.value == 0 ){
        clearInterval(Interval);
        InputS.value = "00";
        InputM.value = "00";
        InputH.value = "00";
    }
}

StartBtn.addEventListener("click" , () => {
    if(InputH.value == 0 && InputM.value == 0 && InputS.value == 0){
        StartBtn.style.visibility = "visible";
        alert("You should enter a value");

    }else{
        Interval = setInterval(StopWatch,100);

    }
});

PauseBtn.addEventListener("click" , () => {

    if(InputH.value == 0 && InputM.value == 0 && InputS.value == 0){
        alert("You can't stop an empty timer btw :)");
    }else{
        clearInterval(Interval);

    }

});

