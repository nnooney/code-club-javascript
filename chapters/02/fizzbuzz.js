for (let i = 1; i <= 100; i++) {
  let str = "";
  if (i % 3 == 0) {
    str += "Fizz";
  }
  if (i % 5 == 0) {
    str += "Buzz";
  }
  console.log(str || i);
}

for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}
