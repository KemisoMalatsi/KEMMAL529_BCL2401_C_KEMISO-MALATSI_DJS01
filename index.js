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
        throw new Error('Velocity must be a postive number!')
    }

    if (typeof accelarationInMetersPerSecondSquare !== 'number' || accelarationInMetersPerSecondSquare < 0){
        throw new Error('Acceleration must be a positive number!')
    }

    if (typeof timeInSeconds !== 'number' || timeInSeconds < 0){
        throw new Error('Time must be a positive number!')
    }
    if(typeof distaceInKilometers !== 'number' || distaceInKilometers < 0){
        throw new Error('Warning: Distance must be a positive number!')
    } 
    if (typeof InitialFuelInKilograms !== 'number' || InitialFuelInKilograms < 0){
        throw new Error('Warning: Fuel level too low or Invalid Input!')
    }  
    if(fuelBurnRatePerSecond !== 'number' || fuelBurnRatePerSecond < 0 ) {
        throw new Error('Warning: Petrol pump is malfactioning or enter the correct value!')
    }
}   

checkParameters();

// function to calculate new didtance
function calcNewDistance(distaceInKilometers, velocityInKilometersPerHour, timeInSeconds){
    return distaceInKilometers + (distaceInKilometers * timeInSeconds);
}

// function to calculate the remaining fuel
function calcRemainingFuel (InitialFuelInKilograms, timeInSeconds) {
    return InitialFuelInKilograms - (fuelBurnRatePerSecond * timeInSeconds);
}

// function to calculate new velocity
function calcNewVelocity(accelarationInMetersPerSecondSquare, velocityInKilometersPerHour, timeInSeconds){
    return velocityInKilometersPerHour + (accelarationInMetersPerSecondSquare * timeInSeconds);
}

const newDistance = calcNewDistance(distaceInKilometers, velocityInKilometersPerHour, timeInSeconds); //calcultes new distance
const remainingFuel = calcRemainingFuel(InitialFuelInKilograms, timeInSeconds); //calculates remaining fuel
const newVelocity = calcNewVelocity(accelarationInMetersPerSecondSquare, velocityInKilometersPerHour, timeInSeconds); //calculates new velocity based on acceleration


console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);



