exports.register = function (server, option, next) {

  server.route([
    {
      method: 'GET',
      path: '/xss',
      config: {
        description: 'return the home page with xss',
        handler: function (request, reply) {

          return reply.view('home', { value: "this value is <br/>some script: <script>alert('He bim');</script>" });
        }
      }
    }
  ]);
  return next();
}

exports.register.attributes = {
  name: 'XSS'
}
