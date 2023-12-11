const mysql = require('mysql'); // Implementation still WIP
const express = require('express');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs'); // Not used (yet)


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

// START Create Message (Contact page)

app.post("/insertcontactMessage", (req, res) => {
    console.log(req.body);
    var conn = mysql.createConnection({
        host: "localhost",
        user: "amitOOSD",
        password: "password",
        database: "proj7DataBase"
    });

    conn.connect((err) => {
        if (err) throw err;
        var sql = "INSERT INTO `contactMessage` (`cxFullName`, `cxEmail`, `cxPPhone`, `cxContactMessage`) VALUES (?,?,?,?)";
        var data = [req.body.cxFullName, req.body.cxEmail, req.body.cxPPhone, req.body.cxContactMessage];

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

// End Create Message (Contact page)

// START retrieve data from users database
app.get("/retrieveusers", (req, res) => {
    var conn = mysql.createConnection({
        host: "localhost",
        user: "amitOOSD",
        password: "password",
        database: "proj7DataBase"
    });
    conn.connect((err) => {
        if (err) throw err;
        var sql = "SELECT * FROM `users`";
        conn.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    }
    );
}
);
// END retrieve data from users database

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});


// const mysql = require("mysql");
// const fs = require("fs");
// const path = require("path");
// const express = require("express");
// const dayjs = require("dayjs");

// const app = express();

// app.use(express.static(path.join(__dirname, "views"), { extensions: ["html", "htm"] }));
// app.use(express.static(path.join(__dirname, "media"), { extensions: ["gif", "jpg", "png"] }));
// app.use(express.static(path.join(__dirname, "public"), { extensions: ["css", "js"] }));

// app.get("/", (req, res) => {
//     const filePath = path.join(__dirname, "views", "index.html"); // I would only split the path.join() to a const if it was used more than once -Lance
//     res.sendFile(filePath, (err) => {
//         if (err) {
//             console.error(err);                                             // Not sure if this prevents the entire application from crashing ? 
//             res.status(err.status || 404).send('Internal Server Error');    // If it doesn't, maybe we should find something that does? 
//         }                                                                   // (if time allows it (probably at the end))
//     });
// });

// // insert new - for creating users

// function getConnection(){
//     return mysql.createConnection({
//         host: "localhost",
//         user: "amitOOSD",
//         password: "password",
//         database: "proj7DataBase"
//     }); 
// }

// app.post("/insertusers", (req, res) => {
//     console.log(req.body);
//     var conn = getConnection();
//     conn.connect((err) => {
//         if (err) throw err;

//         var sql = "INSERT INTO `users` (`cxFirstName`, `cxLastName`, `cxEmail`, `cxPPhone`, `cxBPhone`, `cxAddress`, `cxCity`, `cxProv`, `cxCountry`, `cxPostalCode`, `cxPassword`) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
//         var data = [req.body.cxFirstName, req.body.cxLastName, req.body.cxEmail, req.body.cxPPhone, req.body.cxBPhone, req.body.cxAddress, req.body.cxCity, req.body.cxProv, req.body.cxCountry, req.body.cxPostalCode, req.body.cxPassword];
//         console.log(data);
//         conn.query({ sql: sql, values: data }, (err, result) => {
//             if (err) throw err;
//             console.log(result);

//             if (result.affectedRows) {
//                 res.sendFile(__dirname + "/confirmation.html");
//             }
//             else {
//                 res.sendFile(__dirname + "/404.html");
//             }
//         });
//     });
//  });

// // end of creating users

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, "views", "404.html"));
// });

// app.listen(8000, (err) => {
//     if (err) throw err;
//     console.log("server started on port 8000");
// });


