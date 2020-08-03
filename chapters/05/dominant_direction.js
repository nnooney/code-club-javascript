function dominantDirection(text) {
  // This is the same start as the textScripts example, except that we want to
  // return an object with the direction and count instead of the name and
  // count.
  let directions = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");

  // At this point, directions looks something like this:
  //  [{ name: "ltr", count: 8}, {name: "rtl", count: 5}]
  // The reduce pattern allows us to collapse the array into a single value.
  // Instead of returning a total, I chose to return the largest (in terms of
  // count).
  return directions.reduce((majority, test) => {
    return test.count > majority.count ? test : majority;
  }).name;
  // We only want to return the name property of the largest object, not the
  // whole object itself.
}
