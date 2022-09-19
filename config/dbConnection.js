var mysql = require('mysql');

module.exports = function(){
   return connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'portal_noticias'
   });
}
   