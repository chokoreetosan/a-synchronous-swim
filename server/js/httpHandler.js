const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

//helper function to return a random move, so every time a request comes in, we generate a random move (until we connect to terminal)
function getRandomMove() {
  const moves = ['up', 'down', 'left', 'right']
  var i = Math.floor( Math.random() * moves.length );
  return moves[i];
}

module.exports.router = (req, res, next = ()=>{}) => {

  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  console.log('testing .....')

  //writing a route at our server at our '/moves' endpoint to handle GET requests to respond w/ a move

  if (req.method === 'OPTIONS'){
    res.writeHead(200, headers);
    res.end();
  }else if (req.method === 'GET'){
   // lets node know that request is successfully being responded to
    if (req.url === '/moves'){
      res.writeHead(200, headers);

      //getting it to respond w/ a move
      res.write(getRandomMove()) //write it onto the response itself

      res.end();   //how to close a status request
   }else if(req.method === 'POST'){

    res.writeHead(200, headers);

    res.end();

   }
 }

  // next();
};
