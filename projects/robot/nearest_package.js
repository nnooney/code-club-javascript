function nearestGoalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = findNearestParcel(roadGraph, place, parcels);
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

// A function to find the nearest parcel in the `parcels` array to
// `position`, using `graph` to search for parcels. Here, parcels is just an
// array of parcels to search for, not an array of packages.
function findNearestParcel(graph, startingPlace, parcels) {
  // Keep track of the places we've already looked at.
  let checkedPlaces = [];

  // Keep track of the next place to look at. We'll add neighboring places to
  // this array to keep checking parcels.
  let placesToCheck = [startingPlace];

  // If there are no more places to check, then we have exhausted the entire
  // graph without finding a parcel.
  while (placesToCheck.length > 0) {

    // Start by checking the first place in the placesToCheck array.
    let nextPlace = placesToCheck.shift();

    // If a package is located at that place, then return it!
    if (parcels.map(p => p.place).includes(nextPlace)) {
      return parcels.find(p => p.place == nextPlace);
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
