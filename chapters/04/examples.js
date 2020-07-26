let mycollection = [1, false, "hi", undefined, "cool!"];
for (let i = 0; i < mycollection.length; i++) {
  console.log(i, mycollection[i]);
}
// 0, 1
// 1, false
// 2, hi
// 3, undefined
// 4, cool!

let fruits = ["Apple", "Banana"];
console.log(fruits.length);

let first = fruits[0];
let last = fruits[fruits.length - 1];
console.log(first, last);

fruits.forEach(function (item, index, array) {
  console.log(item, index);
});

let newLength = fruits.push("Orange");
let last = fruits.pop();
let first = fruits.shift();
let newLength = fruits.unshift("Strawberry");
console.log(fruits);

fruits.push("Mango");
let position = fruits.indexOf("Banana");
console.log(position);

let removedItem = fruits.splice(position, 1);
console.log(fruits);

let shallowCopy = fruits.slice();
console.log(shallowCopy);

let fruits = ["Strawberry", "Banana", "Apple", "Orange", "Mango"];
const isShort = function (string) { return string.length < 6; }
console.log(fruits.every(isShort));
console.log(fruits.some(isShort));
console.log(fruits.filter(isShort));
console.log(fruits.findIndex(isShort));
console.log(fruits.find(isShort));
console.log(fruits.includes("Banana"));
console.log(fruits.join("-"));
console.log(fruits.reverse());
console.log(fruits.sort());

let myobject = {
  messageId: 1,
  isUrgent: false,
  subject: "hi",
  messageFormat: undefined,
  body: "cool!",
};

let vegetables = {
  orange: "carrot",
  green: ["spinach", "broccoli"],
  white: ["potato", "cauliflower"]
}

let keys = Object.keys(vegetables);
console.log(keys);
let values = Object.values(vegetables);
console.log(values);

let shallowCopy = {};
Object.assign(shallowCopy, vegetables);
console.log(shallowCopy);

let num1 = 10;
let num2 = num1;
console.log(num1, num2);
// 10, 10
num2 = 15;
console.log(num1, num2);
// 10, 15

let arr1 = [10, 20];
let arr2 = arr1;
console.log(arr1, arr2);
// [10, 20] [10, 20]
arr2.push(30);
console.log(arr1, arr2);
// [10, 20, 30] [10, 20, 30]
arr2 = [1, 2, 3];
console.log(arr1, arr2);
// [10, 20, 30] [1, 2, 3]


function log(...args) {
  console.log("LOG:", ...args);
}

log(1, 2, 3);
// args will be [1, 2, 3]
// will call console.log("LOG:", 1, 2, 3)
log("hi", "this", "works!");
// args will be ["hi", "this", "works!"]
// will call console.log("LOG:", "hi", "this", "works!")
