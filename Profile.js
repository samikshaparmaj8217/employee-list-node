let Database = require('../model/Database');
class Profile {
    profile_id = 0;
    emp_name = '';
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
}
