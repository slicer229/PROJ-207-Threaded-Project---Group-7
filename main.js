const mysql = require('mysql');
const express = require('express');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');


const app = express();

app.use(express.static(path.join(__dirname, "views"), { extensions: ["html", "htm"] }));
app.use(express.static(path.join(__dirname, "media"), { extensions: ["gif", "jpg", "png"] }));
app.use(express.static(path.join(__dirname, "public"), { extensions: ["css", "js"] }));

app.use(express.urlencoded({
    extended: true
}));

app.listen(8000, err => {
    if (err) throw err;
    console.log("server started on port 8000");
});

// START Create Username (Registration page)

app.post("/insertusers", (req, res) => {
    console.log(req.body);
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'amitOOSD',
        password: 'password',
        database: 'proj7DataBase'
    });

    conn.connect((err) => {
        if (err) throw err;

        var sql = "INSERT INTO `users` (`cxFirstName`, `cxLastName`, `cxEmail`, `cxPPhone`, `cxBPhone`, `cxAddress`, `cxCity`, `cxProv`, `cxCountry`, `cxPostalCode`, `cxPassword`) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
        var data = [req.body.cxFirstName, req.body.cxLastName, req.body.cxEmail, req.body.cxPPhone, req.body.cxBPhone, req.body.cxAddress, req.body.cxCity, req.body.cxProv, req.body.cxCountry, req.body.cxPostalCode, req.body.cxPassword];
        console.log(data);
        conn.query({ sql: sql, values: data }, (err, result) => {
            if (err) throw err;
            console.log(result);


            if (result.affectedRows) {
                res.sendFile(__dirname + "/views/confirmation.html");
            }
            else {
                res.sendFile(__dirname + "/views/404.html");
            }
        });
    });
});

// END Create User (Registration page)


// For next project (phase 2)

// START Create Message (Contact page)
// app.post("/insertcontactMessage", (req, res) => {
//     console.log(req.body);
//     var conn = mysql.createConnection({
//         host: "localhost",
//         user: "amitOOSD",
//         password: "password",
//         database: "proj7DataBase"
//     });

//     conn.connect((err) => {
//         if (err) throw err;
//         var sql = "INSERT INTO `contactMessage` (`cxFullName`, `cxEmail`, `cxPPhone`, `cxContactMessage`) VALUES (?,?,?,?)";
//         var data = [req.body.cxFullName, req.body.cxEmail, req.body.cxPPhone, req.body.cxContactMessage];

//         console.log(data);
//         conn.query({ sql: sql, values: data }, (err, result) => {
//             if (err) throw err;
//             console.log(result);


//             if (result.affectedRows) {
//                 res.sendFile(__dirname + "/views/confirmation.html");
//             }
//             else {
//                 res.sendFile(__dirname + "/views/404.html");
//             }
//         });
//     });
// });

// End Create Message (Contact page)


// For next project (phase 2)

// START retrieve data from users database
// app.get("/retrieveusers", (req, res) => {
//     var conn = mysql.createConnection({
//         host: "localhost",
//         user: "amitOOSD",
//         password: "password",
//         database: "proj7DataBase"
//     });
//     conn.connect((err) => {
//         if (err) throw err;
//         var sql = "SELECT * FROM `users`";
//         conn.query(sql, (err, result) => {
//             if (err) throw err;
//             console.log(result);
//             res.send(result);
//         });
//     }
//     );
// }
// );
// END retrieve data from users database

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});