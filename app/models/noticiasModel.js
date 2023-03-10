function Noticias(connection){
    this._connection = connection;

}

Noticias.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias',callback);
}

Noticias.prototype.getNoticia = function(callback) {
    this._connection.query('select * from noticias where id_noticia = 1',callback);
}


Noticias.prototype.salvarNoticias = function(noticias,callback) {
    this._connection.query('insert into noticias set ?',noticias,callback);
}

Noticias.prototype.get5UltimasNoticas = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc limit 5',callback);
}

module.exports = function(){
    return Noticias;
};