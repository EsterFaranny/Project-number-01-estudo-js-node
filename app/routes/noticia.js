var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
   app.get('/noticia',function(req,res){
      var connection = dbConnection()
      var noticiasModel = new app.app.models.noticiasModel(connection);

      noticiasModel.getNoticia(function(error, result){ 
         res.render('noticias/noticia',{noticia: result});
      });   
   });
};
    