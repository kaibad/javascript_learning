var a = 67; //a contains 67
console.log(a);

console.log("var,let,const");

//var
var b = "kailash";
var c = null;
var d = undefined; // var is es6
{
  var b = "this";
  console.log(b);
}

console.log(b); // the b from the block is printed in the console  Var can be updated and re-declared within its scope

//let
let f = "badu";
f = 64; // this changes the value of the f
//let f= 64 // it show that the  let can updated but not redeclared

console.log(f);

//const
// const  kailash;//this shows error beacuse the const must be initiated during decaration
const kailash = 1; //const can neither be redeclared nor be updated it is contant throuhout the progarm
console.log(kailash);
