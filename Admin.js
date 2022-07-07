let Database = require('../model/Database');

class Admin {
    id = 0;
    username = '';
    password = '';
    query = '';

    db = new Database.Database();

    constructor() {
        this.id = 0;
        this.username = '';
        this.password = '';
    }

    save() {
        this.query = "INSERT INTO admin (username,password) ";
        this.query += "VALUES ('" + this.username + "','" + this.password + "')";
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

    login() {
        // "SELECT username, password FROM admin WHERE username=samiksha AND password=1234";
        this.query = `SELECT username, password FROM admin WHERE username="${this.username}" AND password="${this.password}"`;
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
        this.query =' SELECT * FROM `admin` WHERE id='+ this.id;
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
}

module.exports = {
    Admin: Admin
}