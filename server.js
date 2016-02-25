var express = require("express");
var app = express();
var routes = require("./app/routes/index.js");
var port = process.env.PORT || 8080;

routes(app, __dirname);

app.use(function(req, res) {
    res.status(404).sendFile(__dirname + '/client/views/404.html');
});

app.listen(port,  function () {
	console.log('Listening on port ' + port + '...');
});

var mongo = require("mongodb").MongoClient;
mongo.connect(process.env["MONGOLAB_URL"], function(err, db) {
    if(err)
        throw err;
        
    console.log(db);
    
    db.close();
});