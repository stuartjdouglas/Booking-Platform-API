var rootRoutes = require('../controllers/root.js');
var Users = require('../../models/users.js');
module.exports = function(api) {
    api.get('/', rootRoutes.about);

    api.get('/users', function (req, res) {

           Users.getUsers(function(callback) {
               res.send(callback);
           });
            //Users('getUsers', function(users) {
            //    res.send(users);
            //})
        //res.send();
    }
    );

    api.post('/user/:user', function(req, res) {
        require('../../models/users.js').addUser(req.params.user, 'something');
        res.send("hope");
    })
};



