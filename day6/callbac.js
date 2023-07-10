// function parent(callback) {
//   const name = "kailash";
//   setTimeout(() => {
//     callback(name);
//   }, 2000);
// }
// function name(rocks) {
//   console.log("hiro", rocks);
// }
// console.log("callback");
// parent(name);

// =======program-2===========

// function func1(add) {
//   //   console.log(add);
//   add(2, 5);
// }
// function func2(a, b) {
//   console.log("add", a + b);
// }
// func1(func2);

// =======program-3===========

// function func1(add) {
//   add(() => {
//     console.log(hello);
//   });
// }
// function func2(a, b) {
//   console.log("add", a + b);
// }
// func1(func2);

// ==========program-4==========
// function func1(add, address) {
//   console.log("address", address);
//   add(2, 5);
// }
// function func2(a, b) {
//   console.log("add", a + b);
// }

// func1(func2, "kailali");

// ====program-5======

function func1(add) {
  add(func3);
}
function func2(a) {
  const name = "kailash";
  a(name);
}
function func3(result) {
  console.log("result", result);
}
func1(func2);
