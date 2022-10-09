const http=require('http');

const routes=require('./route')

console.log(routes.sometext);

const server=http.createServer(routes.handler);
server.listen(3001);