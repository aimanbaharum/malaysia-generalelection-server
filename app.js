var express = require('express')
  , routes = require('./routes')
  , api = require('./routes/api');

var app = module.exports = express();

// Configuration
app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});

app.get('/api', api.index);
app.get('/api/parliament', api.parliament);
app.get('/api/state', api.state);

// Start server
app.listen(3000, function() {
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
