const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"760517Gogi",
    database: "newskill"
});


connection.query(
    'INSERT INTO competition ( CompetitorName, CompetitiorAge) VALUES (?, ?)',
    ['PESHO', 25],
    function (err, results) {
        if (err) console.log(err);
        console.log(results);
    }
);