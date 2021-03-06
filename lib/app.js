const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');



const app = net.createServer(socket => {
  socket.on('data', data => {
    // a request was just sent to us
    const request = parseRequest(data.toString());
    const { path, method, body } = request;

    // Routes
    // console.log(path, method, body);
    if(method === 'GET' && path === '/') {
      // console.log('hello');
      socket.end(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));
    } else if(method === 'POST' && path === '/echo') {
      socket.end(createResponse({ body: body || 'echo', status: '200 OK', contentType: 'text/plain' }));
    } else if(method === 'GET' && path === '/red') {
      socket.end(createResponse({ body: '<html><body><h1 style="color: red">red</h1></body></html>', status: '200 OK', contentType: 'text/html' }));
    } else if(method === 'GET' && path === '/green') {
      socket.end(createResponse({ body: '<html><body><h1 style="color: green">green</h1></body></html>', status: '200 OK', contentType: 'text/html' }));
    } else if(method === 'GET' && path === '/blue') {
      socket.end(createResponse({ body: '<html><body><h1 style="color: blue">blue</h1></body></html>', status: '200 OK', contentType: 'text/html' }));
    } else {
      socket.end(createResponse({ body: '<html><body><h1>Not Found</h1></body></html>', status: '404 Not Found', contentType: 'text/html' }));
    }
  });
});

module.exports = app;
