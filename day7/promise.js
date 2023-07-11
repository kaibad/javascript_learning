const promiseexmaple = new Promise((resolve, reject) => {
  const data = "hello,world";
  if (data) {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  } else {
    reject("");
  }
});
console.log("Fetching data...");
promiseexmaple
  .then(function (result) {
    console.log("retrived data:", result);
  })
  .catch(function (result) {
    console.error("error", error);
  })
  .finally(() => {
    console.log("Hello iam finally");
  });
