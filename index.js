/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const givenParams = {
    velocityInKilometersPerHour: 10000, // velocity (km/h)
    accelarationInMetersPerSecondSquare: 3, // acceleration (m/s^2)
    timeInSeconds: 3600, // seconds (1 hour)
    distaceInKilometers: 0, // distance (km)
    initialFuelInKilograms: 5000, // remaining fuel (kg)
    fuelBurnRatePerSecond: 0.5 // fuel burn rate (kg/s)
};


// Check if correct values are parsed

function checkParameters(params) {
    const { velocityInKilometersPerHour, accelerationInMetersPerSecondSquared, timeInSeconds, distanceInKilometers, initialFuelInKilograms, fuelBurnRatePerSecond } = params;
    if (typeof velocityInKilometersPerHour !== 'number' && velocityInKilometersPerHour < 0){
        throw new Error('Velocity must be a postive number!')
    }

    if (typeof accelerationInMetersPerSecondSquared !== 'number' && accelerationInMetersPerSecondSquared < 0){
        throw new Error('Acceleration must be a positive number!')
    }

    if (typeof timeInSeconds !== 'number' && timeInSeconds < 0){
        throw new Error('Time must be a positive number!')
    }
    if(typeof distanceInKilometers !== 'number' && distanceInKilometers < 0){
        throw new Error('Warning: Distance must be a positive number!')
    } 
    if (typeof initialFuelInKilograms !== 'number' && initialFuelInKilograms < 0){
        throw new Error('Warning: Fuel level too low or Invalid Input!')
    }  
    if(fuelBurnRatePerSecond !== 'number' && fuelBurnRatePerSecond < 0 ) {
        throw new Error('Warning: Petrol pump is malfactioning or enter the correct value!')
    }
}   

checkParameters(givenParams);

// function to calculate new didtance
function calcNewDistance({distaceInKilometers, velocityInKilometersPerHour, timeInSeconds}){
    const velocityInKilometersPerSeconds = velocityInKilometersPerHour  // convert from km/h to km/s
    return distaceInKilometers + (velocityInKilometersPerHour * (timeInSeconds/3600));
}

// function to calculate the remaining fuel
function calcRemainingFuel ({initialFuelInKilograms, fuelBurnRatePerSecond,timeInSeconds}) {
    return initialFuelInKilograms - (fuelBurnRatePerSecond * timeInSeconds);
}

// function to calculate new velocity
function calcNewVelocity({accelarationInMetersPerSecondSquare, velocityInKilometersPerHour, timeInSeconds}){
    return velocityInKilometersPerHour + (accelarationInMetersPerSecondSquare * timeInSeconds)*3.6; //convert to hours
}

const newDistance = calcNewDistance(givenParams); //calcultes new distance
const remainingFuel = calcRemainingFuel(givenParams); //calculates remaining fuel
const newVelocity = calcNewVelocity(givenParams); //calculates new velocity based on acceleration


console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);



