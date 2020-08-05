const express = require ("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT,function () {
    console.log("Sever is running");
})

app.use(express.static("public"));
app.set("view engine","ejs");
var counter = 0;

const fs = require("fs");


app.get("/",function (req,res) {
    res.render("home-project");
})

