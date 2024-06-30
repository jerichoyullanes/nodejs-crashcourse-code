// SAMPLE of ES MODULES
// import { getPosts } from "./postController.js"; // if function is export not default
// import getPosts from "./postController.js"; // if the function is export default
import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());

console.log("Posts Length:", getPostsLength());

// SAMPLE of COMMON JS MODULES
// For exporting single function
// const generateRandomNumber = require('./utils'); 

// For exporting multiple function
// const { generateRandomNumber, celciusToFahrenheit } = require('./utils'); 

// console.log(`Random Number: ${generateRandomNumber()}`);

// console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(0)}`);