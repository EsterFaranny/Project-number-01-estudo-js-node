module.exports = function(app){
    app.get('/formulario_inclusao_noticia',function(req,res){
        res.render('admin/form_add_noticia');
    });
    
    app.post('/noticias/salvar',function(req,res){
        var noticias = req.body;
        res.send(noticias);
    });
};