var Student_schema = require("../models/Student")
var logger = require("../config/logger");
// var logger = require("../daos/dailylogger")(module);
  module.exports.create_Student = function(Student,callback) {
  var Student = new Student_schema(Student)
  logger.info("req : create Student in the dao",Student)
  Student.save( function(error , Student) {
    if (error) {
  logger.error("res : cannot create Student in the dao",error)
      callback(error);
    }
    else if(Student === null || Student === undefined || Student.length === 0){
      logger.debug(" created Student is either undefined or null in the dao ")
      callback(Student);
    }
     else {
  logger.info("res :  created Student in the dao",Student._doc)
      callback(Student);
    }
  });
}
  module.exports.update_Student = function(Student,callback) {
  logger.info("req : update Student in the dao",Student)
  Student_schema.findOneAndUpdate({ _id:Student._id },{ $set:Student},{ upsert: true, new: true },  function(error , Student) {
    if (error) {
  logger.error("res : cannot update Student in the dao",error)
      callback(error);
    }
    else if(Student === null || Student === undefined || Student.length === 0){
      logger.debug(" updated Student details obtained is either undefined or null in the dao ")
      callback(Student);
    }
     else {
  logger.info("res :  updated Student details obtained in the dao",Student._doc)
      callback(Student);
    }
  });
}
  module.exports.search_Student_for_update = function(Student_id,callback) {
  logger.info("req : search Student for update in the dao",Student_id)
  Student_schema.findById({ _id: Student_id },  function(error , Student) {
    if (error) {
  logger.error("res : cannot search Student for update in the dao",error)
      callback(error);
    }
    else if(Student === null || Student === undefined || Student.length === 0){
      logger.debug(" search Student for update details obtained is either undefined or null in the dao ")
      callback(Student);
    }
     else {
  logger.info("res :  search Student for update details obtained in the dao",Student._doc)
      callback(Student);
    }
  });
}
  module.exports.delete_Student = function(Student_id,callback) {
  logger.info("req : delete Student in the dao",Student_id)
  Student_schema.findByIdAndRemove(Student_id,  function(error , Student) {
    if (error) {
  logger.error("res : cannot delete Student in the dao",error)
      callback(error);
    }
    else if(Student === null || Student === undefined || Student.length === 0){
      logger.debug(" deleted Student is either undefined or null in the dao ")
      callback(Student);
    }
     else {
  logger.info("res :  deleted Student in the dao",Student._doc)
      callback(Student);
    }
  });
}
  module.exports.get_all_Student = function(callback) {
  logger.info("req : get all Student in the dao")
  Student_schema.find( function(error , Student) {
    if (error) {
  logger.error("res : cannot get all Student in the dao",error)
      callback(error);
    }
    else if(Student === null || Student === undefined || Student.length === 0){
      logger.debug(" get all Student details obtained is either undefined or null in the dao ")
      callback(Student);
    }
     else {
  logger.info("res :  get all Student details obtained in the dao",Student._doc)
      callback(Student);
    }
  });
}