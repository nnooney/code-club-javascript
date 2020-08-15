function isPrime(item);
function primeItems(cart);
function makeCouponFunction(type, discount);
function applyCoupon(cart, couponFunction);
function totalCost(cart);

let listItem = { value: 0, rest: 0 };
let script = {
  name: 0,
  ranges: 0,
  direction: 0,
  year: 0,
  living: 0,
  link: 0
};
let countByResult = { name: 0, count: 0 };
let item = { name: 0, type: 0, category: 0, price: 0 };

let personType = { firstName: 0, lastName: 0 };

let carly = { firstName: "Carly", lastName: "Rickarby" };
let kirstin = { firstName: "Kirstin", lastName: "Rickarby" };
let krista = { firstName: "Krista", lastName: "Williamson" };
let larry = { firstName: "Larry", lastName: "McGrail" };

function greet(person) {
  if (person != null && person.hasOwnProperty('firstName') &&
    person.hasOwnProperty('lastName')) {
    console.log("Hello,", person.firstName, person.lastName);
  }
}

greet(carly);
greet(kirstin);
greet(krista);
greet(larry);

let students = [carly, kirstin, krista, larry];
students.forEach(greet);
