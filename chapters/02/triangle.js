console.log("#");
console.log("##");
console.log("###");
console.log("####");
console.log("#####");
console.log("######");
console.log("#######");

for (let str = "#"; str.length <= 7; str += "#") {
  console.log(str);
}

for (let str = "#"; str.length < 8; str = str + "#") {
  console.log(str);
}

let str = "#"
while (true) {
  console.log(str);
  str += "#";
  if (str.length == 8) {
    break;
  }
}
