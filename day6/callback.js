//a callback is a function passed as an arguement  to another funtion.
function parent(callback) {
  setTimeout(() => {
    console.log("kailash badu");
  });
  //   parent();
}
function name() {
  console.log("Name:-");
}
parent(name());
// name();
