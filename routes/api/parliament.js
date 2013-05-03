var parliament_seats = require('../../data/parliament_seats');

exports.all = function(req, res) {
  res.json(parliament_seats);
};