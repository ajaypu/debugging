// http : Launch a server, send requests
// https : Launch a SSL server
// fs : file system
//

const http = require("http");

const server = http.createServer((request, response) => {
  console.log(request);
});

server.listen(4000);
console.log("Ajay Prakash");
