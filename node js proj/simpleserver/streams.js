//readbale stream 
//writeable stream 

var fs = require('fs');
var readable = fs.createReadStream('input.text');
var data = '';
readable.setEncoding('UTF8');
readable.on('data',function(chunk){
	data= data+chunk;
});

readable.on('end',function(){
	console.log("this is data" + data);
});


//writeable stream 
var writeData = "Hello world";
var writeStream = fs.createWriteStream('output.text');
writeStream.write(writeData,'UTF8');
writeStream.end();
writeStream.on('finish',function(){
	console.log("weite complete");
})