var parliament = require('./api/parliament')
  , state = require('./api/state');


exports.index = function (req, res) {
  res.json({ description: "This is Malaysia General Election Data API" });
};

exports.parliament = parliament.all;
exports.state = state.all;