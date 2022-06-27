var http = require('http');

var server = http.createServer( function(req, res){

   var categoria = req.url;
   
   if(categoria =='/tecnologia'){
      res.end('<html><body>Noticias de Tecnologia</body></html>');
   }else if(categoria =='/moda'){
      res.end('<html<body>Noticias de Moda</body></html>')
   }else{
      res.end('<html><body>Criando um site de noticiais</body></html>');
   }
});
server.listen(3000);

console.log('Servidor rodando na porta 3000 !')

/******************************************************************************************/