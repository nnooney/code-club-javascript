// Two functions are provided in the chapter: countBy and characterScript.
//  - characterScript accepts a number and returns the script object which
//    contains that number.
//  - countBy takes a string and a function parameter [1] and returns an array
//    of countResults [2].
//    - [1]: function is a function that accepts a character and returns a
//      string indicating the group it should be counted with.
//    - [2]: countResult is an object with the following properties:
//      - name: the name of the group (returned from [1])
//      - count: the number of characters belonging to that group

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
