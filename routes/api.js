var parliament_seats = require('../data/parliament_seats')
  , state_seats = require('../data/state_seats');


exports.index = function (req, res) {
  res.json({ description: "This is Malaysia General Election Data API" });
};

exports.parliament = function (req, res) {
  res.json(parliament_seats);
};

exports.state = function (req, res) {
  res.json(state_seats);
};