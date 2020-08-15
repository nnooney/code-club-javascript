let dog = {
  name: "Air Bud",
  age: 2,
  bark: function () {
    console.log("woof");
  }
}

dog.bark();

////////////////////////////////////////////////////

let dog = {
  name: "Air Bud",
  age: 2,
  bark: function () {
    console.log(this.name, " says woof");
  },
  growUp: function () {
    this.age++;
  }
}

console.log(dog.age);
dog.bark();
dog.growUp();
console.log(dog.age);

///////////////////////////////////////////////////////

const walk = function (distance) {
  console.log("You walk", this.name, distance);
}
walk.call(dog, "5 blocks");

////////////////////////////////////////////////////////

let dog = {
  name: "Air Bud",
  age: 3,
  diet: [
    { name: "breakfast", food: "kibble", amount: "1 cup", },
    { name: "dinner", food: "kibble", amount: "1.5 cups", },
    { name: "treats", food: "jerky", amount: "2 pieces", },
  ],
  badFeed: function (meal) {
    this.diet.find(function (dietItem) {
      if (dietItem.name == meal) {
        console.log("You feed", this.name, dietItem.amount, "of", dietItem.food);
        return true;
      }
      return false;
    });
  },
  goodFeed: function (meal) {
    this.diet.find((dietItem) => {
      if (dietItem.name == meal) {
        console.log("You feed", this.name, dietItem.amount, "of", dietItem.food);
        return true;
      }
      return false;
    });
  }
}

dog.badFeed("breakfast");
dog.goodFeed("breakfast");

///////////////////////////////////////////////////////

let dogPrototype = {
  bark: function () {
    console.log(this.name, " says woof");
  },
  growUp: function () {
    this.age++;
  },
  feed: function (meal) {
    this.diet.find((dietItem) => {
      if (dietItem.name == meal) {
        console.log("You feed", this.name, dietItem.amount, "of", dietItem.food);
        return true;
      }
      return false;
    });
  }
}

let dog1 = Object.create(dogPrototype);
dog1.name = "Air Bud";
dog1.age = 4;
dog1.diet = [/* ... */];

let dog2 = Object.create(dogPrototype);
dog2.name = "Toto";
dog2.age = 2;
dog2.diet = [/* ... */];

dog1.bark();
dog2.bark();

////////////////////////////////////////////////////////////

const makeDog = function (name, age, diet) {
  let dog = Object.create(dogPrototype);
  dog.name = name;
  dog.age = age;
  dog.diet = diet;
  return dog;
}

let dog1 = makeDog("Air Bud", 5, [/* ... */]);
let dog2 = makeDog("Toto", 3, [/* ... */]);

dog1.bark();
dog2.bark();

/////////////////////////////////////////////////////////////

const Dog = function (name, age, diet) {
  this.name = name;
  this.age = age;
  this.diet = diet;
}
Dog.prototype.bark = function () {
  console.log(this.name, " says woof");
};
Dog.prototype.growUp = function () { /* ... */ }
Dog.prototype.feed = function () { /* ... */ }

let dog1 = new Dog("Air Bud", 6, [/* ... */]);
let dog2 = new Dog("Toto", 4, [/* ... */]);

dog1.bark();
dog2.bark();

//////////////////////////////////////////////////////////////

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

let dog1 = new Dog("Air Bud", 6, [/* ... */]);
let dog2 = new Dog("Toto", 4, [/* ... */]);

dog1.bark();
dog2.bark();
