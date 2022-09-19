var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

   var connection = dbConnection()

   app.get('/noticia',function(req,res){

      connection.query('select * from noticias where id_noticia = 1',function(error, result){ 
      
         res.render('noticias/noticia',{noticia: result});
      });   
   });
};
    