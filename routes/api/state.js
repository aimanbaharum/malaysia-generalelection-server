var state_seats = require('../../data/state_seats');

exports.all = function (req, res) {
  res.json(state_seats);
};