/* Call the appropriate built-in JavaScript function on the visitors array to create a new array of only the names that start with the letter "C", the inline function is provided for you*/

let visitors = ["Christina", 'Andrew', 'Chris', 'Delia'];
let C = visitors.filter (function(element) {
    return element [0] =="C" ;
});
console.log(C);

/* Call the appropriate JavaScript function on the prices array to calculate the total.  The inline function is provided for you*/

let prices =[2500.25, 3482.50, 1746.50];
let total = prices.reduce((preVal, currVal) => preVal + currVal);

console.log(total)

/* Call the appropriate JavaScript function on the kilograms array to convert the values to pounds and store the resulting array in a variable named 
pounds.  The inline function is provided for you */

let kilograms = [25, 45, 55];
let pounds = kilograms.map(function(element){ 
    return (element * 2.2);
});
console.log(pounds);