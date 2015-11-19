# handlebar-xss
Example on how to avoid cross-site scripting with handlebars {{}} vs {{{}}}

# Routes

- The server will return a value without any script or html inside on the home page: url equal to /
- The url /xss with return a value to the handlebars view with some js and html.
