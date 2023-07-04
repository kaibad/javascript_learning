const array = [1, 2];
// const a = array[0];
// const b = array[1];
// console.log(a);
// console.log(b);
const [a, b] = array;
console.log(a, b);

const [c, d] = ["kailash", "badu"];
console.log(c, d);

// const [f, e] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [e, f, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(rest);

const number = [1, 2, 3, 4, 5];
function sum(g, h, i, j, k) {
  const add = g + h + i + j + k;
  console.log(` sum is :`, add);
}
sum(...number);

// rest and spread
// hw for object

const array1 = [1, 2, 4, 5, 6];
const l = array1[0];
const m = array1[1];
const n = array1[2];
const o = array1[3];
const p = array1[4];
console.log(l, m, n, o, p);

const array2 = [1, 2, 3, 4, 5];
const [q, r, s, t, u] = array2;
console.log(q, r, s, t, u);
console.log(q, r, rest[1]);

//rest operator assigns or put the remianing vaalue of an array

///spread  assign thr value of the array in the spread operation to the destructing
// function summation(x, y, z) {
//   let add = "";
//   add = x + y + z;
//   return add;
//   console.log("  fhhh"); //we cant do this  after the return
// }
// const arraysummation = [1, 2, 3];
// summation(...arraysummation);

// function summation(x, y, z) {
//   const add = x + y + z;

//   return add;
// }
// // const arraysummation = [1, 2, 3];
// // summation(...arraysummation);
// console.log(add);
