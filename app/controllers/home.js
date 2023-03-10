var dbConnection = require('../../config/dbConnection');

module.exports.page_home = function(application, req, res){
    var connection = dbConnection()
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.get5UltimasNoticas(function(error, result){
        res.render('home/index',{noticias: result}); 
        console.log(result);
    });

  
};