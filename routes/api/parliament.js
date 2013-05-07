var _ = require('underscore')
  , parliament_seats = require('../../data/parliament_seats');

exports.all = function(req, res) {
  res.json(parliament_seats);
};

exports.findSingle = function(req, res) {
  var found = _.findWhere(parliament_seats, {id: req.params.id.toUpperCase()});
  if(found) {
    res.json(found);
  } else {
    res.send(404);
  }
};