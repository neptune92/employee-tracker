USE employee_db;


INSERT INTO department (name)
VALUES
("Sales"),
("Marketing"),
("HR"),
("Engineering");


INSERT INTO role (title, salary, department_id)
VALUES
("Sales Rep", 35000, 1),
("Marketeer", 60000, 2),
("Manager", 70000, 3),
("Engineer", 52000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("John", "O'Callaghan", 1, 8123),
("Max", "Power", 4, null),
("Sam", "Smith", 2, 8675),
("Liz", "Smith", 4, null);