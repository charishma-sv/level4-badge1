//Array destructuring
const arrays = [2, 3, 3];
const [first, second, third] = arrays;
console.log(first); //displays 2

const [one, ...rest] = arrays;
console.log(rest); //displays [3,3]

//Object destructureing
const obj = { a: 1, b: 2, d: 3, e: 5 };
let { a, b } = obj;
//property renaming
let { a: color1, b: color2 } = obj;
console.log(color1);
//default values
let { d, e = 100 } = obj;
