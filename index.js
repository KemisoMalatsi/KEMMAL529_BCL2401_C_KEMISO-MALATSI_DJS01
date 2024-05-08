/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocityInKilometersPerHour = 10000; // velocity (km/h)
const accelarationInMetersPerSecondSquare = 3; // acceleration (m/s^2)
const timeInSeconds = 3600; // seconds (1 hour)
const distaceInKilometers = 0; // distance (km)
const fuelInKilograms = 5000; // remaining fuel (kg)
const fuelBurnRatePerSecond = 0.5; // fuel burn rate (kg/s)


const newDistance = distaceInKilometers + (velocityInKilometersPerHour * timeInSeconds) //calcultes new distance
const remainingFuel = fuelBurnRatePerSecond * timeInSeconds //calculates remaining fuel
const newVelocity = calcNewVel(acc, velocityInKilometersPerHour, timeInSeconds) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
calcNewVel = (velocityInKilometersPerHour, accelarationInMetersPerSecondSquare, timeInSeconds) => velocityInKilometersPerHour + (accelarationInMetersPerSecondSquare * timeInSeconds);


console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






