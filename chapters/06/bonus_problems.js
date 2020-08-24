class Animal {
  constructor(sound) {
    this.sound = sound;
  }

  makeNoise() {
    console.log(this.sound);
  }
}

class Cow extends Animal {
  constructor() {
    super("moo");
  }
}

class Chicken extends Animal {
  constructor() {
    super("cluck");
  }
}

class Pig extends Animal {
  constructor() {
    super("oink");
  }
}

class Farm {
  constructor(owner, animals) {
    this.owner = owner;
    this.animals = animals;
  }

  sing() {
    for (let animal of this.animals) {
      console.log(`Old ${this.owner} had a farm. E-I-E-I-O!`);
      console.log(`And on ${this.owner}'s farm there was a ${animal.constructor.name}. E-I-E-I-O!`);
      console.log(`With a ${animal.sound}-${animal.sound} here`);
      console.log(`And a ${animal.sound}-${animal.sound} there`);
      console.log(`Here a ${animal.sound}, there a ${animal.sound}`);
      console.log(`Everywhere a ${animal.sound}-${animal.sound}`);
      console.log(`Old ${this.owner} had a farm. E-I-E-I-O!`);
      console.log("\n");
    }
  }
}

// Part 1
let animals = [new Cow(), new Chicken()];
animals.forEach((animal) => animal.makeNoise());
// moo
// cluck

// Part 2
animals.push(new Pig());
animals.forEach((animal) => animal.makeNoise());
// moo
// cluck
// ...

// Part 3
let farm = new Farm("MacDonald", animals);
farm.sing();
