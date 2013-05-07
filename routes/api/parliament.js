var _ = require('underscore')
  , parliament_seats = require('../../data/parliament_seats')
  , state_seats = require('../../data/state_seats');

exports.all = function(req, res) {
  res.json(parliament_seats);
};

exports.findSingle = function(req, res) {
  var p_id = req.params.id.toUpperCase();
  var found = _.findWhere(parliament_seats, {id: p_id});
  if(found) {
    found.state = _.where(state_seats, {parliament_id: p_id});
    res.json(found);
  } else {
    res.send(404);
  }
};