// function filters(x) {
//   console.log(x);
//   return x % 2 === 0;
// }
// console.log(filters(10));

// =======program-2=========
// const array2 = ["ram", "shyam", "hari", "sita"];
// const tworemainder = array2.filter((currentvalue, index) => {
//   return currentvalue === "ram";
// });
// console.log(tworemainder);

// ======program-3==============
// const array2 = ["ram", "shyam", "hari", "sita"];

const array3 = ["kailash", "badu", "double", "rocks"];
const output = array3.filter((item, index) => {
  return item?.length === 7 || item?.length === 4;
});
// const output2 = array3.filter((item, index) => {
//   //   console.log("item:", item.length);
//   return item.length == 4;
// });
// console.log(output, ",", output2);
console.log(output);
