// an initial implementation
const isEven = function (n) {
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else {
    return isEven(n - 2);
  }
}

// adding handling for negative numbers
const isEven = function (n) {
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  } else if (n < 0) {
    return isEven(n + 2);
  } else {
    return isEven(n - 2);
  }
}
