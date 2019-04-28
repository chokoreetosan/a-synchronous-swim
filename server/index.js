
//allows our server to look for key presses in the terminal
require('./js/keypressHandler').initialize();

//refering to the server-side httpHandler file that will need to be addressed
const httpHandler = require('./js/httpHandler');

const http = require('http');
//where we create the server in node, and we hand off that router
//allows us to run that fxn on every request that comes into our server
const server = http.createServer(httpHandler.router);

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip); //telling server to listen at designated port# and IP

//our feedback that the server is running
console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);
