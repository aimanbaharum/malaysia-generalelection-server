var chai = require('chai')
  , chaiHttp = require('chai-http')
  , should = chai.should()
  , app = require('./../app');

chai.use(chaiHttp);

describe("HTML5 Landing page test", function() {
  it("should not return any page", function(done) {
    chai.request(app)
      .get('/')
      .res(function(res) {
        res.should.have.status(404);
        done();
      });
  });
});