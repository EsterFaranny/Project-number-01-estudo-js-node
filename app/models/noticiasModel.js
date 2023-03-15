function Noticias(connection){
    this._connection = connection;

}

Noticias.prototype.getNoticias = function(callback){
    this._connection.query('select * from noticias order by data_criacao desc',callback);
}

Noticias.prototype.getNoticia = function(id_noticia,callback) {
    this._connection.query('select * from noticias where id_noticia =' + id_noticia.id_noticia,callback);
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