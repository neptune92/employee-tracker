const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("consoleTable");


const connection = mysql.createConnection ({
    host: "localhost",
    port: 4001,
    user: "user",
    password: "password",
    database: "employee_db"
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected');
    employee();
})


function employee() {
    inquirer
        .prompt({

        })
}