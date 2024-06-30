import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {

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

    try {
        // Check if GET request
        if(req.method == 'GET') {
            // Sample Code to create a router
            if (req.url === '/') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>Homepage</h1>');
            } else if(req.url === '/about') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>About</h1>');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<h1>Page not found</h1>');
            }
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