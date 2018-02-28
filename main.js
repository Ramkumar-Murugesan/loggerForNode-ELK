var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require('mongoose');
var router = require("./routes/routes");
var logger = require("morgan");
var helmet = require('helmet')
var bodyParser = require('body-parser');
var app = express();
var clientPath = path.resolve(__dirname, "client");
var config = require('./config/config')
var loggerlevel = require("./config/logger_level")
var expressWinston = require('express-winston');
var winston = require('winston');
// var newlogger = require("./daos/dailylogger")
// require('winston-daily-rotate-file');
// var dailylogs = require("./config/dailylogger");


app.use(helmet())

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", 'www.geppettosoftware.com']
  }
}))

app.use(helmet.noCache())

app.use(helmet.frameguard({ action: 'sameorigin' }))

app.use(helmet.hidePoweredBy())


app.use(bodyParser.json({limit: '50mb'}))
app.use(logger("dev"));
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Content-Length, Authorization, X-Requested-With, X-XSRF-TOKEN");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if ( req.method === 'OPTIONS' ) {
    console.log('OPTIONS SUCCESS');
    res.end();
  }
  next();
});
var mongodb = config.database.dialect+'://'+config.database.host+'/'+config.database.name
var promise = mongoose.connect(mongodb, {
  useMongoClient: true,
});

app.use("/",express.static(clientPath));


// app.use(function(req, res, next) {
//   var ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
//   newlogger.log('info', req.method, req.url, ip);
//   // newlogger.log('info', res.method,res.url, ip);
//   next();
// });


// app.use(dailylogs);
// expressWinston.requestWhitelist.push('_parsedOriginalUrl', 'body');
// expressWinston.responseWhitelist.push('body');
// // express-winston logger makes sense BEFORE the router assignments.
// app.use(expressWinston.logger({
//   transports: [
//     new (winston.transports.DailyRotateFile)({
//       level: loggerlevel.level, // includes: error, warn, info and excludes: debug and silly
//       dirname: './log',
//       filename: './log',
//       datePattern: 'yyyy-MM-dd.',
//       prepend: true,
//       logstash: true,
//       handleExceptions: true,
//       json: true,
//       maxsize: 5242880, //5MB
//       maxFiles: 5,
//       colorize: false
//     }),
//     new winston.transports.Console({
//       json: true,
//       colorize: true
//     })
//   ],
//   msg: "{{req.clientId ? req.clientId : 'admin'}}",
//   statusLevels: false, // default value
//   level: function (req, res) {
//     var level = "";
//     if (res.statusCode >= 100) { level = "info"; }
//     if (res.statusCode >= 400) { level = "warn"; }
//     if (res.statusCode >= 500) { level = "error"; }
//     return level;
//   },
//   exitOnError: false
// }));
app.use("/api", router);
// app.use(expressWinston.errorLogger({
//   transports: [
//     new(winston.transports.DailyRotateFile)({

//       level: 'info', // includes: error, warn, info and excludes: debug and silly
//       dirname: './log',
//       filename: './log',
//       datePattern: 'yyyy-MM-dd.',
//       prepend: true,
//       logstash: true,
//       handleExceptions: true,
//       json: true,
//       maxsize: 5242880, //5MB
//       maxFiles: 5,
//       colorize: false


//     }),
//     new winston.transports.Console({
//       json: true,
//       colorize: true
//     })
//   ]
// }));


app.all('*', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, '/client/index.html'));
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Express server listening on port ' + port);