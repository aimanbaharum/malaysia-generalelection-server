var express = require('express')
  , routes = require('./routes')
  , Api = require('./routes/api');

var app = module.exports = express()
  , api = new Api(app);

// Configuration
app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

api.routes();

// Start server
app.listen(3000, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
