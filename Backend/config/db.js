const mysql = require("mysql2")
require('dotenv').config();

const db = mysql.createConnection(process.env.MYSQL_URI)
// const db = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DB,
//     port: process.env.MYSQL_PORT,
//     waitForConnections: true,
//     connectionLimit: 5,
//     queueLimit: 0,
// })


module.exports = db;