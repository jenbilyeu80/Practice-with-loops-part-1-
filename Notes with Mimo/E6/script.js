
//stringify the ghosts array to create a Json//
const ghosts=[{
    firstName: "Casper",
    color:"White",
    scareFactor: 2
},
{
firstName: "Boo",
color: "transparent",
scareFactor: 3

}];
console.log(JSON.stringify(ghosts));

const jsonString = '{"sport" : "soccer","players" : 11, "duration" : 90}';
const newObject = JSON.parse(jsonString);
console.log(newObject.players);

const jsonStringA='{"sport": "basketball", "players": 5, "duration" : 48}';
const obj = JSON.parse (jsonStringA);
console.log(obj.sport);
console.log(obj.sport.toUpperCase());

let foodJSON ='{"name": "Pizza", "ingredients": ["dough", "tomato sauce", "cheese"]}';
let food = JSON.parse(foodJSON);
console.log(food.name);
console.log(food.ingredients);

// convert these objects into JSON to comapare.//

let toy1 = {name:"Blocks", price: 19.99, age_range: "6-12"};
let toy2={ name:"Stuffed Bear", price: 29.99, age_range: "0-3"};

let stringToy1 = JSON.stringify(toy1);
let stringToy2 = JSON.stringify(toy2);

const tajMahalJSON ='{"cuisine": "Indian", "takeout": false}';
let tajMahal=JSON.parse(tajMahalJSON);
console.log(tajMahal.takout);


