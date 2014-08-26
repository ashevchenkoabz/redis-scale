module.exports = function(server){

    var io = require('socket.io').listen(server);
    var redis = require('socket.io-redis');
    var crypto = require('crypto');
    var log = require('./../../lib/logger');
    var _ = require('underscore');

//    var db = redis.createClient();
//
//    db.on("error", function (err) {
//        log.error("Redis error: " + err);
//    });
    io.adapter(redis({ host: 'localhost', port: 6379 }));

    io.set('authorization', function (handshake, callback) {
        callback(null, true);
    })

    io.on('connection', function (socket) {

        log.info(socket.id + ' connected');

        socket.on('data', function (data) {
            socket.broadcast.emit('data', data)
            log.info(data);
        })

    });


};


