import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {

    // sample code
    // res.write('Hello World!');
    // res.end();
    // or
    // res.end('Hello World!');

    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    // res.end('<h1> Hello World! </h1>');
    // or
    
    // res.writeHead(500, { 'Content-Type': 'application/json' })
    // res.end(JSON.stringify({message: 'Server Error'}));

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<h1> Hello World! </h1>');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});