/*
// function called from another function
function sum(a){
       return a+20;
}
function sub(b){
    return b-20;
}

function calc(num1,num2){
    let first = sum(num1);
    let sec = sub(num2)

    let finalsrc = first + sec;
    console.log(finalsrc);
}
calc(2,100);



// arrow function
let name = (name,surname) => {  //Multi parameter
    console.log(`my fulll, name is ${name} ${surname}`);
}
a = "sakar"
surname = "pudasaini"
name(a,surname );

let myname = myname => console.log(`my name is ${myname}`); // single parameter
myname("sakar");

let fname = () => console.log("my another name is FEAR"); // no parameter
fname();


let name = (name,surname) => {  
    return `my fulll, name is ${name} ${surname}`;
}
let retuenname = name("sakar","pudasaini")
console.log(retuenname);


// Function

function name(fname,lname){  // function returning its value
    return `my first name is ${fname} and my last name is ${lname}`
}

let funame = name("sakar","Pudasaini")
console.log(funame);



let myname = function(fname,lname){  // function can be stored in a variable
    return `my first name is ${fname} and my last name is ${lname}`
}

let funame = myname("sakar","Pudasaini")
console.log(funame);
*/


/*Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27



let calcAverage = (first, second, third) => (third + second + first) / 3;

let davg = calcAverage(500, 400, 400);
let kavg = calcAverage(500, 400, 400);

let checkWinner = function (calcAveraged, calcAveragek) {
    if (calcAveraged  >= calcAveragek *2 || calcAveragek >= calcAveraged*2) {

        if (calcAveraged > calcAveragek) {
            console.log(`this winner is Dolphine with average of ${calcAveraged}`);
        }
        else{
            console.log(`the winner is Koalas with the average is ${calcAveragek}`);
        }       
    }
    else {
        console.log("both team lost");
    }
}
checkWinner(davg, kavg);
*/


/*Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
*/


//code
/*
function calcTip(bill){
    if(bill > 50 && bill < 300){
        console.log(`the tip you have to paid is ${bill*.15}`)
        return a = bill*.15;        
    }
    else{
        console.log(`tip you have to paid is ${bill*.20}`);
        return a = bill*.20;
    }
}

let bills = [125,555,44];
let i = 0;
let tips = [
    calcTip(bills[i]),
    calcTip(bills[i+1]),
    calcTip(bills[i+2])]; 

console.log(bills,tips);

let total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
console.log(total);
*/

/* some practise
let mine = {
    fname : "sakar",
    lname: "pudasaini",
    fullname : function(){
        console.log(`using same object my full name is ${this.fname} ${this.lname}`);
    }
}
let kaju = {
    fname : "kajal",
    lname : "Acharya",
    fullname : function(fname,lname){
        console.log(`her full name is ${this.fname} ${this.lname}`);
    }
}

let other = {
    othername : function(){
        console.log(`name is ${this.fname} ${this.lname}`);
    }
}

let othername = other.othername.call(kaju);

*/

/*
let mark = {  // object number one
    fname: "Mark Miller",
    mass: 78,
    height: 1.69,
};
let john = {  // object bnumber two
    fname: "John Smith",
    mass: 92,
    height: 1.95,
};

let calcBMI = { // third object with method
    bmi : function(){  // function within onject is known as method
        return this.mass + this.height;
    }
}
let q = calcBMI.bmi.call(mark);  // call method is used here
console.log(q);
*/


let name = {  // bracket can be used as . in object with great advantages 
    fname : "sakar",
    lname : "pudasaini"
};

let a = "name";
console.log(`my name is ${name["f"+a]}`);