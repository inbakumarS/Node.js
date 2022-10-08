const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    console.log(res.end('hello arjun'));
});
//console.log('arjun');
server.listen(3000);
console.log('Server running on port 3000');