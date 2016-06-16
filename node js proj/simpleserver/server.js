

// var server = http.createServer(function(req,res){
// res.end('this is hello world');


// });

// server.listen ('8080');

// console.log('this is web simple server i developed');

var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

var mimetypes = {
	"html" :"text/html",
	"jpeg": "image/jpg",
	"jpg" :"image/jpg",
	"png": "image/png",
	"js":"text/javascript",
	"css":"text/css"
};

//Create server 

http.createServer(function(){

	var uri = url.parse(req.url).pathname;
	var fileName= path.join(process.cwd(),unescape(uri));
	console.log("loading"+uri);

	var stats;
	try{
		stats = fs.lstatSync(fileName);

	}catch{
		res.writeHead(404,{'ContentType':'text/plain'});
		res.write('404 not found');
		res.end();
		return;

	}

	//if file or directory

	if(stats.isFile()){
		var mimeType = mimetypes[path.extname(fileName).split(".").reverse()[0]];
		res.writeHead(200,{'ContentType':mimeType});
		var fileStream = fs.readFile(fileName);
		fileStream.pipe(res);
	}

	})
})