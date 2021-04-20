const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");


const connection = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employees_db"
});

connection.connect((err) => {
    if (err) err;
    console.log("Connected");
    company();
});


 company = () => {
    inquirer.prompt
    ({
            type: "list",
            name: "Menu",
            message: "Please select an option",
            choices: [
                "Add department",
                "Add role",
                "Add employee",
                "View employees",
                "View departments",
                "View roles",
                "Update employee",
                "EXIT"
            ]
        })
        .then((result) => {

            switch (result.menu) {
                case "Add role":
                    addRole();
                    break;


            case "View role":
                viewRole();
                break;


            case "View departments":
                viewDept();
                break;


            case "Add departments":
                addDept();
                break;


            case "View employee":
                viewEmp;
                break;


            case "Add employee":
                addEmp;
                break;


            case "Exit":
                exitCompany();
                break;
            default:
                break;

            }
        })
};


    addRole = () => {
        inquirer.prompt
        ([
                {
                    name: 'newRole',
                    type: 'input',
                    message: "What is the new role you would like to add?"
                },

                {
                    name: 'salaryType',
                    type: 'input',
                    message: "What is the salary for this role?"
                },

                {
                    name: 'departmentID',
                    type: 'input',
                    message: "What is the department ID?"
                }
            ])
            .then((res) => {
                connection.query(`INSERT INTO role(title, salary, department_id) VALUES (${res.newRole}, ${res.salaryType}, ${res.departmentID})`
                ((err, res) => {
                    if (err) throw err;
                    consoleTable(res);
                    company();
                })
                );
            });
        }


            viewRole = () => {
                let query = "SELECT * FROM role";
                connection.query(query, (err, res) => {
                    if (err) throw err;
                    consoleTable(res);
                    company();
                });
            }


            addDept = () => {
                inquirer.prompt ({

                    name: "deptName",
                    type: "input",
                    message: "What is the name of the department?"
                
                }).then((res) => {
                    connection.query(`INSERT INTO department(name) VALUES (${res.deptName})`
                    ((err, res) => {
                        if (err) throw err;
                        consoleTable(res);
                        company();
                    })
                    
                );
            });
            }


            viewDept = () => {
                let query = "SELECT * FROM department";
                connection.query(query, (err, res) => {
                    if (err) throw err;
                    consoleTable(res);
                    company();
                });
            }

        

