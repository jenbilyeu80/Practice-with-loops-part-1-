let nameOfTheSpaceShuttle= "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToTheMoonKm= 384400;
let MilesPerkilometer = 0.621;

console.log(typeof nameOfTheSpaceShuttle);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToTheMoonKm);
console.log(typeof MilesPerkilometer);

let milesToMars = distanceToMarsKm * MilesPerkilometer;
console.log(milesToMars)
let hours = milesToMars / shuttleSpeedMph;
console.log(hours)

let daysToMars = hours / 24;
console.log(daysToMars);

console.log(nameOfTheSpaceShuttle + " " + "will take" + " " + daysToMars  +  " " + "days to reachMars." );

/*let milesToMoon = kilometersToMoon * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");*/