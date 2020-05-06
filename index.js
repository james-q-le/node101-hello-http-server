const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.write('Hello World');
  res.end();
}).listen(8080, 'localhost');

console.log('Server is listening on localhost:8080 Received GET request for: /')