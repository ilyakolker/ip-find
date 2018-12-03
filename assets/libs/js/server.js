const http = require('http');
const request = require('./request')
http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var a = request.run();
    res.end(JSON.stringify(a) )
    //run();
}).listen(8080, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8080/');
