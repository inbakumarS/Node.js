const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    const url=req.url;
    const method=req.method;
    if(url==='/'){
    res.write('<html>');
    res.write('<head><title>my message</title></head>');
    res.write('<p>Welcome Home</p>');
    res.write('<body><form action="/home" method="POST"><input type="text" value="Welcome home">Welcome home</form></body>');
    res.write('</html>')
      return res.end();
    }
    else if(url === "/home" && method === "POST"){
        res.write('<html>');
    res.write('<head><title>my home</title></head>');
    res.write('<p>Welcome about page</p>');
        res.write('<body><form action="/about" method="POST"><input type="text" value="Welcome to About Us page">Welcome to About Us page</form></body>');
        //res.write('<body>Welcome to About Us Page</body>');
    res.write('</html>')
        return res.end();
    }
    else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><form action="/message" method="POST">Welcome to my Node Js project</body>');
    res.write('</html>')
    res.end();
    }
});
//console.log('arjun');
server.listen(3000);
