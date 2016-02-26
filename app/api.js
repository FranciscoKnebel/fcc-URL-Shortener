var model = require('./models/url');

module.exports = function(app, db, dirname) {
    db.on  ('error', console.error.bind(console, 'connection error:'));
    
    db.once('open' , function() {
        /*var URL = new model({original: 'http://www.freecodecamp.com', short: 'http://www.smaller.herokuapp.com/1'});
        
        URL.save(function (err, URL) {
            if (err) 
                return console.error(err);
                
            console.log(URL);
        });*/
        app.route('/new/')
            .get(function(req, res) {
                res.sendFile(dirname + '/client/views/new.html');
        });
        
        app.route('/new/:id/')
            .get(function(req, res) {
            var id = req.params.id;

            console.log(id);
            res.send("New url page");
        });
        
        /*model.find({short: 'http://www.smaller.herokuapp.com/1'}, function(err, potato) {
            if(err)
                throw console.error(err);
                
           console.log(potato); 
        });*/
        
        app.route('/:id')
            .get(function(req, res) {
                var id = req.params.id;
                //if(!id)
                //  res.status(404).sendFile(dirname + '/client/views/404.html');
                //else
                //  redirect id
            })
    });
};