var parliament_seats = require('../../data/parliament_seats');

exports.all = function(req, res) {
  res.json(parliament_seats);
};

exports.findSingle = function(req, res) {
  var len = parliament_seats.length;
  for(var i=0; i<len; i++) {
    if(parliament_seats[i].id === req.params.id) {
      res.json(parliament_seats[i]);
    }
  }
  res.send(404);
};