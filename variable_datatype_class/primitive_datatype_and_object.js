//there are 7 types of primitive data type there are null,number,boolean,bigInt,sting,symboland undefined
//non primitive data type is class

//primitive datatype
//nn bb ss u
let a = null;
let b = 456;
let c = true; //can be false
let d = BigInt("743") + BigInt("7"); // the n suffix indicate that it is bigint
let e = "kailas";
let f = Symbol("iam kailash badu");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof d);

//non-primitive datatype i.e object

const item = {
  kailash: true,
  badu: false,
  hiro: 20,
  ram: undefined,
};

console.log(item["kailash"]);
console.log(item["hiro"]);
