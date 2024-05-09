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
const InitialFuelInKilograms = 5000; // remaining fuel (kg)
const fuelBurnRatePerSecond = 0.5; // fuel burn rate (kg/s)

// Check if correct values are parsed

function checkParameters() {
    if (typeof velocityInKilometersPerHour !== 'number' || velocityInKilometersPerHour < 0){
        throw new Error('Invalit Input')
    }

    if (typeof accelarationInMetersPerSecondSquare !== 'number'){
        throw new Error('Invalid Input')
    }

    if (typeof timeInSeconds !== 'number' || timeInSeconds<0){
        throw new Error('Invalid Input')
    }
    if(typeof distaceInKilometers !== 'number' || distaceInKilometers < 0){
        throw new Error('Invalid Input')
    } 
    if (typeof InitialFuelInKilograms !== 'number' || InitialFuelInKilograms < 0){
        throw new Error('Invalid Input')
    }  
    if(fuelBurnRatePerSecond <= 0.4){
        throw new Error('Warning: Petrol pump malfactioning')
    }
}   

checkParameters();

/*
const newDistance = distaceInKilometers + (velocityInKilometersPerHour * timeInSeconds); //calcultes new distance
const remainingFuel = fuelBurnRatePerSecond * timeInSeconds; //calculates remaining fuel
const newVelocity = calcNewVel(accelarationInMetersPerSecondSquare, velocityInKilometersPerHour, timeInSeconds); //calculates new velocity based on acceleration


// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(accelarationInMetersPerSecondSquare, velocityInKilometersPerHour, timeInSeconds){
    return velocityInKilometersPerHour + (accelarationInMetersPerSecondSquare * timeInSeconds)
}

 function calcNewDistance(fuelBurnRatePerSecond, timeInSeconds) {
    return fuelBurnRatePerSecond * timeInSeconds
 }




console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
*/


