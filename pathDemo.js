import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

// basename() - return last portion of path
console.log("Base name: ", path.basename(filePath));

// dirname() - return the directory path name
console.log("\nDirectory name: " ,path.dirname(filePath));

// extname() - return extension name
console.log("\nExtenstion name: ", path.extname(filePath));

// parse() - return the object of path
console.log("\nPath Object: ", path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
console.log("\nFile Path with File name:", __filename,"\nFile Path name:", __dirname);

// join() - join() concatenates each argument with OS specific separators
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// resolve() - resolve each argument with root and produce output
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);