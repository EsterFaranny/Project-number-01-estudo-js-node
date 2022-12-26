const { format } = require('mysql');
var dbConnection = require('../../config/dbConnection');

module.exports = function(application){
    application.get('/formulario_inclusao_noticia',function(req,res){
        res.render('admin/form_add_noticia',{validacao:{}});
    });
    
    application.post('/noticias/salvar',function(req,res){
        var noticias = req.body;
        console.log(noticias)
        req.assert('titulo','Titulo obrigatório !').notEmpty();
        req.assert('resumo','Resumo obrigaório !').notEmpty();
        req.assert('autorName','Autor obrigatório !').notEmpty();
        req.assert('data_noticia','Data obrigatória !').notEmpty().isDate({format:'YYYY-MM-DD'});
        req.assert('data_criacao','Data obrigatória !').notEmpty().isDate({format:'YYY-MM-DD'});
        req.assert('noticia','Notícia obrigatória !').notEmpty();
        
        
        //se ocorrer um erro a pagina não prossegue com a conexão com o banco, realizando o return
        var erros =  req.validationErrors();
        console.log(erros)
        if(erros){                                //rotulo:jsonerror)
            res.render('admin/form_add_noticia',{validacao:erros,noticias :noticias});
            return;
        }
        
        //Conexão
        var connection = dbConnection();

        var noticiasModel = new application.app.models.noticiasModel(connection);

        noticiasModel.salvarNoticias(noticias,function(error, result){
            res.redirect('/noticias');
      });
    });
};