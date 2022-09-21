var dbConnection = require('../../config/dbConnection');

module.exports = function(application){
    application.get('/formulario_inclusao_noticia',function(req,res){
        res.render('admin/form_add_noticia');
    });
    
    application.post('/noticias/salvar',function(req,res){
        var noticias = req.body;
        //res.send(noticias);

        var connection = dbConnection();

        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.salvarNoticias(noticias,connection,function(error, result){
            res.redirect('/noticias');
      });
    });
};