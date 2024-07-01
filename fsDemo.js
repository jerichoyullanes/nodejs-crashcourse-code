// import fs from 'fs'; // for Async and Sync
import fs from 'fs/promises'; // for Promises

// 4 WAYS TO DO READ FILE FUNCTION
// 1. readFile() - Callback | Aynchronouse Version
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log("From Async Version:", data);
// });

// 2. readFileSync() - Synchronouse Version
// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log("From Sync Version:", data); 

// 3. readFile() - Promise Version
// fs.readFile('./test.txt', 'utf-8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// 4. readFile() - Async/Await Version
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};


// writeFile() - to write in a file
// const writeFile = async () => {
//     try {
//         await fs.writeFile('./test.txt', 'Hello, I am writing to this file');
//         console.log('File written to...');
//     } catch (error) {
//         console.log(error); 
//     }
// };

// appendFile() - to write in a file without overwriting
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\n This is appended text');
        console.log('File appended to...');
    } catch (error) {
        console.log(error);
    }
};

// writeFile();
appendFile();
readFile();