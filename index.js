var express = require("express");
var bodyparser = require("body-parser");
const Database = require("./model/Database");
var Admin = require("./model/Admin");
var Employee = require("./model/Employee");
var Leave = require("./model/Leave")

var app = express();

app.use(express.json());

app.get("/",function(req,res){
    res.sendFile(__dirname + "/" + "index.html");
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
})

app.get('/', function (req, res) {
    res.send("Hello")
});

app.use("/admin", require("./routes/admin"));
app.use("/employee", require("./routes/employee"));
app.use("/leave", require("./routes/leave"));


app.listen(8000, function () {
    console.log('Website started');
});