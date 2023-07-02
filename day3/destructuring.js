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

// rest and apread
// hw for object
