var chai = require('chai')
  , chaiHttp = require('chai-http')
  , should = chai.should()
  , app = require('./../app');

chai.use(chaiHttp);

describe("API Test", function() {
  it("tests the root", function(done) {
    chai.request(app)
      .get('/api')
      .res(function (res) {
        res.should.have.status(200);
        res.body.should.deep.equal({ description: "This is Malaysia General Election Data API" });
        done();
      });
  });

  it("checks the parliament data", function(done) {
    chai.request(app)
      .get('/api/parliament')
      .res(function (res) {
        res.should.have.status(200);
        res.body.should.have.length(222);
        done();
      });
  });

  it("checks the state data", function(done) {
    chai.request(app)
      .get('/api/state')
      .res(function (res) {
        res.should.have.status(200);
        res.body.should.have.length(576);
        done();
      })
  });
});
