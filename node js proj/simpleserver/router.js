function route(pathname,handle,res,reviewdata){
	console.log("route the path" +pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](res,reviewdata);
	}else{
		console.log("no handler");
		res.writeHead(404,{'ContentType':'text/plain'});
		res.write("no page found");
		res.end();
	}
}

exports.route=route;