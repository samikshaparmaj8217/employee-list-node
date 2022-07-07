var express = require("express");
var Leaves = require("../model/Leave");
const router = express.Router();

router.post("/register", async (req, res) => {
    let body = req.body;
    let leave = new Leaves.Leaves();
   
    leave.leave_id = body.data.leave_id;
    leave.emp_name = body.data.emp_name;
    leave.leave_type = body.data.leave_type;
    leave.leave_form = body.data.leave_form;
    leave.leave_to = body.data.leave_to;
    leave.reason = body.data.reason;

    leave.save().then(
        (result) => {
            let data = {
                data: {
                    status: "success",
                    data: result,
                },
            };
            res.end(JSON.stringify(data));
        },
        (err) => {
            let data = {
                data: {
                    status: "fail",
                },
            };
            res.end(JSON.stringify(data));
        }
    );
});

router.post("/list", async (req, res) => {
    let body = req.body;
    let leave = new Leaves.Leaves();

    leave.list().then(
        (result) => {
            let data = {
                data: {
                    status: "success",
                    data: result,
                },
            };
            res.end(JSON.stringify(data));
        },
        (err) => {
            let data = {
                data: {
                    status: "fail",
                },
            };
            res.end(JSON.stringify(data));
        }
    );
});

router.post("/get", async (req, res) => {
    let body = req.body;
    let leave = new Leaves.Leaves();
    leave.leave_id = body.data.leave_id;
    leave.get().then(
        (result) => {
            let data = {
                data: {
                    status: "success",
                    data: result,
                },
            };
            res.end(JSON.stringify(data));
        },
        (err) => {
            let data = {
                data: {
                    status: "fail",
                },
            };
            res.end(JSON.stringify(data));
        }
    );
});

router.post("/remove", async (req, res) => {
    let body = req.body;
    let leave = new Leaves.Leaves();
    leave.leave_id = body.data.leave_id;
    leave.delete().then(
        (result) => {
            let data = {
                data: {
                    status: "success",
                    data: result,
                },
            };
            res.end(JSON.stringify(data));
        },
        (err) => {
            let data = {
                data: {
                    status: "fail",
                },
            };
            res.end(JSON.stringify(data));
        }
    );
});

router.post("/update", async (req, res) => {
    let body = req.body;
    let leave = new Leaves.Leaves();
    
    leave.emp_name = body.data.emp_name;
    leave.leave_type = body.data.leave_type;
    leave.leave_form = body.data.leave_form;
    leave.leave_to = body.data.leave_to;
    leave.reason = body.data.reason;

    leave.update().then(
        (result) => {
            let data = {
                data: {
                    status: "success",
                    data: result,
                },
            };
            res.end(JSON.stringify(data));
        },
        (err) => {
            let data = {
                data: {
                    status: "fail",
                },
            };

            res.end(JSON.stringify(data));
        },

    );
});



module.exports = router;