import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';
const PORT = process.env.PORT;

const server = http.createServer( async (req, res) => {

    // Sample codes to input or output in server
    // res.write('Hello World!');
    // res.end();
    // or
    // res.end('Hello World!');

    // Sample codes to set Header and output to server
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // res.end('<h1> Hello World! </h1>');
    // or
    // res.writeHead(500, { 'Content-Type': 'application/json' });
    // res.end(JSON.stringify({message: 'Server Error'}));
    // or
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end('<h1> Hello World! </h1>');
    
    // Sample codes to see request url and request method
    // console.log(req.url);
    // console.log(req.method);

    // Get current path ( if using Common JS Modules )
    // __filename
    // __dirname

    // Get current path ( for ES Modules )
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    console.log(`File name: ${__filename}`);
    console.log(`Directory name: ${__dirname}`);

    try {
        // Check if GET request
        if(req.method == 'GET') {
            let filePath;

            // Sample Code to create a router
            if (req.url === '/') {
                // res.writeHead(200, { 'Content-Type': 'text/html' });
                // res.end('<h1>Homepage</h1>');
                //  use this instead for fs module...
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if(req.url === '/about') {
                // res.writeHead(200, { 'Content-Type': 'text/html' });
                // res.end('<h1>About</h1>');
                //  use this instead for fs module...
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                // res.writeHead(404, { 'Content-Type': 'text/html' });
                // res.end('<h1>Page not found</h1>');
                //  use this instead for fs module...
                throw new Error('Not Found');
            }

            const data = await fs .readFile(filePath);
            res.setHeader('Content-type', 'text/html');
            res.write(data);
            res.end();
        } else {
            throw new Error('Method not allow');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Server Error');
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});