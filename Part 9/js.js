'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thus: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelievery: function ({ time, address, mainIndex, starterIndex }) {
    // console.log(
    //   `order is received of ${this.mainMenu[mainIndex]}, and ${this.starterMenu[starterIndex]} delievert at ${time} in ${address}} `
    // );
  },

  momo: function (piece, meat, color) {
    console.log(
      `your momo is with ${piece} pieces, ${meat} meat and ${color} in color`
    );
  },
  chowmin: function (nudles, ...othersIg) {
    console.log(`your chowmin is with ${nudles} and ${othersIg}`);
  },
};

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
const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;

console.log(team1);
console.log(draw);
console.log(team2);

// Question Number Six
const playerScored = game.scored;
const printGoals = function (playername) {
  let goal = 0;
  for (let i = 0; i < playerScored.length; i++) {
    if (playername === playerScored[i]) {
      goal = goal + 1;
    }
  }
  console.log(`${playername} Scored ${goal} Goals`);
};
//const pring = prompt("Enter the name of Player")
printGoals('Davies');
printGoals('Muller');
printGoals('Kimmich');
printGoals('Lewandowski');

// Question Number Seven
// if (team1 > team2) {
//   console.log('Team Two Most Likely to win');
// }
// if (team1 < team2) {
//   console.log('Team One Most Likely to Win');
// }


// team1: 1.33,
//     x: 3.25,
//     team2: 6.5,

// const finalWinner = team1 > team2 || team1 < team2;
// console.log(finalWinner);

// const finalResult  = team1 > team2 ?? team2 > team1;

team1 > team2 && console.log("Team two is most likely to win");
team2 > team1 && console.log("Team one is most likely to win");