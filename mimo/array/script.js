/* Code an array that contains the names of places to visit in this order: "New York", "Tokyo", "Hawaii".  
Assign this array to the places variable.  Then, without causing any change to the original array, access the last entry in the array and
assign this array to the places variable.  Then , without causing any change to the original array, access the last entry in the 
array and assign this syntax to the retirment variable.*/

/*const places=["New York", "Tokyo", "Hawaii"];
const retirment=places[2];
console.log("You should visit" + retirment);*/
//************************************************************************************************************************************** */

/* Create an array that holds a collection of siblings.
1.  Code an array that contains the names of siblings in order: "Jon", "Jess", "Jen", "Jarod" and assign it to the siblings variable.
2.  Use the push()method to add a new child "Jacob" and assign this syntax to the add variable.
3. Access the middle child and save this syntax in the middleChild variable.*/

const siblings=["Jon", "Jess", "Jen", "Jarod"];
const add=siblings.push("Jacob");
const middleChild=siblings[2];
console.log(`The middle child is ${middleChild}.`);

/****************************************************************************************************************************************** */

const todos = ["study", "chores", "meditate"];
remove = todos.pop();
const leftToDo = todos.length;
console.log(`You have  ${leftToDo} items left to do.`);

//******************************************************************************************************************************************************* */
//Practice Functions
function timesTen(number){
    const result= number * 10;
    return result;
}

function greaterThanTen(number){
    const isGreater=number > 10;
    return isGreater;
}

function userAge(number){
    const age = "User age: " + number;
    return age;
}

console.log(userAge(22)); 

function userAge(number){
    const age= "User age: " + number;
    return age;
}
const result =userAge(29);
console.log(result);

function giveMeTen(){
    return 10;

}
console.log(giveMeTen());

function addGreeting(user){
    const greeting = "Greeting " + user;
    return greeting;
}
const result1= addGreeting("Saoires");
console.log(result1);

function lessThanFive(number){
    const lessThan = number <5;
    return lessThan;
}
const result2 = lessThanFive(10);
console.log(result2);

function addTen(number){
    const addedTen = 10 + number;
    return addedTen;
}
console.log(addTen(20));

function signUp(user){
    const status = user + " Signed up";
    return status
}
const result3=signUp("Desmond");
console.log(result3);

function reject(user){
    const choice = " No Emails:"  + user;
return choice;
}
const result4 = reject("Ann");
console.log(result4);

/* Code a function that returns true if the number parameter is less than or equal to 0. Otherwise, return false.
Examples:
lessThanOrEqualToZero(7), returns false.
lessThanOrEqualTOZero(-5), returns true.*/

function lessThanOrEqualToZero(number){
    const lessT = number <= 0;
    return lessT; 
}
const result9=lessThanOrEqualToZero(7);
console.log(result9);

function lessThanOrEqualTOZero(number){
    return number <= 0;

}

/* Code a function that returns the result of converting the parameters hours and minutes to seconds.
Examples: 
toSeconds (2,5) returns 7500.
toSeconds (1,0) returns 3600.*/

function toSeconds (hours, minutes){
    return (hours * 60 + minutes) * 60;
}
/* Code a function that returns the first value from its array parameter.
Examples: 
firstValue ([9,7,11]) returns 9.
firstValue ([2,22,7]) returns 2.*/

function firstValue(array){
    return array[0];
}


