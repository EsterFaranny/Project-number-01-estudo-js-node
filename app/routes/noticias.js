
module.exports = function(application){
   application.get('/noticias',function(req,res){
      application.app.controllers.noticias.list_noticias(application, req, res)
     
   });     

   application.get('/noticia',function(req,res){
     application.app.controllers.noticias.list_noticia(application, req, res)
   });
};
    