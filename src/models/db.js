const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "3155",
    database: "node-complete",
});

module.exports = db.promise()