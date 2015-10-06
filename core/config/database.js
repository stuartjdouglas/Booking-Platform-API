
var mongoose = require('mongoose');
var config = require('./config.js');


function startConnection() {
    mongoose.connect(config.dburl);


    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
        console.log("Connection to database");
    });
}

function stopConnection() {
    var db = mongoose.connection;
    db.close();
}

module.exports = {
    startConnection : startConnection,
    stopConnection : stopConnection
};