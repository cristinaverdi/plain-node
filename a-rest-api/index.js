const http = require('http');
const url = require('url');

const port = 3000;
const host = 'localhost';

const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true);
    
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/$/g, '');

    const method = request.method;

    console.log(method);
    
    response.end('Hello World\n');

    console.log(`request received on path ${ trimmedPath } with method ${ method }`)
});

server.listen(port, host, () => {
    console.log(`server up and running on port ${ port }`);
});
