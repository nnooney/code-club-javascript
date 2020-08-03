// More information about for ... of ...
// The two for loops below do exactly the same things, and the variable
// 'element' has the value at each iteration in both loops. Over time,
// programmers would loop over an array an operate on each element in the array
// so often that it made sense to introduce shorter syntax to do this. Be aware
// that this shorter syntax can only be used when iterating forward through all
// of the items in the array; it cannot go through part of the array and it
// cannot go over the elements backwards.
let array = ["one", "two", "three"];

for (let i = 0; i < array.length; i++) {
  let element = array[i];
  console.log(element);
}

for (let element of array) {
  console.log(element);
}

// In order to understand how code works, it's helpful to write out the values
// of the variables as they change. This is a map of the variables as they
// change in the function arrayToList with the array [10, 20]. See 04/list.js
// for the code of arrayToList(). Note that I'm only writing out the variables
// that I define or change throughout the function.

// begin arrayToList([10, 20])
list = null
// for loop i = 0
node = { value: 20, rest: null }
list = { value: 20, rest: null }
// for loop i = 1
node = { value: 10, rest: { value: 20, rest: null } }
list = { value: 10, rest: { value: 20, rest: null } }
// end

// It's also helpful to think of other examples of what you can call a function
// with. Here is another list that can be used to call listToArray.
list = { value: "pink", rest: { value: "purple", rest: null } }

// begin listToArray(list)
arr = []
// while list != null
arr = ["pink"]
list = { value: "purple", rest: null }
// while list != null
arr = ["pink", "purple"]
list = null
// end

// Finding the pattern in recursion. In order to make a recursive version of
// nth, it is important to discover a pattern where something could be looped
// over. For arrays, you can loop over the elements. In objects, you can loop
// over the keys. In this list data structure, you can also loop over the "rest"
// key. Below is what each iteration of colors looks like.

// Note: I've renamed list to colors to demonstrate a concrete example. We'll
// return to using list once we generalize the solution.
colors = { value: "pink", rest: { value: "purple", rest: { value: "blue", rest: null } } }
colors.rest = { value: "purple", rest: { value: "blue", rest: null } }
colors.rest.rest = { value: "blue", rest: null }
colors.rest.rest.rest = null

// Next, you need to determine how to "advance the loop". In the recursive
// method, I find it easiest to call the function for each "iteration",
// providing the remaining arguments so that the same value is returned in each
// case. Below are two examples for returning "purple" and "blue".

nth(colors, 1) = "purple"
nth(colors.rest, 0) = "purple"

nth(colors, 2) = "blue"
nth(colors.rest, 1) = "blue"
nth(colors.rest.rest, 0) = "blue"

// From here the pattern emerges that each successive iteration adds a ".rest"
// and subtracts 1 from the number. Now I can generalize the solution to using
// 'list' and 'num'
nth(list, num) == nth(list.rest, num - 1);

// Therefore, the function will use recursion like this:
function nth(list, num) {
  // ...
  return nth(list.rest, num - 1);
}

// Why do we need to guard for undefined? Let's try it with an example. When
// dealing with recursion, the variables that get created are the parameters to
// each function call.

nth({ value: "pink", rest: { value: "purple", rest: { value: "blue", rest: null } } }, 5)
nth({ value: "purple", rest: { value: "blue", rest: null } }, 4)
nth({ value: "blue", rest: null }, 3)
nth(null, 2)
