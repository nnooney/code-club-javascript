// initial implementation
const countBs = function (string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "B") {
      count++;
    }
  }
  return count;
}

// upgraded implementation
const countChar = function (string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      count++;
    }
  }
  return count;
}

const countBs = function (string) {
  return countChar(string, "B");
}
