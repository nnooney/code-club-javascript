function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));
// expected output: 28.695307297889173


Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 1000, 1000000)


console.log("   HELLO!   ".trim().toLowerCase());
// expected output: "hello!"


const compareUsing = function (a, b, compareFunction) {
  return compareFunction(a, b);
}

const lessThan = function (a, b) {
  return a < b;
}

const greaterThan = function (a, b) {
  return a > b;
}

compareUsing(3, 5, lessThan);
// expected output: true

compareUsing(3, 5, greaterThan);
// expected output: false


const scopeExample = function (parameter) {
  // parameter is only accessible within the body of this function.

  if (parameter == true) {
    let a = 1;
    const b = 2;
    var c = 3;

    // a and b go out of scope at the end of this 'if' block.
  }

  // c goes out of scope at the end of this function.
}

// only 'scopeExample' can be accessed from here.


const makeMultiplierFunction = function (x) {
  let newFunction = function (y) {
    return x * y;
  }
  return newFunction;
}

const multiplyByTwo = makeMultiplierFunction(2);

console.log(multiplyByTwo(3));
// expected output: 6
console.log(multiplyByTwo(4));
// expected output: 8

const multiplyByThree = makeMultiplierFunction(3);

console.log(multiplyByThree(3));
// expected output: 9
console.log(multiplyByThree(4));
// expected output: 12


const gcd = function (a, b) {
  if (a == b) {
    return a;
  } else if (a > b) {
    return gcd(a - b, b);
  } else {
    return gcd(a, b - a);
  }
}


function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

function power(base, exponent = 2) {
  return base ** exponent;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64
