
// var winston = require('winston');
// var expressWinston = require('express-winston');
// require('winston-daily-rotate-file');

// var loggerDao = require("../daos/loggerInfoDao");
// var loggerDetails;
// exports.getLoggerByID = function (loggerid, callback) {
//     loggerDao.getLoggerByID(loggerid, function (logger) {
//         console.log("entering getLoggerID in service----------", logger)
//         loggerDetails = logger;

//         console.log("after getloggerid in service------------>>>>>", loggerDetails);

//         expressWinston.requestWhitelist.push('_parsedOriginalUrl', 'body');
//         expressWinston.responseWhitelist.push('body');
//         var dailylogger = expressWinston.logger({
//             transports: [
//                 new (winston.transports.DailyRotateFile)({
//                     level: 'info', // includes: error, warn, info and excludes: debug and silly
//                     dirname: './log',
//                     filename: './log',
//                     datePattern: 'yyyy-MM-dd.',
//                     prepend: true,
//                     logstash: true,
//                     handleExceptions: true,
//                     json: true,
//                     maxsize: 5242880, //5MB
//                     maxFiles: 5,
//                     colorize: false
//                 }),
//                 new winston.transports.Console({
//                     json: true,
//                     colorize: true
//                 })
//             ],
//             msg: "{{req.clientId ? req.clientId : 'admin'}}",
//             statusLevels: false, // default value
//             level: function (req, res) {
//                 var level = "";
//                 if (res.statusCode >= 100) { level = "info"; }
//                 if (res.statusCode >= 400) { level = "warn"; }
//                 if (res.statusCode >= 500) { level = "error"; }
//                 return level;
//             },
//             exitOnError: false
//         })
//         module.exports.dailylogger;
//     })
// }
// // console.log("after getloggerid in service------------>>>>>",loggerDetails);

// // expressWinston.requestWhitelist.push('_parsedOriginalUrl', 'body');
// // expressWinston.responseWhitelist.push('body');
// // var dailylogger = expressWinston.logger({
// //     transports: [
// //       new (winston.transports.DailyRotateFile)({
// //         level: 'error', // includes: error, warn, info and excludes: debug and silly
// //         dirname: './log',
// //         filename: './log',
// //         datePattern: 'yyyy-MM-dd.',
// //         prepend: true,
// //         logstash: true,
// //         handleExceptions: true,
// //         json: true,
// //         maxsize: 5242880, //5MB
// //         maxFiles: 5,
// //         colorize: false
// //       }),
// //       new winston.transports.Console({
// //         json: true,
// //         colorize: true
// //       })
// //     ],
// //     msg: "{{req.clientId ? req.clientId : 'admin'}}",
// //     statusLevels: false, // default value
// //     level: function (req, res) {
// //       var level = "";
// //       if (res.statusCode >= 100) { level = "info"; }
// //       if (res.statusCode >= 400) { level = "warn"; }
// //       if (res.statusCode >= 500) { level = "error"; }
// //       return level;
// //     },
// //     exitOnError: false
// //   })

// //    exports = dailylogger;