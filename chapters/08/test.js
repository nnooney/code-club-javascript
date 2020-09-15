function test(label, body) {
  if (!body()) console.log(`Failed: ${label}`);
}

mailRoute = ["A", "B", "C"];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

test("when the memory is empty", () => {
  return routeRobot({}, []) == { direction: "A", memory: ["B", "C"] };
})

test("when the memory is not empty", () => {
  let testMemory = ["K", "L", "M"];
  return routeRobot({}, testMemory) == { direction: "K", memory: ["L", "M"] }
})
