var dbConnection = require('../../config/dbConnection');

module.exports = function(app){
   app.get('/noticia',function(req,res){
      var connection = dbConnection()
      var noticiasModel = app.app.models.noticiasModel;

      noticiasModel.getNoticia(connection,function(error, result){ 
         res.render('noticias/noticia',{noticia: result});
      });   
   });
};
    