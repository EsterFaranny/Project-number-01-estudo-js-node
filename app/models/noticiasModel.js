module.exports = function(){
    this.getNoticias = function(connection,calback){
        connection.query('select * from noticias',calback);
    };

    this.getNoticia = function(connection,calback) {
        connection.query('select * from noticias where id_noticia = 1',calback);
    };

    return this;
};