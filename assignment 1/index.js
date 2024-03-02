const input = require('readline-sync');

let one = input.question("1) Who was the first American woman in space?");
console.log("Your Answer:" + one);
console.log("Correct Answer: Sally Ride");

let two = input.question("2) True or False: 5 kilometer == 5000 meters?");
console.log("Your Answer:" + two);
console.log("Correct Answer:" + "true");

let three=input.question("3) (5=3) /2 * 10 = ?");
console.log("Your Answer:" + three);
console.log("Correct Answer: 40 ");

let four=input.question('4) Given the array [8, "Orbit", "Trajectory", 45], "What entry is at index 2?"');
console.log("Your Answer:" + four);
console.log("Correct Answer:  Trajectory");

let five = input.question("5) What is the minimum crew size for the ISS?");
console.log("Your Answer:" + five);
console.log("Correct Answer: 3");
