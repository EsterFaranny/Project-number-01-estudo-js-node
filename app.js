var express = require('express');
var app = express()
var msg = require('./modulo_teste.js');

app.set('view engine','ejs');

app.get('/',function(req,res){
  res.render('home/index.ejs');
});

app.get('/formulario_inclusao_noticia',function(req,res){
  res.render('admin/form_add_noticia.ejs');
});

app.get('/noticias',function(req,res){
  res.render('noticias/noticias.ejs');
});


app.listen(3000, function(){
    console.log('Servidor rodando com Express');
});
    
console.log(msg);

