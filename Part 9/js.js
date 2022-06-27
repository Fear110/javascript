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
