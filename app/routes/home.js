module.exports = function(application){
    application.get('/',function(req,res){
       application.app.controllers.home.page_home(application, req, res)
    });
}; 
    