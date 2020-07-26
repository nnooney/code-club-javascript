function reverseArray(arr) {
  let newArr = [];
  for (let i of arr) {
    newArr.unshift(i);
  }
  return newArr;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; ++i) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}
