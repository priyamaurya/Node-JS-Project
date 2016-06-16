
var querystring = require('querystring');
function home(res){
	console.log("executinh  home");
	var htmlfile = "<html>"+
"<head>"+
"<meta charset='UTF-8'>"+

		"<title>Node- About html</title>"+
"</head>"+
"<body>"+
"<form action='/review' method='post'>"+
	"<textarea name='text'' id='text1' cols='30' rows='10'></textarea>"+
	"<input type='submit' value = 'submitText'>"+
"</form>"+
"</body>"+
"</html>";

res.writeHead(200,{'Content-Type':'text/HTML'});
res.write(htmlfile);
res.end();
}

function review(res,reviewdata){
	console.log("review handler");
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("your review data is "+ querystring.parse(reviewdata).text);
	res.end();
}
module.exports = {

	'home':home,
	'review':review
}