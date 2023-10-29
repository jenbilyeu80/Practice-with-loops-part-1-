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

/*const siblings=["Jon", "Jess", "Jen", "Jarod"];
const add=siblings.push("Jacob");
const middleChild=siblings[2];
console.log(`The middle child is ${middleChild}.`);*/

/****************************************************************************************************************************************** */

const todos = ["study", "chores", "meditate"];
remove = todos.pop();
const leftToDo = todos.length;
console.log(`You have  ${leftToDo} items left to do.`);
