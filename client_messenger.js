var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:3000');
console.log('Type messages to send them to another user');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    ws.send(line);
})
