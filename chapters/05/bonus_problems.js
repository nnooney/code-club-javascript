let cart = [
  { "name": "Biscuits", "type": "regular", "category": "food", "price": 2.0 },
  { "name": "Monitor", "type": "prime", "category": "tech", "price": 119.99 },
  { "name": "Mouse", "type": "prime", "category": "tech", "price": 25.50 },
  { "name": "dress", "type": "regular", "category": "clothes", "price": 49.90 },
]

function isPrime(item) {
  return item.type == "prime";
}

function primeItems(cart) {
  return cart.filter(isPrime);
}

function makeCouponFunction(type, discount) {
  return (item) => {
    if (item.type == type) {
      item.price *= discount;
    }
    return item;
  }
}

function applyCoupon(cart, couponFunction) {
  cart.map(couponFunction);
}

function totalCost(cart) {
  return cart.reduce((acc, item) => acc + item.price, 0);
}

applyCoupon(cart, makeCouponFunction("prime", 0.8));
console.log(totalCost(cart));
