// node --harmony generators.js

console.log("Generators\n");

console.log("Yield gives a value to next\n");

function* one() {
  yield 1;
};

var g = one();
console.log(g.next()); // 1
console.log();

console.log("2. When there is nothing left, next() returns { value: undefined, done: true }\n");

function* one() {
  yield 1;
};

var g = one();
console.log(g.next()); // 1
console.log(g.next()); // { value: undefined, done: true }
console.log();


// function* one() {
//   yield 1;
//   yield* two();
//   // console.log("hi", t);
//   return yield* three();
// };

// function* two() {
//   yield 2;
// };

// function* three() {
//   return 3;
// };


// var g = one();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// // console.log(g.next());
