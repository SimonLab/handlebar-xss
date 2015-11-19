exports.register = function (server, option, next) {

  server.route([
    {
      method: 'GET',
      path: '/',
      config: {
        description: 'return the home page',
        handler: function (request, reply) {

          return reply.view('home', { value: "this value has no js script hidden!" });
        }
      }
    }
  ]);
  return next();
}

exports.register.attributes = {
  name: 'Home'
}
