async function javascript(hello) {
  return hello;
}
javascript("hello")
  .then((result) => {
    console.log("kailash", result);
  })
  .catch(() => {
    console.log("error");
  });

//   =====program2===========
async function javascript(hello) {
  const sum = "sum";
  if (sum == "sums") {
    return hello;
  } else {
    return "name";
  }
}
javascript("hello")
  .then((result) => {
    console.log("kailash", result);
  })
  .catch(() => {
    console.log("error");
  });

// =================program-3==============

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Fetched!");
    }, 2000);
  });
}
async function processData() {
  const result = await fetchData();
  console.log("now", result);
}
processData().then(() => {
  console.log("hello world").catch(() => {
    console.log("error");
  });
});
// ====================program-4=============
function fetchData() {
  return new Promise((resolve, reject) => {
    const a = 2;
    if (a == 2) {
      setTimeout(() => {
        resolve("Data Fetched!");
      }, 2000);
    } else {
      reject(a);
    }
  });
}
async function processData() {
  const result = await fetchData();
  console.log("now", result);
}
processData()
  .then(() => {
    console.log("hello world");
  })
  .catch(() => {
    console.log("error");
  });
