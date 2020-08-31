const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin",
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop", "Marketplace-Farm",
  "Marketplace-Post Office", "Marketplace-Shop",
  "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

const roadObject = {
  "Alice's House": ["Bob's House", "Cabin", "Post Office"],
  "Bob's House": ["Alice's House", "Town Hall"],
  "Cabin": ["Alice's House"],
  "Post Office": ["Alice's House", "Marketplace"],
  "Town Hall": [
    "Bob's House",
    "Daria's House",
    "Marketplace",
    "Shop",
  ],
  "Daria's House": ["Ernie's House", "Town Hall"],
  "Ernie's House": ["Daria's House", "Grete's House"],
  "Grete's House": ["Ernie's House", "Farm", "Shop"],
  "Farm": ["Grete's House", "Marketplace"],
  "Shop": [
    "Grete's House",
    "Marketplace",
    "Town Hall",
  ],
  "Marketplace": [
    "Farm",
    "Post Office",
    "Shop",
    "Town Hall",
  ],
}

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) return p;
        return { place: destination, address: p.address };
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState(
  "Post Office",
  [{ place: "Post Office", address: "Alice's House" }]
);
let next = first.move("Alice's House");

console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);
// → Post Office

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function (parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place == address);
    parcels.push({ place, address });
  }
  return new VillageState("Post Office", parcels);
};

runRobot(VillageState.random(), randomRobot);

const mailRoute = [
  "Alice's House", "Cabin", "Alice's House", "Bob's House",
  "Town Hall", "Daria's House", "Ernie's House",
  "Grete's House", "Shop", "Grete's House", "Farm",
  "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
  if (memory.length == 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

// find the shortest path through `graph` starting at `from` and ending at `to`.
function findRoute(graph, from, to) {
  // Work is a data structure that we'll use to keep track of how we navigate
  // through the graph. It contains an array of objects; each object contains
  // a place in the graph (called 'at'), and the route starting at `from` and
  // ending at `at`. We initialize it with the starting location `from` and an
  // empty route.
  let work = [{ at: from, route: [] }];

  // Loop over the entire array of work. Note that we continually add new
  // objects to the work array, so it will loop more than once.
  for (let i = 0; i < work.length; i++) {

    // Create temporary variables called 'at' and 'route' to hold the members of
    // the current object we're examining.
    let { at, route } = work[i];

    // Look at all of the adjacent places to our `at` location.
    for (let place of graph[at]) {

      // If the adjacent `place` is our final destination `to`, then add the
      // `place` to our temporary `route` variable and return it. The route goes
      // `from` -> ... -> `at` -> `to`.
      if (place == to) return route.concat(place);

      // Otherwise, check if we don't already have a work object for `place`. If
      // there isn't one, add it to the end of the work array so we check it
      // later.
      if (!work.some(w => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

// DEMO
let state = VillageState.random();
runRobotAnimation(state, nearestGoalOrientedRobot, []);
//runRobotAnimation(state, pickupDeliverRobot, []);

// COMPARE
//compareRobots(pickupDeliverRobot, [], goalOrientedRobot, []);
//compareRobots(nearestGoalOrientedRobot, [], goalOrientedRobot, []);
//compareRobots(pickupDeliverRobot, [], nearestGoalOrientedRobot, []);
