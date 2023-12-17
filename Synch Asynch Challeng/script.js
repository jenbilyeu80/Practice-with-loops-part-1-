/* It's breakfast time! We don't have any fruit at home, so we must go the market with a list.  Write a program that prints the fruits we need.
1. Use the .map() method onthe fruitsArray and save it into new ArrayOfStrings.
2. Use fruitsList for the callback function of .map(). */

const fruitsArray =[ 'apples', 'coconuts', 'bananas', 'strawberries', 'organges'];

function fruitsList(fruit){
    return 'buy 2 ' + fruit;
}
const newArrayOfStrings =fruitsArray.map(fruitsList) ;
console.log(newArrayOfStrings);

