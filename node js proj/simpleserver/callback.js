console.log("thsi is 1st request");
console.log("thsi is 2nd request");
setTimeout(callback,5000);
console.log("thsi is 3rd request");
console.log("thsi is 4th request");
setTimeout(callback,5000);
console.log("thsi is 1st request");
console.log("thsi is 1st request");
console.log("thsi is 1st request");

function callback(){
	console.log("this iscallback function");
}