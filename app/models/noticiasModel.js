function Noticias(connection){
    this._connection = connection;

}

Noticias.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias',callback);
}

Noticias.prototype.getNoticia = function(calback) {
    this._connection.query('select * from noticias where id_noticia = 1',calback);
}


Noticias.prototype.salvarNoticias = function(noticias,calback) {
    this._connection.query('insert into noticias set ?',noticias,calback);
}



module.exports = function(){
    return Noticias;
};