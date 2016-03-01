var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
// Use factory to pull logic to add to DB
//var data = require('./public/factories/data');
var pg = require('pg');

var connectionString = '';
if(process.env.DATABASE_URL != undefined) {
    connectionString = process.env.DATABASE_URL + 'ssl';
} else {
    connectionString = 'postgres://localhost:5432/pet_finder';
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), function(req,res,next){
    console.log("Listening on port: " + app.get("port"));
});

app.get("/jq", function(req,res,next){
    res.sendFile(path.join(__dirname, "./public/views/indexjq.html"));
});

app.get("/*", function(req,res,next){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file))
});



// 'POST' new favorite
app.post('/new', function(req, res) {
    console.log('from server.app: ', req.body);
    var addNew = {
        name: req.body.name,
        pet_id: req.body.pet_id,
        description: req.body.description,
        img: req.body.img
    };
    pg.connect(connectionString, function(err, client, done) {
        client.query('INSERT INTO favorites (name, pet_id, description, img) VALUES ($1, $2, $3, $4) RETURNING id',
            [addNew.name, addNew.pet_id, addNew.description, addNew.imgUrl],
            function (err, result) {
                done();
                if(err) {
                    console.log("Error inserting data: ", err);
                    res.send(false);
                } else {
                    res.send(result);
                }
            });
    });
});









//app.set("port", process.env.PORT || 5000);
//app.listen(app.get("port"), function(req,res,next){
//    console.log("Listening on port: " + app.get("port"));
//});

module.exports = app;