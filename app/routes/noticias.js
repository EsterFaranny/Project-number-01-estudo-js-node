var dbConnection = require('../../config/dbConnection');

module.exports = function(application){

   application.get('/noticias',function(req,res){
      var connection = dbConnection()
      var noticiasModel = new application.app.models.noticiasModel(connection);

         noticiasModel.getNoticias(function(error, result){
         res.render('noticias/noticias',{noticias: result});
      });
   });     
};
    