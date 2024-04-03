function startAirplane(){
    document.getElementById("cleared").innerHTML = "Touched the airplane to keep it in the sky."; 
}

function stopAirplane(){
    document.getElementById("cleared").innerHTML = "Airplane still safely in the sky.";
}

function touchCancel(){
    document.getElementById("cleared").innerHTML = "Touch canceled";
}

document.addEventListener("DOMContentLoaded", function(){
const airplane = 
document.getElementById("airplane");
    airplane.addEventListener("touchstart", startAirplane);
    airplane.addEventListener("touchcancel", touchCancel);
    airplane.addEventListener("touchend", stopAirplane);

});
