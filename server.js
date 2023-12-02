// server.js

var http = require('http');
var path = require('path');
var fs = require('fs');

var serveStatic = require('serve-static');

var port = process.env.PORT || 3000;
var app = next({dev: false}); 

var serve = serveStatic(path.join(__dirname, 'out'));

http.createServer(function (req, res) {
  // Serve Next.js pages
  app.getRequestHandler()(req, res);  

  // Serve static assets
  serve(req, res, function () {
    // Render app content if no static file found 
    app.render(req, res, '/'); 
  }); 

}).listen(port);

console.log('Listening on port ' + port);