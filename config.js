const dotenv = require("dotenv");
const mysql = require("mysql");

dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  debug: true,
});

module.exports = pool;
