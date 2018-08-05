const http = require('http');
const url = require('url');

const port = 3000;
const host = 'localhost';

const server = http.createServer((request, response) => {    const parsedUrl = url.parse(request.url, true);
    const trimmedPath = parseAndTrimmPath(request);
    const method = parseHttpMethod(request);
    
    sendResponse(response);

    console.log(`request received on path ${ trimmedPath } with method ${ method }`)
});

server.listen(port, host, () => {
    console.log(`server up and running on port ${ port }`);
});

const parseHttpMethod = (request) => request.method;

const parseAndTrimmPath = (request) => {
    const parsedUrl = url.parse(request.url, true);
    return trimmPath(parsedUrl.pathname);
}

const trimmPath = (path) => path.replace(/^\/+|\/$/g, '');

const sendResponse = (response) => {
    response.end('Hello World\n');
}
