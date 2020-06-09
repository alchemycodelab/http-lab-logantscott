module.exports = rawRequest => {
  // https://www.w3.org/Protocols/rfc2616/rfc2616-sec5.html
  const request = rawRequest.split('\r\n\r\n');
  const [method, path] = request[0].split(' ');
  const body = request[request.length - 1];
  // console.log(request);
  const parsedRequest = {
    method: method,
    path: path
  };
  // if last line is CRLF do nothing, else set body
  if(request[request.length - 1] !== '') parsedRequest.body = body;
  return parsedRequest;
};
