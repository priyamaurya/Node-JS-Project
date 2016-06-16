function first(){
console.log("this is first function");
}

function second(){

	console.log("this is second function");
}

//module.exports.first = first;
module.exports = {
	first :first,
	second :second
}