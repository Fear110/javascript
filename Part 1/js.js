/*
alert("hey there")
*/

/*
//variable declaration
let firstName = "sakar";
console.log(firstName);
console.log(firstName);

//data types
num = 10; //number
console.log(num);
name = "sakar" //String
// null,bigint,symbol

let javaScriptIsFun = true;
console.log(javaScriptIsFun);//boolean

let a; //undefined
a = "pudasaini"
console.log(a)
console.log(typeof a);

console.log(typeof num); // Gives the dataypes of variable


// dynamic typing
num = "ten" // changed to string from int
console.log(num);


// declaring variable
let age = 22; //can be changed later
age = 23; //possible

const birthyear = 1999;
//birthyear = 2000;  //not possible
console.log(birthyear)

// var is an old way to declaring used in ES5 and older

lastName = "pudasaini" // without keyword can be done
lastName = "Achrya"
console.log(lastName);

*/

/*
// just for fun
for(i = 0;i<=5;i++){
    console.log("my name is Sakar");
    console.log("sakar");
}



//Basic Operator 

const age = 2022 - 1999; //sub
console.log(age);

const birthYear = 1999;
var myAge = 23;

var today = birthYear + myAge; //add
console.log(today);

var calc = birthYear / myAge;
console.log(calc); // div

var calcSec = birthYear % myAge; //mod
console.log(calcSec);


 // challenge Number one
  
 let marksWeight = 78;
 let marksHeight = 1.69;

 let johnWeight = 92;
 let johnsHeight = 1.95;

 let marksBMI = marksWeight / marksHeight ** 2;
 let johnBMI = johnWeight / johnsHeight ** 2;


 console.log(marksBMI);
 console.log(johnBMI);
    
 if(marksBMI > johnWeight){
    let markHigherBMI = true
    console.log(markHigherBMI);
 }
 else{
    markHigherBMI = false
    console.log(markHigherBMI);
 }
  


// String and Template Literals
const firstName = "sakar";
const lastName = "pudasaini";
let age = "22";
console.log(`my name is ${firstName} ${lastName} and my age is ${age}`)


console.log(`this is 
me
and 
im here to 
rule`);

// if_else

const age = 14;
const valid = age >= 16;
if(valid){
    console.log("you can vote");
}
else{
    console.log(`you should wait ${16-age} years more`);
}

// challenger two
let marksWeight = 78;
let marksHeight = 1.69;

let johnWeight = 92;
let johnsHeight = 1.95;

let marksBMI = marksWeight / marksHeight ** 2;
let johnsBMI = johnWeight / johnsHeight ** 2;


console.log(marksBMI); //27
console.log(johnsBMI);
   
if(marksBMI > johnsBMI){   
   console.log(`Mark have the higher BMI with ${marksBMI - johnsBMI}`);
}
else{
    console.log(`John have the higher BMI with ${johnsBMI - marksBMI}`);
}


function name(date){
    return 2022 - 22;
}
// let a = name(1999)
console.log(a);
let a,b;
let name2 = date =>{
    return date - 2022;
} 

let q  = name2(1999);
console.log(q);    


//  === vs ==
 
const age = 20;
if(age === 20){ // see type of variable
    console.log("you are 20");
}
else{
    console.log("you are not");
}

if(age == "if"){ // does not see type of variable
    console.log("equal");
}
else{
    console.log("its not");
}

// logical operators

const hasLicence = true;
const hasGoodvision = false;

if(hasLicence && hasGoodvision){
    console.log("you can drive");
}
else{
    console.log("you cant drive");
}


if(hasLicence || hasGoodvision){
    console.log("you can drive");
}
else{
    console.log("you cant drive");
}
*/
// code challenge three

 let avgdol = 40;
 let avgcol = 50;

if(avgdol  >=100 || avgcol >= 100 ){
    if(avgdol > avgcol){
        console.log("the winner is Dolphins");
    }
    else if(avgcol > avgdol){
        console.log("the winner is Koalas");
    }
    else{
        console.log("the game is draw");
    }
}
else{
    console.log("the game is not count cause both team got less than 100");
}

