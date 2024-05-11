let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea']
let dessert = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi']
let pantry = [protein, grain, vegetable, beverage, dessert];
console.log(pantry);

for(let i= 0; i < 6; i++){
let meal= [protein[i], grain[i],vegetable[i], beverage[i], dessert[i]]
console.log(`I'm about to enjoy ${meal[0]} with some ${meal[1]}, ${meal[2]}, ${meal[3]}, and ${meal[4]}`)

};

let str1 = "Rutabagas";
let str2 = "Chemistry";
let fullStr ="";

for(let i= 0; i < str1.length; i++ ){
fullStr += str1[i] + str2[i];

}
console.log(fullStr);

let nstr1 = "LoOt";
let nstr2 = "oku!";
let nfullStr ="";

for(let i= 0; i < nstr1.length; i++ ){
nfullStr += nstr1[i] + nstr2[i];

}
console.log(nfullStr);



