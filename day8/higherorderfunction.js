// function that takes a function as an arguement
// const array1 = [1, 2, 3, 4, 5];
// function mapping(x) {
//   return x * 2;
// }

// const double = array1.map(mapping);
// console.log(double);
//   program 2============
const array1 = [1, 2, 3, 4, 5];

const double = array1.map((item, index) => {
  console.log("item", item, "index", index);
  return item * 2;
});
console.log(double);
