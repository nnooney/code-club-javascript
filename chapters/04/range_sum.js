function range(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

function sum(arr) {
  let result = 0;
  for (let element of arr) {
    result += element;
  }
  return result;
}

function range(start, end, step = 1) {
  // Consider 3 cases: step = 0; step > 0; step < 0

  // Case 1: step = 0
  if (step == 0) {
    return [];
    // Case 2: step > 0. Start must be less than end.
  } else if (step > 0 && start > end) {
    return [];
    // Case 3: step < 0. Start must be greater than end.
  } else if (step < 0 && start < end) {
    return [];
  }

  let result = [];
  let i = start;
  while (true) {
    result.push(i);
    if (i == end) {
      break;
    }
    i += step;
  }
  return result;
}

function sum(arr) {
  return arr.reduce((accumulator, element) => accumulator + element);
}
