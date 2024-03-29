const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // const readStream = fs.createReadStream('./static/index.html');
    // res.writeHead(200, {'Content-type': 'text/html'});

    // const readStream = fs.createReadStream('./static/example.json');
    // res.writeHead(200, {'Content-type': 'application/json'});

    const readStream = fs.createReadStream('./static/beach.png');
    res.writeHead(200, {'Content-type': 'image/png'});

    readStream.pipe(res);
})

server.listen(8080);