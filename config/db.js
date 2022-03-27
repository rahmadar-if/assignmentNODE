const mysql      = require('mysql2');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root1234',
  database : 'node_express',
  port     : '3306'
});

module.exports = connection;