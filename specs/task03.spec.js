let request = require("supertest");
let app = require("../src/express_application/app");
const assert = require("chai").assert;

describe("Functional Test #start_test", function() {
  it("should check login", function(done) {
    request(app)
      .get("/login")
      .set("Accept", "application/json")
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.status, 200);
        done();
      });
  });
  it("should check signup #end_test", function(done) {
    request(app)
      .get("/signup")
      .set("Accept", "application/json")
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.status, 200);
        done();
      });
  });
});
