/* change the takout poperty to true without changing the original value. confirm it has been updated.
To prepare the object to be sent to the serverm create a new variable called stringTajMahal and stor the sringified version of tajMahal.*/

/*const tajMahal={
    cuisine: "Indian",
    takout: false,
    starRating:4.5
};
tajMahal.takeout = true;
console.log(tajMahal);
const stringTajMahal=
JSON.stringify(tajMahal);
console.log(stringTajMahal);*/
//*************************************************************************************************************************************** */
/* Parse the JSON sting into a JS object and store it into a new variable, tajMahal variable.
Using const, create a new variable called tenRating, which is equal to the value of the starRating prperty of tajMahal multiplied by 2.
Display the value of tenRating to check the result.*/

const tajMahalJSON='{"cuisine": "Indian", "takeout": false, "starRating": 4.5}';
const tajMahal = JSON.parse(tajMahalJSON);
const tenRating = tajMahal.starRating * 2;
console.log(tenRating);

//*********************************************************************************************************//

/* Declare an arrow function named checkInMessage that returns the provided welcome message. Click on teh welcome message to copy it and then paste it as a string that's returned by the arrow.*/

const checkInMessage=() => "Hello! Welcome to Terrace Inn & Suites!";
console.log(checkInMessage());
