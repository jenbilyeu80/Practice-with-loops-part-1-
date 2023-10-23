/* Directions: Parse the tajMahalJSON JSON string and store it into a variable, tajMahal, so that we can work with it as a JS object.  
Display the takout value of the tajMahal objecy. Add starRating to the list of properties. Using const, create new variablr called tenRating, 
which is equal to the value of the starRating property of tajMahal multiplied by 2. Display the value of tenRating to check the result. */  


const tajMahalJSON ='{ "cuisine": "Indian", "Takeout":false}';
const tajMahal=JSON.parse('{"cuisine": "Indian", "takeout": false}')
console.log(tajMahal.takeout);
console.log(tajMahal);
tajMahal.starRating=4.5;
console.log(tajMahal);

const tenRating = tajMahal.starRating * 2;
console.log(tenRating);