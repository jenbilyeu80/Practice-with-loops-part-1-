let nameOfTheSpaceShuttle = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarskm =  225000000;
let milesPerKilometer = 0.621;
let milesToMars= distanceToMarskm * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;
let distanceToTheMoonKm = 384400;
let milesToMoon = distanceToTheMoonKm * milesPerKilometer;
let daysToMoon = milesToMoon / 24;



console.log(nameOfTheSpaceShuttle + " will take " + daysToMoon + " days to reach the Moon.");


console.log(typeof nameOfTheSpaceShuttle);
console.log(typeof Number("175000"));
console.log(typeof Number("225000000"));
console.log(typeof Number("0.621"));


/*Using variables from above, print to the screen a sentence that says "_____ will take ___ days to reach Mars." Fill in the blanks with the shuttle name and the calculated time.

Click "Run" (in repl.it) and verify that your code works before moving on. */


console.log(nameOfTheSpaceShuttle, "will take", milesToMars, "days to reach days to Mars.");

//Repeat the calculations, but this time determine the number of days it would take to travel to the Moon and 
//print to the screen a sentence that says "_____ will take ___ days to reach the Moon.".//
console.log(nameOfTheSpaceShuttle, "will take", daysToMoon, "days to reach the Moon");