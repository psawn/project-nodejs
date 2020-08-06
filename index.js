const express = require ("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT,function () {
    console.log("Sever is running");
})

app.use(express.static("public"));
app.set("view engine","ejs");

const fs = require("fs");
app.get("/",function (req,res) {
    res.render("home-project");
})
app.get("/blogpage",function (req,res) {
    let cats=fs.readFileSync("data/blogdt.json","UTF-8");
    cats=JSON.parse(cats);
    res.render("blogpage",{
        cats : cats,
        id : 1
    });
})
app.get("/blogpage/:pg",function (req,res) {
    let cats=fs.readFileSync("data/blogdt.json","UTF-8");
    cats=JSON.parse(cats);
    let p = req.params.pg;
    let count = 0
    cats.map(e=>{
        count++;
        if((cats.length-e.num+3)/3 == p){
            res.render("blogpage",{
                cats : cats,
                id : parseInt(p)
            });
            count = 0;
        };
    });
    if(count>=cats.length){
        res.send("Khong tim thay");
    };
})

