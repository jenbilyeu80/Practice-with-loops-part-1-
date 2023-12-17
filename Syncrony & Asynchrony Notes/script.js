
/* create an empty promise using the Promise constructor method.  Assign it to the promise variable.  Finally, pass an empty function to the constructor method 
that has two parameters resolve and reject.*/

let promise = new
Promise(function(resolve, reject) {});

/* Check if the burgerSandwich has onion.  IF true, reverse it to false.  Then, resolve the new onion values insided the if condition.*/

const burgerSandwich = {pattySource: 'chicken',
tomato: true,
lettuce: true,
onion: true,
cheese: true};

function customizeOrder(){
    return new Promise(function(resolve){
        if(burgerSandwich.onion){
            burgerSandwich.onion = false;
            resolve(burgerSandwich.onion)
        }

    });
}
customizeOrder();

/* Write code to check if the grade is A and resolve with message of your choice.  If the greade is different from A, reject with a message different from 
the resolve message.*/

const grade = 'A';

function giftBuyDecision(){
    return new Promise(function(resolve, reject){
        if (grade === 'A') {
            resolve ("Excellent work...");
        } else {
            reject("Maybe next semester...");

        }

    });
}
giftBuyDecision();

/* Complete the .then to print the resolved message and after that complete the .catch method to print the rejected message.*/

const data = ['Hello', 'foo', 'bar', 7, 'smith'];
const intruder = data.find((i) => typeof i !== 'string');

function checkIfIntruderFound() {return new Promise(function(resolve, reject) {
    if(intruder){
        resolve(`Intruder has been found. It is item ${intruder}`);
    }else{ 
        reject("Intruder not found..");
}
    });
}
function callOutTheIntruder(){
    checkIfIntruderFound()
    .then(function(result){
        console.log(result);
}) .catch(function(error){
    console.log(error);
});
}
callOutTheIntruder();

//Make the prepareDinner function asynchronous//

async function prepareDinner(){
    setTimeout(function() {
        console.log("Dinner is prepared...");
    },1000);
}
prepareDinner();

//Convert the boardTheBus into an async function.  Then, use await to make the message variable wait until waitForBusArrival resolves.//

const randomWaitTime = 
Math.floor(Math.random() * 1000);
let waitForBusArrival = new Promise((resolve, reject) => {
    setTimeout(() => resolve(
        "The bus has finally arrived! Now boarding.."), randomWaitTime);
    });
        async function boardTheBus(){
            let message = await waitForBusArrival;
            console.log(message);
        }

boardTheBus();