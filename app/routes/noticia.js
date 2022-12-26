var dbConnection = require('../../config/dbConnection');

module.exports = function(application){
   application.get('/noticia',function(req,res){
      var connection = dbConnection()
      var noticiasModel = new application.app.models.noticiasModel(connection);

      noticiasModel.getNoticia(function(error, result){ 
         res.render('noticias/noticia',{noticia: result});
      });   
   });
};
    