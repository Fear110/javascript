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
    console.log(
      `order is received of ${this.mainMenu[mainIndex]}, and ${this.starterMenu[starterIndex]} delievert at ${time} in ${address}} `
    );
  },
};

restaurant.orderDelievery({
  time: '11:00',
  address: 'balaju',
  mainIndex: 2,
  starterIndex: 1,
});

/*

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
