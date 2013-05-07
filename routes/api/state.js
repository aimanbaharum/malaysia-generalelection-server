var state_seats = require('../../data/state_seats');

exports.all = function (req, res) {
  res.json(state_seats);
};

exports.findSingle = function(req, res) {
  for(var i=0, len = state_seats.length; i<len; i++) {
    if(state_seats[i].id === req.params.id) {
      res.json(state_seats[i]);
    }
  }
  res.send(404);
};