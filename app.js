var app = require('./config/server')
var rotaNoticias = require('./app/routes/noticias.js')(app);

var rotaHome = require('./app/routes/home.js')(app);

var rotaForm = require('./app/routes/formulario_inclusao_noticia.js')(app);

app.listen(3000, function(){
  console.log('Servidor ON');
});
    


