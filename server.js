var express = require('express'),
    fs = require('fs')
    url = require('url');
var app = express();

app.configure(function(){
  app.use('/', express.static(__dirname + '/'));  
  app.use(express.static(__dirname + '/')); 
});

app.post('/receive', function(request, respond) {
    var body = '';
    filePath = __dirname + '/workshop/data.txt';
    request.on('data', function(data) {
        body += data;
    });

    request.on('end', function (){
        fs.appendFile(filePath, body, function() {
            respond.end();
        });
    });
});

app.listen(8080);