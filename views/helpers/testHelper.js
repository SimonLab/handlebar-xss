var Handlebars = require('handlebars');

module.exports = function (value) {
  text = Handlebars.Utils.escapeExpression(value);

  var result = '<p>' + text + '</p>';

  return new Handlebars.SafeString(result);
}
