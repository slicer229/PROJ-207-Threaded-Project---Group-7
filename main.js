const mysql = require("mysql");
const fs = require("fs");
const path = require("path");
const express = require("express");
const dayjs = require("dayjs");

const app = express();

app.use(express.static(path.join(__dirname, "views"), { extensions: ["html", "htm"] }));
app.use(express.static(path.join(__dirname, "media"), { extensions: ["gif", "jpg", "png"] }));
app.use(express.static(path.join(__dirname, "public"), { extensions: ["css", "js"] }));

app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "views", "index.html"); // I would only split the path.join() to a const if it was used more than once -Lance
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(err);                                             // Not sure if this prevents the entire application from crashing ? 
            res.status(err.status || 404).send('Internal Server Error');    // If it doesn't, maybe we should find something that does? 
        }                                                                   // (if time allows it (probably at the end))
    });
});

// insert new - for creating users
function getConnection(){
    return mysql.createConnection({
        host: "localhost",
        user: "amitOOSD",
        password: "password",
        database: "proj7DataBase"
    }); 
}

app.post("/insertusers", (req, res) => {
    var conn = getConnection();
    console.log(req.body);
    conn.connect((err) => {
        if (err) throw err;
        var sql = "INSERT INTO `users` (`cxUserID`, `cxFirstName`, `cxLastName`, `cxEmail`, `cxPPhone`, `cxBPhone`, `cxAddress`, `cxCity`, `cxProv`, `cxCountry`, `cxPostalCode`, `cxPassword`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
        var data = [req.body.cxUserID, req.body.cxFirstName, req.body.cxLastName, req.body.cxEmail, req.body.cxPPhone, req.body.cxBPhone, req.body.cxAddress, req.body.cxCity, req.body.cxProv, req.body.cxCountry, req.body.cxPostalCode, req.body.cxPassword];
        console.log(data);
        conn.query({ sql: sql, values: data }, (err, result) => {
            if (err) throw err;
            console.log(result);

            // conn.connect((err) => {
            //     if (err) throw err;

            //     var sql = "INSERT INTO `account_users` (`username`, `fName`, `lName`, `email`, `password`, `phone`, `address`, `city`) VALUES (?,?,?,?,?,?,?,?)";
            //     var data = [req.body.username, req.body.fName, req.body.lName, req.body.email, req.body.password, req.body.phone, req.body.address, req.body.city];
            //     console.log(data);
            //     conn.query({ sql: sql, values: data }, (err, result) => {
            //         if (err) throw err;
            //         console.log(result);


            if (result.affectedRows) {
                res.sendFile(__dirname + "/confirmation.html");
            }
            else {
                res.sendFile(__dirname + "/404.html");
            }
        });
    });
 });

// end of creating users


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(8000, (err) => {
    if (err) throw err;
    console.log("server started on port 8000");
});


