const fs = require("fs");
const path = require("path")
const express = require("express")

const app = express();


app.use(express.static(path.join(__dirname, "views"), { extensions: ["html", "htm"] }));
app.use(express.static(path.join(__dirname, "media"), { extensions: ["gif", "jpg", "png"] }));
app.use(express.static(path.join(__dirname, "public"), { extensions: ["css", "js"] }));
app.use(express.urlencoded({ extended: true }));
//app.set("view engine", "html"); //express is set to read ejs, pug, or handlebars but not html


app.get("/", (req, res)=>{ //chat gpt gave solution \/
    const filePath = path.join(__dirname, "views", "sample.html");
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(err.status || 404).send('Internal Server Error');
        }
    });
});

app.listen(8000, (err)=>{
    if (err) throw err;
    console.log("server started on port 8000");
});


// women