var loggerDao = require("../daos/loggerInfoDao");
var logInformation = require("../config/dailylogger");

module.exports.createlogger = function(logger , callback){
    loggerDao.createLogger(logger , function(loggerDetails){
        // console.log("create logger in service calling getbyid ---->>>> ",loggerDetails);
        // loggerInfo.getLoggerByID(loggerDetails._id);
        logInformation.getLoggerByID(loggerDetails._id);
        callback(loggerDetails);
    })
}