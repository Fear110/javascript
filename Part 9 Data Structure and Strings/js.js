'use strict';
const weekdays = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours, //  Enhance Object Literals
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelievery({ time, address, mainIndex, starterIndex }) {
    // console.log(
    //   `order is received of ${this.mainMenu[mainIndex]}, and ${this.starterMenu[starterIndex]} delievert at ${time} in ${address}} `
    // );
  },
  momo(piece, meat, color) {
    console.log(
      `your momo is with ${piece} pieces, ${meat} meat and ${color} in color`
    );
  },
  chowmin: function (nudles, ...othersIg) {
    console.log(`your chowmin is with ${nudles} and ${othersIg}`);
  },
};

/*
// map
const ras = ['jibjibe', 'kalika', 'gosaikunda'];

const rest = new Map();
rest.set('name', 'sardar Momo');
rest.set(1, 'kakashi');
rest.set(2, ['jibjibe', 'kalika', 'gosaikunda']);
console.log(rest);

rest.set('momo', 120).set('chowmin', 150).set('coke', 50);
console.log(rest); // to push into Map .set

console.log(rest.get('momo')); // to get return from Map .get
// rest.delete('momo'); // delete from map
console.log(rest);
console.log(rest.size); // returns size of the Map
// rest.clear()  // delete whole Map
console.log(rest.has('Fear')); //return true or false

rest.set('heading', document.querySelector('h1'));
console.log(rest.get('heading'));

const question = new Map([
  ['question', 'what is the most popular programing language:'],
  [1, 'java'],
  [2, 'Python'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Your answer is Correct 😍'],
  [false, 'your answer is Incorrect ⛔'],
]);
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

//const ans = Number(prompt('What is your answer?'));
const ans = 3;
console.log(ans);
if (ans === question.get('correct')) {
  console.log(question.get(true));
} else {
  console.log(question.get(false));
}

//Converting Map to array
const questionArray = [...question];
console.log(questionArray);

console.log(...question.keys());
console.log(...question.values());


*/

/*
const days = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[days]?.open ?? 'close';
  console.log(`we are open on ${day} at ${open}`);
}

// methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.orderChiya?.(3, 4) ?? 'method does not exists');

//array
// const users = [{ name: 'sakar', email: 'barcaboysakar@gmail.com', age: 22 }];
const users =[];
console.log(users[0]?.name ?? 'array is empty');

if(users.length > 0) console.log(users[0].name);
else console.log("user array is Empty");



// Looping array _ the for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for(const items of menu){
//   console.log(items);
// }
for (const [i, items] of menu.entries()) {
  console.log(`menu is ${i + 1} at ${items}`);
}


*/
/*

restaurant.chowmin('mama', 'salad', 'buff', 'onion');

// SPREAD
const arr = [1, 2, 3, ...[4, 5, 6]];

//REST
const [a, b, ...others] = arr;
console.log(a, b, others);

const [pizza, Pasta, Risotto, ...othersFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Pasta, Risotto, othersFood);

// REST in Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat);
console.log(weekdays);

const calc = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

let nul = [1, 2, 4, 5];
calc(...nul);
calc(56, 57, 58969);

*/

/*

/// the spread Operator

const arr = [6, 7, 8];
const newarr = [1, 2, 3, 4, ...arr];
console.log(newarr);

console.log(...arr);

// copy an array
const newMainMenu = [...restaurant.mainMenu];
console.log(newMainMenu);

const newMenu = [...restaurant.mainMenu, 'momo'];
console.log(newMenu);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// const momoMaker = [
//   prompt('how many pieces ?'),
//   prompt('which meat ?'),
//   prompt('what is the color ?'),
// ];

//restaurant.momo(...momoMaker);

const newRes = {founder : "Sakar",...restaurant}; // only makes copy does not change the original value
console.log(newRes); // Changed value added value

console.log(restaurant); // original value
*/

/*

restaurant.orderDelievery({
  time: '11:00',
  address: 'balaju',
  mainIndex: 2,
  starterIndex: 1,
});

// destructing Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//renaming object attrributes
const { name: newname, openingHours: timing, categories: tags } = restaurant;
console.log(newname, timing, tags);

//Default value can be added using Destruturing
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//switching variables values in object
let a = 69;
let b = 36;
const num = {
  a: 23,
  b: 7,
  c: 69,
};
({ a, b } = num);
console.log(a, b);

//nested object
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
/*
// destructing arrays
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [first, second] = restaurant.categories;
console.log(first, second);

//switching variables values
[first, second] = [second, first];
console.log(first, second);

//return two value using one function
const [starterpackage, mainpackage] = restaurant.order(2, 0);
console.log(starterpackage, mainpackage);

// nested Destructuring
const nested = [2, 4, [4, 5]];
const [a, , [q, r]] = nested;
console.log(a, q, r);

//Default value can be added using Destruturing
const ar2 = [2];
const [t = 1, p = 1, u = 1] = ar2;
console.log(t, p, u);
*/
/*
// OR ||
console.log(3 || 'Fear');
console.log('' || 'Fear');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Fear' || 22 || null);

restaurant.numGuest = 0;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

// AND &&
console.log(0 && 'Fear');
console.log(7 && 'Fear');
console.log('hello' && 23 && null && 'FEAR');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

//Nullish coaleascing : null and Zero
restaurant.numGuest = 0;
const guestCorrect = restaurant.numGuest ?? 10; //worked wen value is 0
console.log(guestCorrect);
*/

/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Question Number one
let player1 = game.players[0];
let player2 = game.players[1];
console.log(player1);
console.log(player2);

// Question Number two
const [gk, ...filedPlayers] = player1;
console.log(gk);
console.log(filedPlayers);

// Question number Three
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// Question number Four
const player1Final = ['Thiago', 'Coutinho', 'Perisic', ...player1];
console.log(player1Final);

// Question number Five
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

// console.log(team1);
// console.log(draw);
// console.log(team2);
const {team1 , x:draw,  team2 } = game.odds;
console.log(team1);
console.log(draw);
console.log(team2);

// Question Number Six
const playerScored = game.scored;
const printGoals2 = function (playername) {
  let goal = 0;
  for (let i = 0; i < playerScored.length; i++) {
    if (playername === playerScored[i]) {
      goal = goal + 1;
    }
  }
  console.log(`${playername} Scored ${goal} Goals`);
};
//const pring = prompt("Enter the name of Player")
// printGoals('Davies');
// printGoals('Muller');
// printGoals('Kimmich');
// printGoals('Lewandowski');

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals('');
printGoals(...game.scored);

//Question Number Seven
if (team1 > team2) {
  console.log('Team Two Most Likely to win');
}
if (team1 < team2) {
  console.log('Team One Most Likely to Win');
}

team1 > team2 && console.log('Team two is most likely to win');
team2 > team1 && console.log('Team one is most likely to win');


*/
/*
let profile = {
  name: 'fear',
  address: 'balaju',
  college: {
    firstCollege:0,
    secondCollege: 'nccs',
  },
};

let a = profile.college.firstCollege ?? console.log("methos not found"); // returns 0 not false
let b = profile.college.firstCollege || console.log("methos not found"); // returns false if the value is 0

console.log(a)
console.log(b)
*/

/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Question Number One
console.log('Question Number 1: ');
const playerScores = game.scored;
for (let [player, goal] of playerScores.entries()) {
  console.log(`Goal ${player + 1}: ${goal}`);
}

// Question Number two
console.log('.........................................');
console.log('Question Number 2: ');
const gameOdd = Object.values(game.odds);
let totalSum = 0;
for (let odd of gameOdd) {
  totalSum = totalSum + odd;
}
const average = totalSum / gameOdd.length;
console.log('Average Odd is ' + average);

// Question Number Three
console.log('.........................................');
console.log('Question Number 3: ');
for (const [team, odd] of Object.entries(game.odds)) {
  if (game[team] === undefined) {
    console.log(`Draw odd is ${odd}`);
  } else {
    console.log(`Odd of ${game[team]} ${odd}`);
  }
}

console.log('.........................................');
console.log('.........................................');

// Bonus Challenge
console.log('.........................................');
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
*/

/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
*/

/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// Question Number One
console.log('Question number One: ');
const gameEventSet = new Set(gameEvents.values());
console.log(gameEventSet);

// Question Number Two
console.log('Question Number Two: ');
console.log('......................................................');
gameEvents.delete(64);
console.log(gameEvents);

// Question Number three
console.log('Question Number Three: ');
console.log('......................................................');
let totalEvent = gameEvents.size + 1;
const totalGametime = 90;
for (let [key, events] of gameEvents) {
  if (key > totalGametime) {
    totalEvent = totalEvent - 1;
  }
}
const averageAction = totalGametime / totalEvent;
console.log(`An event happened, on average , every ${averageAction} minutes`);


// Question Number Four
console.log('Question Number Four: ');
console.log('......................................................');
for (const [i, j] of gameEvents) {
  if (i < 45) {
    console.log(`[First half] ${i}: ${j}`);
  } else if (i > 90) {
    console.log(`[Extra Time] ${i}: ${j}`);
  } else {
    console.log(`[Second Half] ${i}: ${j}`);
  }
}
*/

/*
// Working with String

let airplane = 'Hamro Nepal Airlince';
const plane = 'A380';

console.log(airplane[0]);
console.log(airplane[1]);
console.log(airplane[3]);
console.log(airplane[4]);
console.log(airplane[5]);
console.log(airplane[6]);

console.log('sakar'[4]);
console.log(airplane.length); //returns the length of the string
console.log(airplane.indexOf('e'));
console.log(airplane.indexOf('Airlince'));

console.log(airplane.slice(0, 5));
console.log(airplane.slice(0, airplane.lastIndexOf(' ')));

console.log(airplane.slice(-8));
console.log(airplane.lastIndexOf(' '));

const checkMiddleSeat = function(seat){
  const preSeat = seat;
  const ans = preSeat.slice(-1);
  console.log(ans);
  if(ans == 'B' || ans == 'E' ){
    console.log("Congrulations your have the middle Seat");
  }
  else{
    console.log("Maybe next time");
  }

}
checkMiddleSeat('11B');
checkMiddleSeat('11E');
checkMiddleSeat('11F');


//Working With Strings - Part 2

const airline = 'TARA Air Nepal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@sakar.io';
const loginEmail = '  Hello@Sakar.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/

//working with array Part 3
// Split and Join

// const fullname = 'Sakar Pudasaini';
// const fullnameindex = fullname.split(' ');
// console.log(fullnameindex);

// const [firstname, lastname] = fullname.split(' ');
// const fname = ['mero naam',firstname,lastname].join(' ');
// console.log(fname);
/*
const fullname = function (names) {
  const splitnames = names.split(' ');
  let ffname = [];
  console.log(splitnames);
  for (const n of splitnames) {
    ffname.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(ffname.join(' '));
};

fullname('sakar fear kakashi');

// Repeat
const name = 'sakar';
console.log(`my name is ${' sakar'.repeat(10)}`);

const air = function (num) {
  console.log(`there will be ${num} planes today ${'✈️'.repeat(num)}`);
};

air(9);
air(90);
*/

/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
*/

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/
// String Methods Practice

/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
*/
