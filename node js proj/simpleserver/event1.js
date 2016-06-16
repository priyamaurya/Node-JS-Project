var event = require('events');
var eventEmitter = new event.EventEmitter();

var ringBell= function(){
	console.log("this occur when event occurs");
}

eventEmitter.on('bellrings', ringBell);
eventEmitter.on('bellbell', function(message){
		console.log(message);

});
eventEmitter.emit('bellrings');

eventEmitter.emit('bellbell','openTheDoor');

