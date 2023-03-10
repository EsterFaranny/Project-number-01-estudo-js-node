var dbConnection = require('../../config/dbConnection');

module.exports.list_noticias = function(application, req, res){
    var connection = dbConnection()
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.getNoticias(function(error, result){
        res.render('noticias/noticias',{noticias: result});
    });
}


module.exports.list_noticia = function(application, req, res){
    var connection = dbConnection()
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.getNoticia(function(error, result){ 
       res.render('noticias/noticia',{noticia: result});
    });   
}