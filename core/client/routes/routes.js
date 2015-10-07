module.exports = function(app){
    var User = require('../../models/users.js');


    app.get('/', function(req, res) {
        res.render('index', { title: 'Johndoe' });
    });

    app.get('/user/:user?', function(req, res) {
        res.render('user', { user: req.params.user });
    //    TODO connect to model
    });

    app.get('/users', function(req, res) {
        User.getUsers(function(callback) {
            res.render('users', {users: callback})
        });
    });


    /*
            TODO Admin
            Have function to check if admin user created
                Get list of admins, if empty, display admin register
                if not empty display login
    */

    //app.get('/user/', function(req, res) {
    //    res.render('index', { title: 'Johndoe' });
    //});

};

