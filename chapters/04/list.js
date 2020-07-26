function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    let node = {
      value: arr[i],
      rest: list
    };
    list = node;
  }
  return list;
}

function listToArray(list) {
  let arr = [];
  while (list != null) {
    arr.push(list.value);
    list = list.rest;
  }
  return arr;
}

function prepend(element, list) {
  let node = {
    value: element,
    rest: list,
  }
  return node;
}

function nth(list, index) {
  if (list == null) {
    return undefined;
  } else if (index == 0) {
    return list.value;
  }
  return nth(list.rest, index - 1);
}
