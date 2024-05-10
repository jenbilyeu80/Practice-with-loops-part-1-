let num = "1001";
let newNum = num.length;
console.log(newNum);

 let number = "123.45";
 let newNumber = number.length;
 console.log(newNumber);

 

    if (String(number).includes('.')){
        console.log(String(number).length-1);
        } else {
        console.log(String(number).length);
        }

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
dna = dna.trim();
console.log(dna);
dna=dna.toUpperCase();
console.log(dna);

dna = dna.replace('GCT',"AGG")
console.log(dna);

if(dna.indexOf("cat")===true){
console.log("CAT FOUND")
}else{console.log("CAT NOT FOUND")
};

dna = dna.slice(16,19);
console.log(dna);

let newDna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
newDna = newDna.trim();
console.log(`The DNA strand is ${newDna.length} characters long`);

console.log(`${newDna} - taco cat`);

let word="JavaScript";
console.log(word.slice(0,1) + word.slice(4,5));



let newWord = word[0] + word[4];
console.log(newWord);

console.log(` The abbreviation for ${word} is ${newWord}.`);

word=word.toUpperCase();
console.log(word)

let python= "title case";
let output = python.replace("t", "T").replace("c", "C");
console.log(output); 











