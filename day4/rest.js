const array = [1, 2, 3, 4, 5, 6];
const [a, b, ...rest] = array;

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(sum(rest));
console.log(
  " the sum of all the elements of the array is :",
  a + b + sum(rest)
);
