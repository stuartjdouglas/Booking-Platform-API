var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;
var userSchema   = mongoose.Schema({
    username: String,
    email: String
});
var User = mongoose.model('user', userSchema);

function addUser(u, p) {
   
    var user = new User({
        username: u,
        password: p
    });
    user.save(function (err, fluffy) {
        if (err) return console.error(err);
    });
}

function getUsers(callback) {


    User.find(function (err, Users) {
        if (err) return console.error(err);
        callback(Users);
    }).select('username -_id');


}

//TODO Password change

//TODO Email change

//TODO Remove user

//TODO Get single user

//TODO update single user

//TODO Get all users of group type

// make this available to our users in our Node applications
module.exports = {
    getUsers : getUsers,
    addUser : addUser
};