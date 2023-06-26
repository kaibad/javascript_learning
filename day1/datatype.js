//primitive data type
// const a = 20; //number
// const name = "kailash"; //string
// const conditio = true; //boolean

//non primitive data type
// const object = {
//   name: "kailash",
//   address: "pilchwok",
// };
// console.log(object.name, "kaialsh");
// const array = [1, 2, 3, "hiro", "kailash", "badu", 5];
// const array1 = array.length;
// const array2 = array.pop(); //removes the last element from the array
// const array3 = array.push(10); //push the item in the end of the array
// console.log(array1);
// console.log(array[3], array[4], array[6]);

// console.log(array);
// console.log(array2);
// console.log(array);

// ======slice-splice===

// const newarray = [1, 2, 3, 4, 5, 6, 7];
// console.log(newarray.slice(4)); //slice(index)
// console.log(newarray.splice(2, 2, 22, 33)); //splice has 3 parameter (index,remove,add)
// console.log(newarray);

//slice creates a new array but the original array remains same
//splice changes the original array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.splice(3, 4, 100, 200));
console.log(array);
console.log(array.splice(3, 5));
console.log(array, typeof array);
