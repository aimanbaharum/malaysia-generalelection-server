var parliament = require('./api/parliament');


var state_seats = require('../data/state_seats');


exports.index = function (req, res) {
  res.json({ description: "This is Malaysia General Election Data API" });
};

exports.parliament = parliament.all;

exports.state = function (req, res) {
  res.json(state_seats);
};