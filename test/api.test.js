var chai = require('chai')
  , should = chai.should()
  , app = require('./../app');

chai.use(require('chai-http'));
chai.use(require('chai-things'));

describe("General API Response Tests", function() {
  it("tests api root response", function(done) {
    chai.request(app)
      .get('/api')
      .res(function(res) {
        res.should.have.status(200);
        res.body.should.deep.equal({ description: "This is Malaysia General Election Data API" });
        done();
      });
  });
});

describe("Parliament Data API Tests", function() {
  it("should return all parliament data", function(done) {
    chai.request(app)
      .get('/api/parliament')
      .res(function(res) {
        res.should.have.status(200);
        res.body.should.have.length(222);
        done();
      });
  });

  it("should return Sungai Petani given P15 as id", function(done) {
    chai.request(app)
      .get('/api/parliament/P15')
      .res(function(res) {
        res.should.have.status(200);
        res.body.should.have.property('name')
          .and.equal("Sungai Petani");
        done();
      });
  });

  it("should return Sungai Petani given p15 (lowercaps) as id", function(done) {
    chai.request(app)
      .get('/api/parliament/p15')
      .res(function(res) {
        res.should.have.status(200);
        res.body.should.have.property('name')
          .and.equal("Sungai Petani");
        done();
      });
  });

  it("should return 3 state seats of Sungai Petani where one of them is Bakar Arang", function(done) {
    chai.request(app)
      .get('/api/parliament/p15')
      .res(function(res) {
        res.should.have.status(200);
        res.body.should.have.property('state')
          .and.have.length(3)
          .and.contain.an.item.with.property('name', "Bakar Arang");
        done();
      });
  });

  it("should return 404 when given parliament invalid id", function(done) {
    chai.request(app)
      .get('/api/parliament/ARGHHHH')
      .res(function(res) {
        res.should.have.status(404);
        done();
      });
  });
});

describe("State Data API Tests", function() {
  it("should return all state data", function(done) {
    chai.request(app)
      .get('/api/state')
      .res(function(res) {
        res.should.have.status(200);
        res.body.should.have.length(576);
        done();
      })
  });

  it("should return Bakar Arang with parliament geo location given N43 as id", function(done) {
    chai.request(app)
      .get('/api/state/N43')
      .res(function(res) {
        res.should.have.status(200);
        res.body.should.have.property('name')
          .and.equal("Bakar Arang");
        res.body.should.have.property('parliament_geo_lat')
          .and.equal("5.649024");
        done();
      });
  });

  it("should return Bakar Arang given n43 (lowercaps) as id", function(done) {
    chai.request(app)
      .get('/api/state/n43')
      .res(function(res) {
        res.should.have.status(200);
        res.body.should.have.property('name')
          .and.equal("Bakar Arang");
        done();
      });
  });


  it("should return 404 when given invalid state id", function(done) {
    chai.request(app)
      .get('/api/state/OPPPSS')
      .res(function(res) {
        res.should.have.status(404);
        done();
      });
  });
});
