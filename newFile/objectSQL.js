const mysql = require('mysql2');
let arr = [{ name: "Sasho", age: 30 }, { name: "Feodor", age: "25" }, { name: "Cvetan", age: 32 }];


function SQLsolver(dataArray){
    const connection = mysql.createConnection({
        host: "localhost",
        user: 'root',
        password: '760517Gogi',
        database: 'newskill'
    });
    for (let value of dataArray) {
        connection.query(
            'INSERT INTO competition(CompetitorName, CompetitiorAge) VALUES(?, ?)',
            [value.name, value.age],

            function (err, results) {
                if (err) console.log(err);
                console.log(results);
            }

        )
    }
}

const data = [{name: "Gosho", age: 20 }, {name: "Peshka", age: 18}, {name: "Ceco", age: 19 }]

SQLsolver(data);

