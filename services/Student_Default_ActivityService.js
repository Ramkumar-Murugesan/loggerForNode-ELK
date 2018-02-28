var dao = require("../daos/Student_Default_ActivityDao")
var logger = require("../config/logger")
module.exports.create_Student = function(Student,callback) {
  logger.info("req : create Student in the service",Student)
 dao.create_Student(Student,function (student){
     if(student == '' || student == undefined || student == null )   
    {
      logger.debug(" res : created Student is either empty or null in the service ");
       callback(student);

    }
  else if(student._doc || student.length > 0){
     logger.info("res : created Student in the service",student._doc)
      var id = student._id;
      student.id = id;
   
      callback(student);
    }
    else{
      logger.error("cannot created Student in the service")
       callback(student);

    }

  });
}
module.exports.update_Student = function(Student,callback) {
  logger.info("req : update Student in the service",Student)
 dao.update_Student(Student,function (student){
     if(student == '' || student == undefined || student == null )   
    {
      logger.debug(" res : updated Student is either empty or null in the service ");
       callback(student);

    }
  else if(student._doc || student.length > 0){
     logger.info("res : updated Student in the service",student._doc)
      var id = student._id;
      student.id = id;
   
      callback(student);
    }
    else{
      logger.error("cannot updated Student in the service")
       callback(student);

    }

  });
}
module.exports.search_Student_for_update = function(Student_id,callback) {
  logger.info("req : search Student for update in the service",Student_id)
 dao.search_Student_for_update(Student_id,function (student){
     if(student == '' || student == undefined || student == null )   
    {
      logger.debug(" res : search Student for update obtained is either empty or null in the service ");
       callback(student);

    }
  else if(student._doc || student.length > 0 ){
     logger.info("res : search Student for update obtained in the service",student._doc)
      var id = student._id;
      student.id = id;
      callback(student)   

    }
    else{
      logger.error("cannot search Student for update obtained in the service")
       callback(student);

    }
  });
}
module.exports.delete_Student = function(Student_id,callback) {
  logger.info("req : delete Student in the service",Student_id)
 dao.delete_Student(Student_id,function (student){
     if(student == '' || student == undefined || student == null )   
    {
      logger.debug(" res : deleted Student is either empty or null in the service ");
       callback(student);

    }
  else if(student._doc || student.length > 0){
     logger.info("res : deleted Student in the service",student._doc)
   
      callback(student);
    }
    else{
      logger.error("cannot deleted Student in the service")
       callback(student);

    }

  });
}
module.exports.get_all_Student = function(callback) {
  logger.info("req : get all Student values in the service")
 dao.get_all_Student(function (list_of_student){
     if(list_of_student == '' || list_of_student == undefined || list_of_student == null )   
    {
      logger.debug(" res : get all Student values are obtained is either empty or null in the service ");
       callback(list_of_student);

    }
  else if(list_of_student._doc || list_of_student.length > 0 ){
     logger.info("res : get all Student values are obtained in the service",list_of_student._doc)
      var count = 0;
       for(var i = 0; i<list_of_student.length; i++){
       var id = list_of_student[i]._id; 
       list_of_student[i].id = id;
       count ++;
       }
       if(list_of_student.length === count)
      callback(list_of_student)   

    }
    else{
      logger.error("cannot get all Student values are obtained in the service")
       callback(list_of_student);

    }
  });
}