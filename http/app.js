const http = require('http');
const url = require('url');

//create a server object:
const server = http.createServer((req, res) => {
    let query = url.parse(req.url, true).query;
    let text = query.year + ' ' + query.month;

    if (req.url === '/') {
        res.write('Hello World'); //write a response to the client
        res.end(); //end the response
    } else {
        res.write('other route'); 
        res.write('\n');
        res.write(text);
        res.end();
    }
    
})

server.listen(8080); //the server object listens on port 8080