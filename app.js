var express = require('express');
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/source'));
const fetch = require("node-fetch");
const port = process.env.PORT || 5000;


app.get("/", function(req, res){
    res.render("index");
})




app.get("/dashboard", function(req, res){
    url = "https://corona.lmao.ninja/v2/countries";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
    res.render("globalcases", {allData:data});
    });
})

app.get("/resources", function(req,res){
    res.render("covidsourcesmap");
})

app.get("/CoviCompanion", function(req, res){
    res.render("chatbot");
})


app.listen(port, () => console.log('App available on http://localhost:5000'))

