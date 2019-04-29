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
  }
  if (req.method === 'GET' && req.url === '/moves'){
   // lets node know that request is successfully being responded to
      res.writeHead(200, headers);
      //getting it to respond w/ a move
      res.write(getRandomMove()) //write it onto the response itself
      res.end();   //how to close a status request
  }


  if(req.method === 'POST' && req.url === '/moves'){

    // res.write('post works');

    let body = '';

    req.on('data', (chunk)=> {
      body += chunk;
    }).on('end', ()=> {
      console.log(body.toString())
      res.writeHead(200, headers);
      res.write(body.toString())
      res.end();
    })

    // res.end();
  }
  if (req.method === 'GET' && req.url === '/background.jpg'){
    console.log("getting File");
    var {backgroundImageFile} = module.exports;

    fs.readFile(backgroundImageFile, (err, data) => {
      if (err) {
        res.writeHead(404);
      } else {
        res.writeHead(200, {
          'Content-Type': 'image/jpeg',
          'Content-Length': data.length
        });
        res.write(data, 'binary');
      }
      res.end();
      // next();
    });
   }

  if(req.method === 'POST' && req.url === '/background.jpg'){

    var imageData = Buffer.alloc(0);

    req.on('data', (chunk)=> {
      imageData = Buffer.concat([imageData, chunk])
    })

    req.on('end', () => {
      var file = multipart.getFile(imageData)

      var {backgroundImageFile} = module.exports;

      fs.writeFile(backgroundImageFile, file.data, (err) => {
        if (err) {
          res.writehead(400, headers)
          res.end()
        }else{
          res.writeHead(201,headers);
          res.end();
        }
      })
      res.writeHead(201, headers);
      res.end();
    })
  }
};
