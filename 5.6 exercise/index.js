let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let fuelLevel= 18000;
let engineTemperature = 2500;
let commandOverride = true;

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off"); //this is the answer 

}
// 3) Write conditional expressions to satisfy the following safety rules:

// a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".

if(crewStatus){
    console.log("Crew is ready")
}
    else {
        console.log("Crew Not Ready");
    }

// b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"

if(computerStatusCode === 200){
    console.log("Please stand by. Computer is rebooting")
}
else if(computerStatusCode ===400){
    console.log("Success! Computer online.")
}
else{
    (console.log("ALERT: Computer offline!"))
}

// c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Escape velocity reached!"  Else print "Stable speed".

if (shuttleSpeed > 17500){
    console.log("ALERT: Escape velocity reached!" )
}
else if(shuttleSpeed < 8000){
        console.log("ALERT: Escape velocity reached!")
}else{
    console.log("Stable speed");
}
1
2
3
4
5
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}
//yes

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
 } else {
    console.log("all systems go");
 }
 //my prediction was no. The answer is yes
 if (fuelLevel <= 5000 ||  engineTemperature > 2500) {
   console.log("Check fuel level. Engines running hot.")
 }
 else if(fuelLevel >  10000 && engineTemperature <= 2500){
   console.log("Fuel level above 50%.  Engines good.")
 }
 else if(fuelLevel  > 5000 && engineTemperature <= 2500){
   console.log("Fuel level above 25%. Engines good.")
 }
 else if(fuelLevel < 1000 ||  engineTemperature > 3500 || engineIndicatorLight ==="red blinking"){
   console.log("ENGINE FAILURE IMMINENT!")
 }
 else if(fuelLevel > 20000 && engineTemperature <= 2500){
    console.log("Full tank. Engines good.")
 }
 else if(fuelLevel >  10000 && engineTemperature <= 2500){
    console.log("Fuel level above 50%.  Engines good.")
 }
 else if(fuelLevel  > 5000 && engineTemperature <= 2500){
    console.log("Fuel level above 25%. Engines good.")
 }
 else if (fuelLevel <= 5000 ||  engineTemperature > 2500) {
    console.log("Check fuel level. Engines running hot.")
 }
 else if(fuelLevel < 1000 ||  engineTemperature > 3500 || engineIndicatorLight ==="red blinking"){
    console.log("ENGINE FAILURE IMMINENT!")
 }else{
    console.log("Fuel and engine status pending...")
 }
if(fuelLevel > 20000 && !engineIndicatorLight|| commandOverride ===true){
console.log("Cleared to Launch");
}
else{
   console.log("Launch scrubbed!");
}
