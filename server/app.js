var express = require("express");
var app = express();
var path = require('path');
//var data = require('./public/data/data');

app.set("port", process.env.PORT || 5000);

app.get("/jq", function(req,res,next){
    res.sendFile(path.join(__dirname, "./public/views/indexjq.html"));
});

app.get("/*", function(req,res,next){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file))
});

app.listen(app.get("port"), function(req,res,next){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;