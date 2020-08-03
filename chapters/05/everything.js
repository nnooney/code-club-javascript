function every(array, test) {
  // Your code here.
  for (element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}
