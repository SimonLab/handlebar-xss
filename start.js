var Server = require('./server.js');
var Hoek = require('hoek');
require('env2')('.env');
Server.init(process.env.PORT, function (err, server) {

  Hoek.assert(!err, err);
  console.log('The server is running on: ', server.info.uri);
});
