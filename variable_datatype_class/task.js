//to create a variable of type string and try to add the number to it

let a = "kailash";
let b = 6;
console.log(a + " " + b); // it concatenate the string with the number

//useing the typeof operator to find the datatype
console.log(typeof (a + b));

//creating the const object and check eithe it hold the numeber or not

const c = {
  name: "kailash",
  section: "a",
  isPrincipal: false,
};
// c = "badu"; //throws the error hence no is the answer
// c = 14; //throws errors

//adding the new key to the const object
c["friend"] = "badu";
c["name"] = "Kailashbadu";
console.log(c);

//js program to create a word meaning dictionary of 5 words

const dict = {
  Serendipity:
    "the occurrence and development of events by chance in a happy or beneficial way",
  Esoteric:
    " intended for or likely to be understood by only a small number of people with a specialized knowledge or interest",
  Ambivalent:
    " having mixed feelings or contradictory ideas about something or someone",
  Resilient: " able to withstand or recover quickly from difficult conditions",
  Ephemeral: "lasting for a very short time; short-lived.",
};
console.log(dict.Ambivalent);
console.log(dict["Ephemeral"]);
