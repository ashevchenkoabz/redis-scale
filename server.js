var express = require('express')
var config = require('./config');
var log = require('./lib/logger');


var fs = require('fs');

var app = express();

app.use(express.bodyParser());
app.use(express.cookieParser());

var server = require('http').createServer(app);
server.listen(config.webServer.port, function(){
    log.info('Express server listening port ' + config.webServer.port);
});


app.get('/', function(req, res){
    var stream = fs.createReadStream('./index.html');
    stream.pipe(res);
});

var io = require('./middleware/io')(server);

app.set('io', io);

