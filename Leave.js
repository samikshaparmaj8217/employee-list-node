let Database = require('../model/Database');
class Leaves {
    leave_id = 0;
    emp_id = '';
    leave_type = '';
    leave_form = '';
    leave_to = '';
    reason = '';

    query = '';

    db = new Database.Database();

    constructor() {
        
        this.leave_id = 0;
        this.emp_name = '';
        this.leave_type = '';
        this.leave_form = '';
        this.leave_to = '';
        this.reason = '';
    }

    save() {
        this.query = "INSERT INTO leaves(emp_name, leave_type,leave_form, leave_to, reason) ";
        this.query += "VALUES ( '" + this.emp_name + "','" + this.leave_type + "',STR_TO_DATE('" + this.leave_form + "', '%Y-%m-%d'),STR_TO_DATE('" + this.leave_to + "', '%Y-%m-%d'),'" + this.reason + "')";
        console.log(this.query)
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
        this.query = "SELECT *, DATE_FORMAT(leave_form, '%d-%m-%Y') AS leavefromplay, DATE_FORMAT(leave_to, '%d-%m-%Y') AS leavetoplay  FROM leaves"

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
        this.query = "SELECT *, DATE_FORMAT(leave_form, '%d-%m-%Y') AS leavefromplay, DATE_FORMAT(leave_to, '%d-%m-%Y') AS leavetoplay FROM leaves WHERE leave_id=" + this.leave_id;
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
        this.query = "DELETE FROM leaves WHERE  leave_id=" + this.leave_id;

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
        this.query = "UPDATE leaves SET emp_name='" + this.emp_name + "',  reason= '" + this.reason + "', leave_type= '" + this.leave_type + "' ,leave_form=STR_TO_DATE('" + this.leave_form + "','%d-%m-%Y')" + "' ,leave_to=STR_TO_DATE('" + this.leave_to + "','%d-%m-%Y')" + " WHERE leave_id=" + this.leave_id;
       
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
    Leaves: Leaves
}