var server = require('./server/server.js');

function setupServer() {
    return server().init;
}

module.exports = {
    setupServer: setupServer
};