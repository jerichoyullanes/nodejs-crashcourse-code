// SAMPLE OF COMMON JS MODULES

function generateRandomNumber () {
    return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celcius) {
    return (celcius * 9 / 5) + 32;
}

// For exporting single function
// module.exports = generateRandomNumber; 

// For exporting multiple function
module.exports = {
    generateRandomNumber,
    celciusToFahrenheit,
}
