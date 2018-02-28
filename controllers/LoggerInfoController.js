var loggerService = require("../services/LoggerInfoService");

module.exports.createLogger = function(req , res){
    var logger = req.body;
    loggerService.createlogger(logger , function(loggerDetails){
        res.status(201);
        res.json(loggerDetails);
    })
}