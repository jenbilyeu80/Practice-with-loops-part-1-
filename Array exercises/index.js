let practiceFile=[273.15];
console.log(practiceFile.push(42));
console.log(practiceFile);
console.log(practiceFile.push("Hello"));
console.log(practiceFile.push(false,-4.6, "87"));
console.log(practiceFile);

let cargoHold= ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
cargoHold[5]="space tether";
console.log(cargoHold)
console.log(cargoHold.pop());
console.log(cargoHold.shift());
console.log(cargoHold.unshift(1138));
console.log(cargoHold.push('20 meters'));
console.log(cargoHold);
console.log(`The array ${cargoHold} has a length of ${cargoHold.length}.`);

cargoHold.splice(3,0,'keys');
console.log(cargoHold);
console.log(cargoHold.splice(4,1));
cargoHold[2]="cat";
cargoHold[3]="fob";
cargoHold[4]="string cheese";
console.log(cargoHold);

holdCabinet1= ['duct tape', 'gum', 3.14, false, 6.022e23];
    holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);

console.log(holdCabinet2.sort());
console.log(holdCabinet1.reverse());

holdCabinet1.splice();
console.log(holdCabinet1);
holdCabinet2.splice()
console.log(holdCabinet2)

let str="In space, no one can hear you code.";

console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));

arr=["B","n","n", 5];
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(" "));

let quote="water,space,food,plasma sword,batteries";
let quoteArr=quote.split(',');
console.log(quoteArr);
console.log(quoteArr.sort());

let table=[];

  element1 = ['hydrogen', 'H', 1.008]
  element2 = ['helium', 'He', 4.003]
  element26 = ['iron', 'Fe', 55.85]

  table.push(element1);
  table.push(element2);
  table.push(element26);
  
  console.log(table)
  console.log(table[1], table[1][1]);




console.log(table[1], table[1][1]);