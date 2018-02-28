var service = require("../services/Student_Default_ActivityService")
var logger = require("../config/logger")



module.exports.create_Student = function(req, res) {
  var Student = req.body;

  //method name
  // parameter to be covered
  //def=bug level -- > name of fucntion & i/p parameters & Main entity
logger.info("req : create Student in the controller",Student)
// logger.info(create_student ,)
  service.create_Student(Student,function (student){
  if(student == '' || student == undefined || student == null )   
{
      logger.debug(" res : created Student is either empty or null in the controller");
      res.status(204);
      res.json(student);
    }
  else if(student._doc || student.length > 0 ){
     logger.info("res : created Student in the controller",student._doc)
     res.status(201);
     res.json(student);
  }
  else{
    logger.error("res : cannot created Student in controller");
     res.status(500)
     res.json(student);
  }

  });
}


module.exports.update_Student = function(req, res) {
  var Student = req.body;
  logger.info("req : Update Student in the controller",Student)
  service.update_Student(Student,function (student){
  if(student == '' || student == undefined || student == null )   
{
      logger.debug(" res : Studentdetail updated  is either empty or null in the controller ");
      res.status(204);
      res.json(student);
    }
  else if(student._doc || student.length > 0 ){
     logger.info("res : Studentdetail updated  in the controller",student._doc)
     res.status(200);
     res.json(student);
  }
  else{
    logger.error("res : cannot Studentdetail updated  in controller");
     res.status(500)
     res.json(student);
  }

  });
}
module.exports.search_Student_for_update = function(req, res) {
  var Student_id = req.params.id;
  logger.info("req : search Student for update in the controller",Student_id)
  service.search_Student_for_update(Student_id,function (student){
  if(student == '' || student == undefined || student == null )   
{
      logger.debug(" res : search Student for update details is obtained is either empty or null in the controller ");
      res.status(304);
      res.json(student);
    }
  else if(student._doc || student.length > 0 ){
     logger.info("res : search Student for update details is obtained in the controller",student._doc)
     res.status(202);
     res.json(student);
  }
  else{
    logger.error("res : cannot search Student for update details is obtained in controller");
     res.status(500)
     res.json(student);
  }

  });
}
module.exports.delete_Student = function(req, res) {
  var Student_id = req.params.id;
  logger.info("req : deleteStudent in the controller",Student_id)
  service.delete_Student(Student_id,function (student){
  if(student == '' || student == undefined || student == null )   
{
      logger.debug(" res : Student deleted is either empty or null in the controller ");
      res.status(204);
      res.json(student);
    }
  else if(student._doc || student.length > 0 ){
     logger.info("res : Student deleted in the controller",student._doc)
     res.status(204);
     res.json(student);
  }
  else{
    logger.error("res : cannot Student deleted in controller");
     res.status(500)
     res.json(student);
  }

  });
}
module.exports.get_all_Student = function(req, res) {
  logger.info("req : get all Student in the controller")
  service.get_all_Student(function (student){
  if(student == '' || student == undefined || student == null )   
{
      logger.debug(" res : get all Studentdetails  is either empty or null in the controller ");
      res.status(204);
      res.json(student);
    }
  else if(student._doc || student.length > 0 ){
     logger.info("res : get all Studentdetails  in the controller",student._doc)
     res.status(200);
     res.json(student);
  }
  else{
    logger.error("res : cannot get all Studentdetails  in controller");
     res.status(500)
     res.json(student);
  }

  });
}