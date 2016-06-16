var server = require('./server1.js');
var router = require('./router');
var handler = require('./handler');

var handle = {};

handle["/home"] = handler.home;
handle["/review"] = handler.review;
server.startServer(router.route,handle);