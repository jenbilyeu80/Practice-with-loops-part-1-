const names=["Tony", "Tania", "Vince","Terry"];
const xxx = names.filter(element =>
 (element[0]==="T"));
console.log(xxx);

const testScores=[72,95,90,71,75,79]
const arr=testScores.filter(element => element >= 90)

console.log(arr);


const participants = ["Ben", "Sarah", "Eli", "Henry", "Sean", "Annabel"];
const sNames = participants.filter(function(element){
    return element[0]==="S";
});
console.log(sNames);

const week =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
const workWeek=
week.filter(function(element,index){
    return (index > 0 && index < 6);
});
console.log(workWeek);

const prices = [19.99, 20.99, 18.99, 17.99, 21.99];
const inBudget = prices.filter(function(price){
    return price < 20;
});
console.log(inBudget);

const weather =[67, 78, 73, 77, 82, 93];
const shortSleeveDay=weather.filter(function(temp){
    return temp >75;
});
console.log(shortSleeveDay);

const superheroes=["Batman", "Spiderman", "God", "Mary"];
console.log(superheroes);

function fuelCost(litres,costPerliter){
    const totalCost= litres * costPerliter;
    console.log(totalCost);
}
fuelCost(60,1.44)

let visitors =["Christina", "Andrew", "Chris", "Delia"]
let C = visitors.filter(function(element){
    return element[0]=="C"
})
console.log(C);

let kilograms=[25,45,55];
let pounds= kilograms.map(function(element){
    return element * 2.2;
});
 console.log(pounds); 

 const carsWashed = [21, 15,18,10,5,8,23];
 const weeklyCars= carsWashed.reduce(function(prev,curr) {
    return prev +curr;
 });
 console.log(weeklyCars);

 const values = [5,4,3,2,1];
 const product= values.reduce(function(prev,curr){
    return prev * curr;
 });
 console.log(product);

 const valuesA=[5,4,3,2,1];
 const productA=values.reduce((prev,curr)=> prev*curr);
 console.log(productA)
