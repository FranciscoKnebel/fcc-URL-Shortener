var model = require('./models/url');
var validator = require('validator');
var url = require("url");
var base62 = require("base62"); //encoder and decoder of base 62 (0-9, a-z, A-Z)

module.exports = function(app, db, dirname) {
    db.on  ('error', console.error.bind(console, 'connection error:'));
    
    db.once('open' , function() {
        var host = '';
        
        app.route('/new/*')
            .get(function(req, res) {
            host = getHost(req) + '/'; // ex: http://www.yourwebsitedomain.com/
            
            var id = req.url.substring(5);
            
            if(validator.isURL(id, {require_protocol: true})) {
                //check if document already exists
                model.findOne({original: id}, {_id: 0, __v: 0}, function(err, doc) {
                    if(err)
                        console.error(err.message);
                    
                    if(doc) { //if yes, send json with information
                        //Database document contains the original url,
                        //along with a base 62 variable, that corresponds to it.
                        //When responding, the server adds the host to the json.
                        var obj = {original: doc.original, short: host + doc.short}
                        res.json(obj);
                    }
                    else { //if no, create and then send json
                        model.count({}, function(err, count) {
                            if(err)
                                throw err;
                            
                            //Database document will contain the original url,
                            //alongside a base 62 variable, that corresponds to it.
                            //When responding, the server adds the host to the json.
                            var doc = new model({original: id, short: base62.encode(count).toString()});
                            doc.save();
 
                            res.json({original: doc.original, short: host + doc.short});
                        });
                    }
                });
            }
            else {
                //if user informs an invalid url, the json contains an error message.
                var obj = {error: "Invalid url"};
                res.json(obj);
            }
        });
        
        app.route('/:id')
            .get(function(req, res) {
                var id = req.params.id;
                
                //check if already exists
                //if yes, redirect
                //if no, 404 page
                model.findOne({short: id}, function(err, doc) {
                    if(err)
                        console.error(err.message);
                        
                    if(doc)
                        res.redirect(doc.original);
                    else
                        res.status(404).sendFile(dirname + '/client/views/404.html');
                });
            });
    });
    
    function getHost(req) {
        return url.format({
            protocol: req.protocol,
            host: req.get('host'),
          });
    }
};