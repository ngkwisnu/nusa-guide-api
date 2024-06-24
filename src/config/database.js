const mysql = require("mysql2");

const dbPool = mysql.createPool({
  host: "sql12.freesqldatabase.com",
  user: "sql12715703",
  password: "BGRUHNLSKG",
  database: "sql12715703",
});

module.exports = dbPool.promise();
