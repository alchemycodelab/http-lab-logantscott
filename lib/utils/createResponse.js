module.exports = ({ body = '<h1>hi there</h1>', contentType = 'text/html', status = '200 OK' }) => {
  // https://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html
  return `HTTP/1.1 ${status}
Content-Length: ${body.length}
Content-Type: ${contentType}

${body}`;
};
