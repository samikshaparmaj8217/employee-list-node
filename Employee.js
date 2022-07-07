let Database = require('../model/Database');

class Employees {
    emp_id = 0;
    emp_name = '';
    emp_salary = '';
    emp_joining_date = '';
    query = '';

    db = new Database.Database();

    constructor() {
        this.emp_id = 0;
        this.emp_name = '';
        this.emp_salary = '';
        this.emp_joining_date = '';
    }

    save() {
        this.query = "INSERT INTO employee(emp_name, emp_salary, emp_joining_date)  ";
        this.query += "VALUES ('" + this.emp_name + "','" + this.emp_salary + "',STR_TO_DATE('" + this.emp_joining_date + "', '%Y-%m-%d'))";
    
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                    
                }
                
                resolve(result);
            
            });
            
        });
    }

    list() {
        this.query = "SELECT *, DATE_FORMAT(emp_joining_date, '%d-%m-%Y') AS joiningdatediplay FROM employee ";
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    get() {
        this.query = "SELECT *, DATE_FORMAT(emp_joining_date, '%d-%m-%Y') AS joiningdatediplay FROM employee WHERE emp_id=" + this.emp_id;
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    delete() {
        this.query = "DELETE FROM employee WHERE  emp_id=" + this.emp_id;
        console.log(this.query);
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    update() {
        this.query = "UPDATE employee SET emp_name='" + this.emp_name +"',  emp_salary= '" + this.emp_salary +"' ,emp_joining_date=STR_TO_DATE('" + this.emp_joining_date + "','%d-%m-%Y')" +" WHERE emp_id=" + this.emp_id ;
        console.log(this.query)
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                resolve(result);
                console.log(err);
            
            });
            
        });
    }
}



module.exports = {
    Employees: Employees
}