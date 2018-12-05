
var http = require('http');
var request = require('./request')
http.createServer(function(req, res) {

    req.on('end', function() {

        request.run();


    });
  }
).listen(8080);



