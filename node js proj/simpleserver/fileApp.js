var fs = require('fs');

//asynchronous

fs.readFile('input.text',function(error,data){
if(error){
	console.log("error occurred "+error);
}
else{
	console.log("async data read is" + data.toString());
}
});

//synchronous reading 

var data = fs.readFileSync('input.text');
console.log("data is " + data.toString());
