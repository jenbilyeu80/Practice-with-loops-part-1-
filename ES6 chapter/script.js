var fullName="Jennifer Kelly";
const occupation="QA Softwear Tester";
let age=43;
console.log(fullName);
console.log(occupation);
console.log(age);

let year = 2022;
year=2023;
console.log(year);

//local/function scope part of code inside a function//

function visitCountry(){
    const visitCountry="Argentina";
    console.log(visitCountry);

}
visitCountry();
//This is an example of global scope. The space outside a function. (Code between functions)//


let cityToVisit ="Salzburg";
function travel() {
    console.log("Lets go to " + cityToVisit);

}
travel();
console.log(cityToVisit);

//Block scope part of the code between ({}) that belong to loops or conditionals.//

if (10 === 10) {
    console.log("This space here is block scope")
}

//example using arrow functions

const getPrice = (discount) => 500 - 
(discount * 500);
console.log(getPrice(.25));

const getRectangleArea = (length,width)=> length * width;
console.log(getRectangleArea(10,5));

const greetGuest = () =>{
    console.log("Hi " + "Jon");
    console.log("Hola " + "Jon");
}
greetGuest();

const dailyMotivation= () =>{
    console.log("You are capable of anything you set your mind to. ");
}
dailyMotivation();

const shouldDeployChute = (altitude) => {
    if (altitude <= 2000) return true;
    return false;
};

const pitcherERA = (er, ip=9) =>{
    return er * 9 /ip;
};

//Template literals//

const firstName="Jennifer";
console.log("Hello " + firstName + "!");
console.log(`Hello ${firstName}!`); 


const cars=["Honda", "Volkswagen", "Bentley", "Cadillac", "Toyota"];
if (cars[0] === "Hyundai"){
    console.log(`The prettiest car is a Hyundai`)
}else if (cars[1]==="Jeep"){
    console.log(`The prettiest car is a Jeep`);
}else{
    console.log(`${cars[0]} cars are prettier than ${cars[1]} cars.`)
}

const [Daycare, phone, address] = 
[`Little Tots`, `6184441212`, `123 Alphebet Dr`, `SeeSaw ` ];
console.log(Daycare);
console.log(phone);
console.log(address);

const [ id, ...moreInfo]=['0015', 'Ben Anderson', 'Purple', 'Apple', 'Soccer'];
console.log(id);
console.log(moreInfo);

const userInformation={
    firstNameA:"John",
    lastName:"Smith",
    ageA:41
};
const{
    firstNameA,
    lastName,
    ageA,

} = userInformation;
console.log(firstNameA, lastName, ageA)

const[,,,italianBread]=['Sourdough', 'Baguette', 'Brioche', 'Focaccia', 'Multigrain'];
console.log(`${italianBread} is leavened bread than produces a fluffy appearance.`);

const [berryTea, ...otherTeas]=['Berry', 'Chai', 'Chamomile', 'Citrus'];
console.log(`The ${berryTea} tea has Sun-proofing and Nourishing effects.`);
console.log(otherTeas);

const aircraft={
    brand: 'Boeing',
    nose: 'Pointed nose',
    windshield: 'V-shaped windshield',
    tail: 'Sloped Tail'
};
const{
    brand,
    nose,
    windshield,
    tail
} = aircraft;
console.log(`The ${brand} Company was founded on July 15, 1916.');
console.log('This aircraft has a ${nose}, and a ${windshield}`);
console.log('And at least but not last a ${tail}');

const oldShows={
    fifties:"Maverick",
    sixties:"The Saint",
    seventies:"The Love Boat",
    eighties:"Manimal",
    nineties:"Dawson's Creek"
};
const {
    eighties,
    ...otherOldShows
} = oldShows;
console.log(`The best tv show in the 80s was ${eighties}`);
console.log(otherOldShows);

const beer ={
    name: ' Blue Moon White',
    alcoholPercentage:5.4,
    calories:171,
    carbs: 12.9
};
const{
    branda = "N/A"
}=beer;
console.log(branda);
