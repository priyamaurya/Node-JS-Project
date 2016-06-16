console.log(__filename);
console.log(__dirname);


function second(){
	console.log("this is called in set timeout ");
}
//setTimeout(second,5000);

setInterval(second, 2000);