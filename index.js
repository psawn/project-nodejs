const express = require ("express");
const app = express();
const PORT = process.env.PORT || 6060;

app.listen(PORT,function () {
    console.log("Sever is running");
})

app.use(express.static("public"));
app.set("view engine","ejs");
var counter = 0;
app.get("/",function (req,res) {
    //res.sendFile(__dirname+"/views/answer_assignment13.html");
    let title ="Du bao thoi tiet";
    counter++;
    res.render("answer_assignment13",{
        title:title,
        counter:counter,
    });
});

app.get("/login",function (req,res) {
    res.send("Day la trang login");
});
const fs = require("fs");


app.get("/project",function (req,res) {
    res.render("home-project")
})

