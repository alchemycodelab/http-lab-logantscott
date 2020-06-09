const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');



const app = net.createServer(socket => {
  socket.on('data', data => {
    // a request was just sent to us
    const request = parseRequest(data.toString());
    // console.log('hello');
    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
