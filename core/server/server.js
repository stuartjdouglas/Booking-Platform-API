var express = require('express');
var app = express();
var api = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
//var morgan = require('morgan');

var http = require('http').Server(app);
var db = require('../config/database.js');

require('./routes/serverRoutes.js')(api);
require('../client/routes/routes.js')(app);

//app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// Setup the view engine
app.set('views', 'core/client/views');
app.set('view engine', 'hbs');

app.use('/api', api);

// CORS headers
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    next();
});

function init() {
    // Create the server and start listening to defined port from config
    db.startConnection();
    http.listen(port, function () {
        console.log('Server listening on localhost: ' + port);
    });

    return app;
}

module.exports = init;
