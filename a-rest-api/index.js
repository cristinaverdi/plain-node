const http = require('http');
const url = require('url');

const port = 3000;
const host = 'localhost';

const server = http.createServer((request, response) => {    const parsedUrl = url.parse(request.url, true);
    const trimmedPath = parseAndTrimmPath(request);
    const method = parseHttpMethod(request);
    const query = parseQueryString(request);

    logRequestDetails(trimmedPath, method, query);

    sendResponse(response);
});

server.listen(port, host, () => logSuccessMessage());

const parseHttpMethod = (request) => request.method;
const parseAndTrimmPath = (request) => {
    const parsedUrl = parseUrl(request);
    return trimmPath(parsedUrl.pathname);
}
const parseQueryString = (request) => parseUrl(request).query;
const parseUrl = (request) => url.parse(request.url, true);
const trimmPath = (path) => path.replace(/^\/+|\/$/g, '');
const sendResponse = (response) =>  response.end('Hello World\n');
const logSuccessMessage = () => console.log(`server up and running on port ${port}`);
const logRequestDetails = (path, method, query) => {
    console.log(`request received on ->\n
    Path: ${ path }\n 
    Method: ${ method }\n
    Query: ${ JSON.stringify(query) }\n`);
}
