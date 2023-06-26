function greater() {
  const a = 1;
  const b = 2;
  const c = 0;
  if (a > b && a > c) {
    console.log("a is greater");
  } else if (b > a && a > c) {
    console.log("b is greater");
  } else {
    console.log("c is grater");
  }
}
greater();
