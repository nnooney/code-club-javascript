console.log("This line is run first");
console.log("This line is run second");
console.log("This line is run last");

for (let i = 0; i < 100; i++) {
  console.log("This line is run 100 times!");
}

console.log("In this line, + means 'sum': ", 1 + 1);
console.log("In this line, + means 'concatenate': ", "Ta" + "Da!");

let x = 2;
console.log("Here, x is a number with the value '2'", typeof x, x);
x = "hello";
console.log("Here, x is a string with the value 'hello'", typeof x, x);

for (let i = 1; i > 0; i++) {
  console.log("This line runs forever!");
}
