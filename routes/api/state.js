var _ = require('underscore')
  , parliament_seats = require('../../data/parliament_seats')
  , state_seats = require('../../data/state_seats');

exports.all = function (req, res) {
  res.json(state_seats);
};

exports.findSingle = function(req, res) {
  var found = _.findWhere(state_seats, {id: req.params.id.toUpperCase()});
  if(found) {
    var parliament = _.findWhere(parliament_seats, {id: found.parliament_id});
    found.parliament_geo_lat = parliament.geo_lat;
    found.parliament_geo_lng = parliament.geo_lng;
    res.json(found);
  } else {
    res.send(404);
  }
};