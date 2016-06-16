var http = require('http');
var url = require('url');

function startServer(route,handle){

http.createServer(function(req,res){
	var reviewData = "";

		var pathname = url.parse(req.url).pathname;
		console.log("pathname" + pathname);
		req.setEncoding("UTF8");
req.addListener("data",function(chunk){
	reviewData +=chunk;
});
req.addListener("end", function(){

	route(pathname,handle,res,reviewData);

});
}).listen('8888');
}

exports.startServer =startServer;