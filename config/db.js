/*const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.SERVER,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a MySQL:', err);
        return;
    }
    console.log('Conectado a la base de datos correctamente.');
});

module.exports = db;*/

const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST,       
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT),
  //agregar opciones de pool
  waitForConnections: true,
  connectionLimit: 10,    
  queueLimit: 0
  // Puedes ajustar este número según lo necesites
});

db.getConnection((err, connection) => {
    if (err) {
      console.error('❌ Error al conectar a la base de datos:', err.message);
    } else {
      console.log('✅ Conexión a la base de datos establecida correctamente.');
      connection.release(); // libera el slot en el pool
    }
  });

module.exports = db;