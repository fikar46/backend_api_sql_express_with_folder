const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'fikar46',
    password: 'dgrayman123',
    database: 'boxfood',
    port: 3306
});

module.exports = conn;