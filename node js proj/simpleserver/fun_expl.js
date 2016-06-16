
var second = function(a){

console.log(a);
}

function first(second1,value){

second1(value);
}

first(function second(a){console.log(a)},"hello");