// A robot that picks up all of the packages, then delivers all of the packages.
function pickupDeliverRobot({ place, parcels }, route) {
  // If we're in the process of picking up/delivering a package, then continue
  // to do that.
  if (route.length != 0) {
    return { direction: route[0], memory: route.slice(1) };
  }

  // Otherwise, if we aren't carrying all of the packages, then pick up the
  // nearest one.
  if (parcels.some(p => p.place != place)) {
    // We need to find the nearest package to us, but filter out the packages we
    // already have so that findNearestLocation is guaranteed to lead us to a
    // new package.
    let nextPickup = findNearestLocation(roadGraph, place,
      parcels.filter(p => p.place != place).map(p => p.place));

    // Make a route to the next pickup.
    route = findRoute(roadGraph, place, nextPickup);
  }
  // Otherwise, we need to drop off the nearest package.
  else {
    // It's possible to reuse the findNearestLocation function, but instead we
    // can use the destination of the packages instead of their current
    // locations.
    let nextDropoff = findNearestLocation(roadGraph, place,
      parcels.map(p => p.address));

    // Make a route to the next dropoff.
    route = findRoute(roadGraph, place, nextDropoff);
  }

  // Start the new route we just created.
  return { direction: route[0], memory: route.slice(1) };
}

// A function to find the nearest location in the `locations` array to
// `position`, using `graph` to search for locations. Here, locations is just an
// array of locations to search for, not an array of packages.
function findNearestLocation(graph, startingPlace, locations) {
  // Keep track of the places we've already looked at.
  let checkedPlaces = [];

  // Keep track of the next place to look at. We'll add neighboring places to
  // this array to keep checking locations.
  let placesToCheck = [startingPlace];

  // If there are no more places to check, then we have exhausted the entire
  // graph without finding a location.
  while (placesToCheck.length > 0) {

    // Start by checking the first place in the placesToCheck array.
    let nextPlace = placesToCheck.shift();

    // If the place is in the locations array, then return it!
    if (locations.includes(nextPlace)) {
      return nextPlace;
    }
    // Otherwise, we need to check the neighbors that we haven't already checked
    else {
      for (let adjacentPlace of graph[nextPlace]) {
        // If we haven't checked this neighbor, then add it to the places to
        // check.
        if (!checkedPlaces.includes(adjacentPlace)) {
          placesToCheck.push(adjacentPlace);
        }
      }
    }

    // Remember to mark the place as checked!
    checkedPlaces.push(nextPlace);
  }
}

runRobotAnimation(VillageState.random(), pickupDeliverRobot, []);
