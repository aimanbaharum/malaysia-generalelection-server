var app
  , parliament = require('./api/parliament')
  , state = require('./api/state');


var Api = function(server) {
  app = server;
};

Api.prototype.routes = function() {
  app.get('/api', function(req, res) {
    res.json({ description: "This is Malaysia General Election Data API" });
  });
  app.get('/api/parliament', parliament.all);
  app.get('/api/parliament/:id', parliament.findSingle);
  app.get('/api/state', state.all);
};

module.exports = Api;