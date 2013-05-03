var app
  , parliament = require('./api/parliament')
  , state = require('./api/state');


var Api = function(server) {
  app = server;
};

Api.prototype.routes = function() {
  // General Routes
  app.get('/api', function(req, res) {
    res.json({ description: "This is Malaysia General Election Data API" });
  });

  // Parliament Data
  app.get('/api/parliament', parliament.all);
  app.get('/api/parliament/:id', parliament.findSingle);

  // State Data
  app.get('/api/state', state.all);
  app.get('/api/state/:id', state.findSingle);
};

module.exports = Api;