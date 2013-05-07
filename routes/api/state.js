var _ = require('underscore')
  , state_seats = require('../../data/state_seats');

exports.all = function (req, res) {
  res.json(state_seats);
};

exports.findSingle = function(req, res) {
  var found = _.findWhere(state_seats, {id: req.params.id.toUpperCase()});
  if(found) {
    res.json(found);
  } else {
    res.send(404);
  }
};