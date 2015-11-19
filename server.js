var Hapi = require('hapi');
var Home = require('./home');
var Xss = require('./xss');
var Handlebars = require('handlebars');
var Vision = require('vision')
exports.init = function (port, next) {
  var server = new Hapi.Server();
  server.connection({port: port});
  server.register([Home, Xss, Vision], function (err) {

    server.views({
      engines: {
        html: Handlebars
      },
      relativeTo: __dirname + '/views/',
      path: '.',
      layout: 'default',
      layoutPath: 'layout',
      helpersPath: 'helpers'
    });
    server.start(function (err) {

      return next(err, server);
    });
  });
};
