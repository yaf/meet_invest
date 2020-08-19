// Create Node server
let http = require('http');

let server = http.createServer(function(request, response) {
  response.writeHead(200);
  response.end('Salut tout le monde');
});

server.listen(8080);
