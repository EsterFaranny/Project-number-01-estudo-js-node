var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

   var connection = dbConnection()

   app.get('/noticias',function(req,res){

      var noticiasModel =  app.app.models.noticiasModel;
         noticiasModel.getNoticias(connection,function(error, result){
         res.render('noticias/noticias',{noticias: result});
      });
   });     
};
    