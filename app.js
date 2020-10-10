var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/museum", function(req, res){
  res.render("museum");
});

app.get("/patatap", function(req, res){
  res.render("patatap");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log("server started");
});
