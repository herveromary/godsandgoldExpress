const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

module.exports = connection;
