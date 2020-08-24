function runRobotSteps(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      return turn;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  let robot1score = 0;
  let robot2score = 0;
  for (let task = 0; task < 100; task++) {
    let state = VillageState.random(10);
    robot1score += runRobotSteps(state, robot1, memory1);
    robot2score += runRobotSteps(state, robot2, memory2);
  }
  console.log("Robot 1 avg score (100 tasks):", robot1score / 100);
  console.log("Robot 2 avg score (100 tasks):", robot2score / 100);
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
