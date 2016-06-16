var http = require('http');

http.createServer(function(req,res){
res.writeHead(200,{"ContentType":"text/plain"});
res.write("thi is new server");
res.end();
}).listen(8080);