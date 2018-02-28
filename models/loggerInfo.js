var mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');


var loggerInfo = new mongoose.Schema({

id       : {type : Number},
loglevel : {type : String},
dirname  : {type : String},
filename : {type : String},
created_by: {type : Number},
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()}

},{
    versionKey : false
});
autoIncrement.initialize(mongoose);
loggerInfo.plugin(autoIncrement.plugin,{ model: 'logger', startAt: 1 });
module.exports = mongoose.model('logger', loggerInfo);
