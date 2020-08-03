const squared = function (x) {
  return x * x;
}
const alsoSquared = squared;
let twoSquared = squared(2);
let alsoTwoSquared = alsoSquared(2);

// OOPS!
// let bad_value = twoSquared();
// TypeError: twoSquared is not a function

function unless(test, then) {
  if (!test) then();
}

let n = 4
unless(n % 2 == 1, () => {
  console.log(n, "is even");
});


const element = document.querySelector("#button");
const clickHandler = function (event) {
  console.log("You clicked the button!");
}
element.addEventListener('click', clickHandler);

const element = document.querySelector('#button');
element.addEventListener('click', (event) => {
  console.log("You clicked the button!");
});

const SCRIPTS = [
  {
    name: "Latin",
    ranges: [
      [65, 91], [97, 123], [170, 171], [186, 187], [192, 215], [216, 247],
      [248, 697], [736, 741], [7424, 7462], [7468, 7517], [7522, 7526],
      [7531, 7544], [7545, 7615], [7680, 7936], [8305, 8306], [8319, 8320],
      [8336, 8349], [8490, 8492], [8498, 8499], [8526, 8527], [8544, 8585],
      [11360, 11392], [42786, 42888], [42891, 42927], [42928, 42936],
      [42999, 43008], [43824, 43867], [43868, 43877], [64256, 64263],
      [65313, 65339], [65345, 65371],
    ],
    direction: "ltr",
    year: -700,
    living: true,
    link: "https://en.wikipedia.org/wiki/Latin_script",
  },
  {
    name: "Arabic",
    // ...
  },
  {
    name: "Greek",
    // ...
  },
  // ...
]

"Code Club"
[67, 111, 100, 101, 32, 67, 108, 117, 98]
// UTF-8
// 01000011 01101111 01100100 01100101 00100000 01000011 01101100 01110101 01100010
// UTF-16
// 00000000 01000011 00000000 01101111 00000000 01100100 00000000 01100101 00000000
// 00100000 00000000 01000011 00000000 01101100 00000000 01110101 00000000 01100010

const horseShoe = "🐴👟";
const horseShoeArray = [0xD83D, 0xDC34, 0xD83D, 0xDC5F];

console.log(horseShoe.length);
// 4
console.log(horseShoe[0]);
// Unprintable Character (0xD83D is reserved)
console.log(horseShoe.charCodeAt(0));
// 0xD83D
console.log(horseShoe.charCodeAt(1));
// 0xDC34
console.log(horseShoe.codePointAt(0));
// 0xD83DDC34
console.log(horseShoe.codePointAt(1));
// 0xDC34

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

console.log(characterScript(121));
// → {name: "Latin", …}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({ name }) => name != "none");

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({ name, count }) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
// → 61% Han, 22% Latin, 17% Cyrillic
