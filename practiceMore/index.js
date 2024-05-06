//Practice with array

let object = ["apple", "pear", "zebra", "box", "rutabage", "fox", "banana", "socks", "foot"];

object.push="cow"; //adds cow to the end of the array
object[3] ="button"; //changes the third idex to button. box is now button
object.pop();//Removes the last element
object.reverse();//changes the order of the array
object.sort();//alphebetical order
object.shift();// removes the first element
console.log(object);
console.log(object[5]);//onlu shows the 5th index of the array

// LunchCode text book practice. 3.4

console.log("Hello, JavaScript");
console.log(2001);
console.log("What", "do", "commas", "do?");
console.log("Does", "adding",       "space", "matter?");
console.log("launch" + "Code");
console.log("LaunchCode was founded in", 2013);

console.log(typeof "Hello, World!");
console.log(typeof 17);
console.log(typeof 3.14);
console.log(typeof"17");
console.log(typeof"3.2");
console.log("Bruce's beard");
//console.log('Bruce's beard');

console.log(42000);
//console.log(42,000);
console.log(42,17,56,34,11,4.35,32);
console.log(3.4, "hello", 45);
console.log(Number("2345"));
console.log(typeof Number("2345"));
console.log(Number (17));

//Creating Variables book 4.3

let programmingLanguage = "JavaScript"; //programingLanguage gets the value 'JavaScript' or  programmingLanguage is assigned 'JavaScript' 
console.log(programmingLanguage );

let message = "Hello World";
console.log("hello World!") //or
console.log(message);

//reassigning Variables 4.3.3
let day= "Thursday";
console.log(day);
day="Friday";
console.log(day);
day = 21;
console.log(day);


//Good
let x = 5;
const y= 3.14;
let z = y * x ** 2;
console.log(z);

//better
let radiusOfCircle = 5;
const pi = 3.14;
let areaOfCircle = pi * radiusOfCircle ** 2;
console.log(areaOfCircle);

//Operations

console.log(20 + 32);
//console.log(hour - 1); // hour is not defined

let hour = 60;
let minute = 60;
console.log(hour - 1);
console.log(minute/60);
console.log(hour * 60 + minute );
console.log(5 ** 2);
console.log((5+9) * (15 - 7));
console.log(2 + 3); //addition   
console.log(2 - 3); //subtraction
console.log(2 * 3); //multiplcation
console.log(2 ** 3); 
console.log(3 ** 2); //Exponentiation
console.log(6 / 2); //division
console.log(7 % 5) //modulus

//Modulus operators
console.log(12 % 4); 
console.log(13 % 7);
console.log(6 % 2 );
console.log(7 % 2);

let a =1;
a += 1;
console.log(a)



console.log(Boolean("true"));
console.log(Boolean("TRUE"));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean("LaunchCode"));
console.log(5===5);
console.log(5===6);
console.log(7=="7");

let ab = 7;
if (ab % 2 === 1) {
   console.log("Launch");
} else if (ab > 5) {
   console.log("Code");
} else {
   console.log("LaunchCode");
}
let num = 7;

if (num % 2 === 0) {
    if (num % 2 === 1) {
        console.log("odd");
    }
}

