const _ = require('lodash');
function calculateFuel(module) {
  return Math.floor(module / 3) - 2;
}

function calculateFuelRecursive(module) {
  const fuelAmount = calculateFuel(module);
  if (fuelAmount > 0) {
    return fuelAmount + calculateFuelRecursive(fuelAmount);
  } else {
    return 0;
  }
}

function calculateFuelAll(modules) {
  return _(modules).map(calculateFuel).sum();
}

function calculateFuelRecursiveAll(modules) {
  return _(modules).map(calculateFuelRecursive).sum();
}

module.exports = {part1: calculateFuelAll,
                  part2: calculateFuelRecursiveAll };
