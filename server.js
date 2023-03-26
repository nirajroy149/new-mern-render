const dotenv = require("dotenv");
const express = require("express");
const app = express();
const path = require("path");

dotenv.config({path: "./config.env"});
require("./db/conn");

// app.set("view engine", "ejs");
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));


//middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, './client/build')));


// We link the router files to make our route easy
app.use(require("./router/auth"));

// 2. step heroku or render
let PORT = process.env.PORT || 5000;

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
 
app.listen(PORT,function(){
    console.log("Server started at port 5000.");
});


 

