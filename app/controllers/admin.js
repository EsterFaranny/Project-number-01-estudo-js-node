//instancia para o servidor/requição/resposta
var dbConnection = require('../../config/dbConnection');
const { format } = require('mysql');


module.exports.formulario_inclusao_noticia =  function (application, req, res){
    res.render('admin/form_add_noticia',{validacao:{}, noticias:{}});
};

module.exports.noticias_salvar =  function (application, req, res){
    var noticias = req.body;
    
    req.assert('titulo','Titulo obrigatório !').notEmpty();
    req.assert('resumo','Resumo obrigaório !').notEmpty();
    req.assert('autorName','Autor obrigatório !').notEmpty();
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
};



