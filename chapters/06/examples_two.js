class Dog {
  constructor(name, age, diet) {
    this.name = name;
    this.age = age;
    this.diet = diet;
  }

  bark() {
    console.log(this.name, " says woof");
  }

  growUp() { /* ... */ }
  feed() { /* ... */ }
}

function makeNoise(animal) {
  console.log(animal.speak());
}

class Sheep {
  speak() { return "Baaaa"; }
}

class Cow {
  speak() { return "Moo"; }
}

class Duck {
  speak() { return "Quack"; }
}

const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn


class Deck {
  constructor() {
    this.cards = [];
  }

  [Symbol.iterator]() {
    return this.cards[Symbol.iterator]();
  }
}

let deck = new Deck();
for (let card of deck) {
  // ...
}

class StackedDeckIterator {
  constructor() { }
  next() {
    return { value: "Ace of Hearts", done: false }
  }
}

class StackedDeck {
  constructor() { }
  [Symbol.iterator]() {
    return new StackedDeckIterator();
  }
}

let stackedDeck = new StackedDeck();
for (let card of stackedDeck) {
  // "Ace of Hearts"
  // "Ace of Hearts"
  // ...
}

class Month {
  constructor(month) {
    this._month = normalize(month);
  }

  normalize(month) {
    if (month < 1) {
      return 1;
    } else if (month > 12) {
      return 12;
    } else {
      return month;
    }
  }

  set month(value) {
    this._month = normalize(month);
  }

  get month() {
    return this._month;
  }
}

let myMonth = new Month(10);
myMonth.month = 32;
console.log(myMonth.month);
// 12

class Radian {
  constructor(radians) {
    this.radians = radians;
  }

  static createFromDegrees(degrees) {
    return new Radian(degrees / 180 * Math.PI);
  }
}

class Vehicle {
  constructor(fuel, efficiency = 1) {
    this.fuel = fuel;
    this.efficiency = efficiency;
  }
  refuel(amount) { this.fuel += amount; }
  move(distance) { this.fuel -= distance * this.efficiency; }
}

class Car extends Vehicle {
  constructor(fuel) { super(fuel, 1 / 20); }
  refuel(amount) {
    super.refuel(amount);
    if (this.fuel > 10) { this.fuel = 10; }
  }
}

let car = new Car(10);
car.move(100);
console.log(car.fuel);
// 5
car.refuel(10);
console.log(car.fuel);
// 10

class Card {
  // ...
}

class Deck extends Card {
  // ...
}

class Deck {
  constructor(cards) {
    this.cards = cards;
  }
}

class Base { // ... }
class Derived extends Base { // ... }

let b = new Base();
let d = new Derived();

console.log(b instanceof Base);
// true
console.log(b instanceof Derived);
// false
console.log(d instanceof Base);
// true
console.log(d instanceof Derived);
// true
