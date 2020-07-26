function deepEqual(val1, val2) {
  if (typeof val1 == "object" && val1 != null && typeof val2 == "object" && val2 != null) {
    if (Object.keys(val1).length != Object.keys(val2).length) {
      return false;
    }
    for (key of Object.keys(val1)) {
      if (!key in Object.keys(val2)) {
        return false;
      }
      if (deepEqual(val1[key], val2[key]) == false) {
        return false;
      }
    }
    return true;
  } else {
    return val1 === val2;
  }
}
