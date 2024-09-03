const mysql = require('mysql2');

// Create a MySQL connection pool to manage multiple connections
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cars'
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  if (connection) connection.release();
  console.log('Connected to MySQL database');
});

module.exports = db;
