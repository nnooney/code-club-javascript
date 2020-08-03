const loop = function (value, test, update, body) {
  for (; test(value); value = update(value)) {
    body(value);
  }
}
