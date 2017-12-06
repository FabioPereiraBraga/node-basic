
require("console-log-hello-world")

var http   = require('http');
var handle = require('./handle');
var name   = require('./name');
var events = require('events');
var emiter = new events.EventEmitter();


function say(){
  console.log('Im saying...');
}

emiter.on('say',say);
emiter.emit('say');

var server = http.createServer(handle);



server.listen(3000,function(){
  console.log('Server is listening as port 3000');
});
