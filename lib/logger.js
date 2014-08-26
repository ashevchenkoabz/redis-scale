var winston = require('winston');

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({ timestamp: true, colorize: true }),
        new (winston.transports.File)({ filename: __dirname + '/../logs/logs.log', json: false, colorize: false, name: 'all', maxsize: 10485760 }),
        new (winston.transports.File)({ filename: __dirname + '/../logs/warn.log', json: false, colorize: false, level: 'warn', name: 'warn' }),
        new (winston.transports.File)({ filename: __dirname + '/../logs/error.log', json: false, colorize: false, level: 'error', name: 'error' })
    ],
    exceptionHandlers: [
        new (winston.transports.Console)({ json: false, timestamp: true }),
        new (winston.transports.File)({ filename: __dirname + '/../logs/exceptions.log', json: false, timestamp: true }),
    ],
    exitOnError: true
});

module.exports = logger;