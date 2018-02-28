var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Student_schema = new mongoose.Schema({
   id: {type : Number},
   created_by: {type : Number}, 
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()},
   name:{type : Number}
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
Student_schema.plugin(autoIncrement.plugin,{ model: 'Student', startAt: 1 });
module.exports = mongoose.model('Student', Student_schema);
