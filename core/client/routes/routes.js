module.exports = function(app){
    var User = require('../../models/users.js');


    app.get('/', function(req, res) {
        res.render('index', { title: 'Johndoe' });
    });

    app.get('/user/:user?', function(req, res) {
        res.render('user', { user: req.params.user });
    });

    app.get('/users', function(req, res) {
        User.getUsers(function(callback) {
            res.render('users', {users: callback})
        });
    })

    //app.get('/user/', function(req, res) {
    //    res.render('index', { title: 'Johndoe' });
    //});

};

