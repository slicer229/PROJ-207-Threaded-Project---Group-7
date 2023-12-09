const fs = require("fs");
const path = require("path");
const express = require("express");
const dayjs = require("dayjs");

const app = express();


app.use(express.static(path.join(__dirname, "views"), { extensions: ["html", "htm"] }));
app.use(express.static(path.join(__dirname, "media"), { extensions: ["gif", "jpg", "png"] }));
app.use(express.static(path.join(__dirname, "public"), { extensions: ["css", "js"] }));
// app.use(express.urlencoded({ extended: true })); // pretty sure this is for temp engines
// app.set("view engine", "html"); //express is set to read ejs, pug, or handlebars but not html


app.get("/", (req, res)=>{ 
    const filePath = path.join(__dirname, "views", "index.html"); // I would only split the path.join() to a const if it was used more than once -Lance
    res.sendFile(filePath, (err)=>{
        if (err) {
            console.error(err);                                             // Not sure if this prevents the entire application from crashing ? 
            res.status(err.status || 404).send('Internal Server Error');    // If it doesn't, maybe we should find something that does? 
        }                                                                   // (if time allows it (probably at the end))
    });
});

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, "views", "404.html")); 
})

app.listen(8000, (err)=>{
    if (err) throw err;
    console.log("server started on port 8000");
});


