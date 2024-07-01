import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// URL Object
const urlObj = new URL(urlString); // Return an object of URL information

console.log(urlObj);

// format() - takes the URL object and converts it back into a string
console.log(url.format(urlObj));

// import.meta.url - gives the file URL of the current module
console.log(import.meta.url);

// fileURLToPath() - converts a file URL to a regular file path
console.log(url.fileURLToPath(import.meta.url));

// Access the search parameters from the URL object
console.log(urlObj.search);

const params = new URLSearchParams(urlObj.search); // Create a URLSearchParams object from the search query string
console.log(params); // Log the URLSearchParams object
console.log(params.get('q')); // Log the value of the 'q' parameter

// Append a new parameter to the URLSearchParams object
params.append('limit', '5');
console.log(params); // Log the URLSearchParams object after appending

// Delete the parameter from the URLSearchParams object
params.delete('limit');
console.log(params); // Log the URLSearchParams object after deleting