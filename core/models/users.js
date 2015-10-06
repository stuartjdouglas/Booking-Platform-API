var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = mongoose.Schema({
    username: String,
    email: String
});


function addUser(u, p) {
    var User = mongoose.model('user', userSchema);
    var user = new User({
        username: u,
        password: p
    });
    user.save(function (err, fluffy) {
        if (err) return console.error(err);
        //fluffy.speak();
    });
}

function getUsers(callback) {
    var User = mongoose.model('user', userSchema);
    console.log("getting users");

    User.find(function (err, Users) {
        if (err) return console.error(err);
        callback(Users);
    }).select('username -_id');


}

// make this available to our users in our Node applications
module.exports = {
    getUsers : getUsers,
    addUser : addUser
};