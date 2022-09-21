
module.exports = function(){
    this.getNoticias = function(connection,calback){
        connection.query('select * from noticias',calback);
    };

    this.getNoticia = function(connection,calback) {
        connection.query('select * from noticias where id_noticia = 1',calback);
    };

    this.salvarNoticias = function(noticias,connection,calback) {
        connection.query('insert into noticias set ?',noticias,calback);
    };

    return this;
};