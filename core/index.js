var server = require('./server');

function setupServer() {
    console.log("Setting up server");
    return server().init;
}


module.exports = {

    setupServer: setupServer
};