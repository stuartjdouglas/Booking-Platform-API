var rootRoutes = require('../endpoints/root.js');
module.exports = function(app) {
    app.get('/', rootRoutes.about);
};