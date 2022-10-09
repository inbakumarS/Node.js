const http=require('http');
const fs= require('fs');

const server=http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        fs.readFile("message.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
                console.log(err);
            }
    console.log(`data from file`+data);
    res.write('<html>');
    res.write('<head><title>my message</title></head>');
    res.write('<p>Welcome Home</p>');
    res.write(`<body>${data}</body>`);
    res.write(`<form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form>`);
    res.write('</html>')
    return res.end(); 
})  
    }
   else if(url==='/message' && method==='POST'){

        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            console.log('parsedBody>>>>>>>',parsedBody);
            const message=parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,(err)=>{
                if(err){
                    console.log(err);
                }
                console.log(`inside fs.writefile`);
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });

        }) ;
      
    }else{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><form action="/message" method="POST">Welcome to my Node Js project</body>');
    res.write('</html>')
    res.end();
    }
});
//console.log('arjun');
server.listen(3005);
